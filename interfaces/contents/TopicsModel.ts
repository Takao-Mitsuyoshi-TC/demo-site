import type { MasterInfo } from "@/interfaces/table/MasterModel";

export interface TopicsListSearchInfo {
    topics_group_id: number;
    contents_type?: string;
    filter?: string;
    topics_keyword?: string;
    pageID?: number;
    tag_id?: number[];
}

export interface TopicsSearchInfo {
    topics_id: number;
}

export interface FileInfo {
    id: string;
    url_org: string;
    dl_link: string;
    desc: string;
}

export interface ImageInfo {
    id: string;
    url: string;
    url_org: string;
}

export interface PageInfo {
    totalPageCnt: number;
    pageNo: number;
}

export interface TopicsInfo {
    topics_id: number;
    group_nm: string;
    content_type: number;
    subject: string;
    contents_type_nm: string;
    ext_1: ImageInfo;
    ext_2: FileInfo;
    ext_3: MasterInfo[];
    ext_4: MasterInfo[];
    ext_5: MasterInfo[];
    ext_6: MasterInfo[];
    ext_7: MasterInfo[];
    ext_8: string;
}

