<script lang="ts" setup>
const contentsParam = useContentsParam();

interface Props {
  topics_group_id: number;
  contents_type: string;
  tag_id: string[];
}
</script>

<template>
  <v-checkbox hide-details v-model="contentsParam.tag_id" :value="`${ tag_id }`" v-if="open_contents_cnt > 0" :label="`${tag_nm}`">{{ open_contents_cnt }}</v-checkbox>
  <v-checkbox hide-details v-if="open_contents_cnt == 0" :label="`${tag_nm}`" disabled>{{ open_contents_cnt }}</v-checkbox>
</template>