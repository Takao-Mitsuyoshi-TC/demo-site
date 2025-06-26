export const useLogout =  async () => {
  const config = useRuntimeConfig();
  const now = new Date();
  const {data, status, refresh, error} = await useFetch (
    `/logout`, {
      baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
      key: `/logout/${now}`,
      method: "POST",
      credentials:`include`
    }
  );

    return {
    data,
    status,
    refresh,
    error
  }
};
