import type { LoginChallengeUserInfo, LoginInfo } from "@/interfaces/auth/LoginModel"

export const useLogin =  async (challengeInfo: LoginChallengeUserInfo) => {
  const config = useRuntimeConfig();
  const now = new Date();
  const {data, status, refresh, error} = await useFetch (
    `/login`, {
      baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
      key: `/login/${challengeInfo.email}/${now}`,
      method: "POST",
      body: challengeInfo,
      credentials:`include`,
      transform: (response: any): any => {
        const payload = { login: response as LoginInfo };
        return payload;
      }
    }
  );

    return {
    data,
    status,
    refresh,
    error
  }
};
