export interface TagInfo {
  tag_id: number;
  tag_nm: string;
  open_contents_cnt: number;
}

export interface TagCategoryInfo {
  tag_category_id: number;
  tag_category_nm: string;
  open_flg: number;
  tags: TagInfo[];
}
