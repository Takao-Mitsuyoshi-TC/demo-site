import type { TopicsListSearchInfo } from "@/interfaces/contents/TopicsModel"
import type { TopicsInfo, PageInfo } from "@/interfaces/contents/TopicsModel"
import type { ErrorInfo } from "@/interfaces/error/ErrorModel"

export const useTopicsList = async (searchInfo: TopicsListSearchInfo) => {
    const config = useRuntimeConfig();
    const now = new Date();

    let queryString : string = JSON.stringify(searchInfo).replace("tag_id", "tag_id[]");
    let query = searchInfo;

    if (searchInfo.tag_id != null && searchInfo.tag_id.length > 0 && searchInfo.tag_id != false) {

        // tag_idを複数で指定する場合は「tag_id[]」という名前でしかKurocoが受け付けていないのでここで無理やり変換
        if (!queryString.includes("tag_id[]")) {
            query = JSON.parse(queryString.replace("tag_id", "tag_id[]"));
        }
        else {
            query = JSON.parse(queryString);
        }
    }
    const {data, status, refresh, error} = await useLazyFetch (
        `/topics/list`, {
            baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
            key: `/topics/list/${queryString}/${searchInfo.pageID}/${now}`,
            query: query,
            credentials:`include`,
            transform: (response: any): any => {
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
