import type { TagCategoryInfo } from "@/interfaces/contents/TagCategoryModel";
import type { ErrorInfo } from "@/interfaces/error/ErrorModel"

export const useTagCategoryList = async () => {
    const config = useRuntimeConfig();
    const now = new Date();
    const {data, status, refresh, error} = useLazyFetch (
        `/tag_category/list`, {
            baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
            key: `/tag_category/list/${now}`,
            credentials:`include`,
            transform: (response:any): any => {
                const payload = { list: response.list as TagCategoryInfo[], errors: response.errors as ErrorInfo[]};
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