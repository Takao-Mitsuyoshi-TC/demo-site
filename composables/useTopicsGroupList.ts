import type { TopicsGroupInfo } from "@/interfaces/contents/TopicsGroupModel"
import type { ErrorInfo } from "@/interfaces/error/ErrorModel"

export const useTopicsGroupList = async () => {
    const config = useRuntimeConfig();
    const now = new Date();
    const {data, status, refresh, error} = useLazyFetch (
        `/topics-group/list`, {
            baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
            key: `/topics-group/list/${now}`,
            credentials:`include`,
            transform: (response:any): any => {
                const payload = { list: response.list as TopicsGroupInfo[], errors: response.errors as ErrorInfo[] };
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
