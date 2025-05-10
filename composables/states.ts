import { defineStore } from "pinia";

export const useSearchStore = defineStore(
    "searchInfo",
    {
        state: () => ({
            topics_group_id: "7",
            contents_type: "",
            topics_id: ""
        }),
        actions: {
            setGroupid(id: string) {
                this.topics_group_id = id;
            },
            setContentsType(id: string) {
                this.contents_type = id;
            },
            setContentsId(id: string) {
                this.topics_id = id;
            },
        },
    }
);