<script lang="ts" setup>
import type { TopicsInfo, TopicsListSearchInfo } from "@/interfaces/contents/TopicsModel"

const config = useRuntimeConfig();
const contentsParam = useContentsParam();

interface Props {
  topics_group_id: number;
  contents_type: string;
  category_nm: string;
  tag_id: number[];
}

const props = defineProps<Props>();

const searchInfo: TopicsListSearchInfo = reactive({ topics_group_id: props.topics_group_id, contents_type: props.contents_type, pageID: contentsParam.page_number, tag_id: props.tag_id});
searchInfo.topics_group_id = contentsParam.topics_group_id;
searchInfo.contents_type = contentsParam.topics_category_id;
searchInfo.topics_keyword = contentsParam.topics_keyword;
searchInfo.tag_id = contentsParam.tag_id;
searchInfo.pageID = contentsParam.page_number;

const Paging = async () => {
  searchInfo.pageID = contentsParam.page_number;

};

const { data, status, error, refresh} = await useTopicsList(searchInfo);

onUpdated(() => {
  if (status.value === "error") {
    throw createError({ statusCode: error.value?.statusCode, statusMessage: error.value?.statusMessage, fatal: true });
  }
});

</script>

<template>
  <template v-if="status === `success`">
    <v-divider></v-divider>
    <div v-if="category_nm === `undefined` || category_nm == null" class="text-h5 pa-5">ALL</div>
    <div v-else  class="text-h5 pa-5">{{ category_nm }}</div>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <V-col md="4" v-for="{topics_id, subject, ext_1} in data.list" cols="12">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-sheet v-bind="props" class="pa-5" :color="isHovering ? `primary` : `grey-lighten-3`" width="300">
                <v-sheet
                  elevation="12"
                  class="mx-auto"
                  height="200"
                  width="200"
                >
                <img :src="`${ext_1.url_org}?width=200&height=200`">
                </v-sheet>
                <div class="text-subtitle-1 pt-5">
                  <NuxtLink :to="{ name: `contents-id`, params: {id: topics_id} }">
                    {{ subject }}
                  </NuxtLink>
                </div>
              </v-sheet>

            </template>
        </v-hover>
        </V-col>  
      </v-row>
    </v-container>
    <v-pagination v-model="contentsParam.page_number" :length="data.pageInfo.totalPageCnt" total-visible="10" @click="Paging"></v-pagination>
  </template>

</template>