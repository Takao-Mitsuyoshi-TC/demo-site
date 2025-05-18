import type { TopicsSearchInfo } from "@/interfaces/contents/TopicsModel"
import type { TopicsInfo, PageInfo } from "@/interfaces/contents/TopicsModel"
import type { ErrorInfo } from "@/interfaces/error/ErrorModel"

export const useTopicsList = async (searchInfo: TopicsSearchInfo) => {
    const config = useRuntimeConfig();
    const now = new Date();
    const {data, status, refresh, error} = useLazyFetch (
        `/topics_list`, {
            baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
            key: `/topics_list/${now}`,
            query: searchInfo,
            credentials:`include`,
            transform: (response:any): any => {
                const payload = { list: response.list as TopicsInfo[], pageInfo: response.pageInfo as PageInfo, errors: response.errors as ErrorInfo[] };
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
