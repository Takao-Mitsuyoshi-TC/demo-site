import type { ProfileInfo } from "@/interfaces/auth/LoginModel"

export const useLoginProfile =  async () => {
  const config = useRuntimeConfig();
  const now = new Date();
  const {data, status, refresh, error} = await useFetch (
    `/login/profile`, {
      baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
      key: `/login/profile/${now}`,
      credentials:`include`,
      transform: (response: any): any => {
        const payload = { profile: response as ProfileInfo };
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