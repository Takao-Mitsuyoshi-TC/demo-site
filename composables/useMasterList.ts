import type { MasterInfo, MasterSearchInfo } from "@/interfaces/table/MasterModel"
import type { ErrorInfo } from "@/interfaces/error/ErrorModel"

export const useMasterList = async (searchInfo: MasterSearchInfo) => {
    const config = useRuntimeConfig();
    const now = new Date();
    const {data, status, refresh, error} = useLazyFetch (
      `/master/list`, {
        baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
        key: `/master/list/${searchInfo.csvtable_id}/${now}`,
        query: searchInfo,
        credentials:`include`,
        transform: (response: any): any => {
          let masterList: MasterInfo[] = [];
          let index = 0;
          response.list.forEach((data: string[]) => {
            if (index > 0) {
              if (data[0] !== "") {
                const masterInfo: MasterInfo = { value: data[0], title: data[1] }
                masterList.push(masterInfo);
              }
            }
            
            index++;
          });
          const payload = { list: masterList , errors:  response.errors as ErrorInfo[] };
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
