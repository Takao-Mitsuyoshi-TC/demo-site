import { defineStore } from "pinia"


export const useContentsParam = defineStore(
  "state", {
    state: () => (
      {
        topics_group_id: 0,
        group_nm: "",
        topics_category_id: "",
        category_nm: "",
        filter: "",
        tag_id: [],
        topics_keyword: "",
        page_number: 1,
      }
    ),
  },
);