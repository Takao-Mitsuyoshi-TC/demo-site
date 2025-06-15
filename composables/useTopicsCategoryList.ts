import type { TopicsCategorySearchInfo } from "@/interfaces/contents/TopicsCategoryModel"
import type { TopicsCategoryInfo } from "@/interfaces/contents/TopicsCategoryModel";
import type { ErrorInfo } from "@/interfaces/error/ErrorModel"

export const useTopicsCategoryList = async (searchInfo: TopicsCategorySearchInfo) => {
    const config = useRuntimeConfig();
    const now = new Date();
    const {data, status, refresh, error} = await useLazyFetch (
        `/topics-category/list`, {
            baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
            key: `/topics-category/list/${now}`,
            query: searchInfo,
            credentials:`include`,
            transform: (response: any): any => {
                let topicsCategoryList: TopicsCategoryInfo[];
                topicsCategoryList = response.list as TopicsCategoryInfo[];
                topicsCategoryList.sort((a, b) => a.category_weight - b.category_weight);
                
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
