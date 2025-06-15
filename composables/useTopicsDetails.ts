import type { TopicsSearchInfo } from "@/interfaces/contents/TopicsModel"
import type { TopicsInfo, PageInfo } from "@/interfaces/contents/TopicsModel"
import type { ErrorInfo } from "@/interfaces/error/ErrorModel"

export const useTopicsDetails = async (searchInfo: TopicsSearchInfo) => {
    const config = useRuntimeConfig();
    const now = new Date();
    const {data, status, refresh, error} = await useLazyFetch (
        `/topics/details/${searchInfo.topics_id}`, {
            baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
            key: `/topics/details/${searchInfo.topics_id}/${now}`,
            credentials:`include`,
            transform: (response: any): any => {
                const payload = { details: response.details as TopicsInfo, errors: response.errors as ErrorInfo[] };
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
