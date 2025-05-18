<script lang="ts" setup>
import type { TopicsCategoryInfo, TopicsCategorySearchInfo } from "@/interfaces/contents/TopicsCategoryModel"
import type { TopicsInfo, TopicsSearchInfo } from "@/interfaces/contents/TopicsModel"

const contentsParam = useContentsParam();

interface Props {
  topics_group_id: number;
  group_nm: string;
};
const props = defineProps<Props>();

const selectItem = (id: string, nm: string) => {
  contentsParam.topics_category_id = id;
  contentsParam.category_nm = nm;
};

const searchInfo: TopicsCategorySearchInfo = { topics_group_id: props.topics_group_id};

const { data, status, error } = await useTopicsCategoryList(searchInfo);

const totalCnt = ref(0);
onUpdated(() => {
  if (status.value === "error") {
    throw createError({ statusCode: error.value?.statusCode, statusMessage: error.value?.statusMessage, fatal: true });
  }
  data.value.list.forEach((topicsCategoryInfo: TopicsCategoryInfo) => {
    totalCnt.value = totalCnt.value + topicsCategoryInfo.cnt;
  });
});
onBeforeUpdate(() => {
  totalCnt.value = 0;
});
</script>

<template>
  <v-list-item :title="`${ props.group_nm }`" subtitle=""></v-list-item>
  <v-divider></v-divider>
  <div v-if="status === `success`">
    <v-list-item link title="ALL" @click="selectItem(``, `ALL`)">{{ totalCnt }}</v-list-item>
    <div v-for="{topics_category_id, category_nm, cnt} in data.list" >
      <v-list-item link :title="`${category_nm}`" :value="`${topics_category_id}`" @click="selectItem(`${topics_category_id}`, `${category_nm}`)">{{ cnt }}</v-list-item>
    </div>
  </div>
</template>