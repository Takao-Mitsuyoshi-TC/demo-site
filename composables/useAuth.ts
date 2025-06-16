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
        return state.grant_token != "";
      }
    },
  },
);