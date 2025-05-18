<script lang="ts" setup>
import type { TopicsGroupInfo } from "@/interfaces/contents/TopicsGroupModel"

const contentsParam = useContentsParam();
const config = useRuntimeConfig();
  
const { data, status, error } = await useTopicsGroupList();

const selectValue = ref(config.public.defaultTopicsGroupId);

onUpdated(() => {
  if (status.value === "error") {
    throw createError({ statusCode:error.value?.statusCode, statusMessage: error.value?.statusMessage, fatal: true });
  }
  contentsParam.topics_group_id = selectValue.value;
  data.value.list.forEach((topicsGroupInfo: TopicsGroupInfo) => {
    if (topicsGroupInfo.topics_group_id === selectValue.value) {
      contentsParam.group_nm = topicsGroupInfo.group_nm;
      return;
    }
  });
})
</script>

<template>
  <template v-if="status === `success`">

    <v-tabs v-model="selectValue" align-tabs="title">
      <v-tab
        v-for="{topics_group_id, group_nm} in data.list"
        :key="topics_group_id"
        :text="group_nm"
        :value="topics_group_id"
      ></v-tab>
    </v-tabs>

  </template>
</template>