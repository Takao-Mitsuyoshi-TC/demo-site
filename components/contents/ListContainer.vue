<script lang="ts" setup>
import type { TopicsInfo, TopicsSearchInfo } from "@/interfaces/contents/TopicsModel"

const config = useRuntimeConfig();
const contentsParam = useContentsParam();

interface Props {
    topics_group_id: number;
    contents_type: string;
    category_nm: string;
    tag_id: number[];
}

const props = defineProps<Props>();
const pageNumber = ref(1);

const searchInfo: TopicsSearchInfo = reactive({ topics_group_id: props.topics_group_id, contents_type: props.contents_type, pageID: pageNumber.value, tag_id: props.tag_id});
searchInfo.topics_group_id = contentsParam.topics_group_id;
searchInfo.contents_type = contentsParam.topics_category_id;
searchInfo.tag_id = contentsParam.tag_id;
searchInfo.pageID = pageNumber.value;

const { data, status, error} = await useTopicsList(searchInfo);

const Paging = async () => {
    searchInfo.topics_group_id = props.topics_group_id;
    searchInfo.contents_type = props.contents_type;
    searchInfo.pageID = pageNumber.value;
    searchInfo.tag_id = contentsParam.tag_id;
};


onUpdated(() => {
  if (status.value === "error") {
    throw createError({ statusCode: error.value?.statusCode, statusMessage: error.value?.statusMessage, fatal: true });
  }
});
</script>

<template>
  <template v-if="status === `success`">
    <v-divider></v-divider>
    <div class="text-h5 pa-5">{{ category_nm ?? "ALL" }}</div>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <V-col md="4" v-for="{subject, ext_1} in data.list" cols="12">
          <v-sheet class="pa-5" color="grey-lighten-3" width="300">
            <v-sheet
              elevation="12"
              class="mx-auto"
              height="200"
              width="200"
            >
            <img :src="`${ext_1.url_org}?width=200&height=200`">
            </v-sheet>
            <div class="text-subtitle-1 pt-5">{{ subject }}</div>
          </v-sheet>
        </V-col>  
      </v-row>
    </v-container>
    <v-pagination v-model="pageNumber" :length="data.pageInfo.totalPageCnt" total-visible="10" @click.prevent="Paging"></v-pagination>
  </template>

</template>