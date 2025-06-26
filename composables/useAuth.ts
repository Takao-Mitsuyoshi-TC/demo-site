import { defineStore } from "pinia"


export const useAuth = defineStore(
  "state", {
    state: () => (
      {
        user_id: 0,
        grant_token: "",
        email: "",
        group_ids: new Map<string, string>(),
      }
    ),
    getters: {
      isLogined: (state) => {
        if (typeof localStorage === 'undefined')
        {
          // サーバーサイドでの実行の場合は取得できないので無視
          return true;
        }
        const item = localStorage.getItem('Auth') ?? "";
        if (item === "")
        {
          return false;
        }

        const localStorageAuth = JSON.parse(item);

        if (localStorageAuth.grant_token !== "" && state.grant_token === "")
        {
          // 再読み込みなどでメモリ上の認証情報が消去されている場合はLocalStrageから取得する
          state.user_id = localStorageAuth.user_id;
          state.grant_token = localStorageAuth.grant_token;
          state.email = localStorageAuth.email;
          state.group_ids = localStorageAuth.group_ids;
        }

        return localStorageAuth.grant_token != "";
      },
      logout: () => {
        localStorage.setItem(`Auth`, "");
      }
    },
  },
);