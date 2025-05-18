import type { TopicsCategorySearchInfo } from "@/interfaces/contents/TopicsCategoryModel"
import type { TopicsCategoryInfo } from "@/interfaces/contents/TopicsCategoryModel";
import type { ErrorInfo } from "@/interfaces/error/ErrorModel"

export const useTopicsCategoryList = async (searchInfo: TopicsCategorySearchInfo) => {
    const config = useRuntimeConfig();
    const now = new Date();
    const {data, status, refresh, error} = useLazyFetch (
        `/topics-category/list`, {
            baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
            key: `/topics-category/list/${now}`,
            query: searchInfo,
            credentials:`include`,
            transform: (response:any): any => {
                const payload = { list: response.list as TopicsCategoryInfo[] , errors:  response.errors as ErrorInfo[] };
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
