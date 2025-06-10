import type { TopicsListSearchInfo } from "@/interfaces/contents/TopicsModel"
import type { ErrorInfo } from "@/interfaces/error/ErrorModel"

export const useTopicsListCountOnly = async (searchInfo: TopicsListSearchInfo) => {
    const config = useRuntimeConfig();
    const now = new Date();
    let queryString : string = JSON.stringify(searchInfo).replace("tag_id", "tag_id[]");
    let query = searchInfo;
    if (searchInfo.tag_id != null && searchInfo.tag_id.length > 0)
    {
        // tag_idを複数で指定する場合は「tag_id[]」という名前でしかKurocoが受け付けていないのでここで無理やり変換
        if (!queryString.includes("tag_id[]")) {
            query = JSON.parse(queryString.replace("tag_id", "tag_id[]"));
        }
        else {
            query = JSON.parse(queryString);
        }
        
    }
    const {data, status, refresh, error} = await useLazyFetch (
        `/topics/list/count_only`, {
            baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
            key: `/topics/list/count_only/${searchInfo.topics_group_id}${searchInfo.contents_type}${searchInfo.tag_id}${now}`,
            query: query,
            credentials:`include`,
            transform: (response: any): any => {
                const payload = {cnt: response.pageInfo.totalCnt as number, errors: response.errors as ErrorInfo[] };

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
