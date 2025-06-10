<script lang="ts" setup>
import type { TopicsListSearchInfo } from '@/interfaces/contents/TopicsModel';

const contentsParam = useContentsParam();

interface Props {
  topics_group_id: number;
  contents_type: string;
  tag_id: number;
  tag_nm: string;
}

const props = defineProps<Props>();

const searchInfo: TopicsListSearchInfo = reactive({ topics_group_id: props.topics_group_id, contents_type: props.contents_type, tag_id: [props.tag_id]});
searchInfo.topics_group_id = props.topics_group_id;
searchInfo.contents_type = props.contents_type;
searchInfo.tag_id = [props.tag_id];

const { data, status, error } = await useTopicsListCountOnly(searchInfo);

const change = (tag_id: number) => {
  if (contentsParam.tag_id == null) {
    contentsParam.tag_id = [];
  }

  if (selected.value.length > 0) {
    contentsParam.tag_id.push(selected.value[0]);
  }
  else
  {
    // チェックOFFの場合
    const index = contentsParam.tag_id.indexOf(String(props.tag_id));
    contentsParam.tag_id.splice(index, 1);
  }
  

};
const selected = ref([]);
</script>

<template>
  <v-container>
    <v-checkbox hide-details v-model="selected" :value="`${ props.tag_id }`" v-if="data.cnt > 0" :label="`${props.tag_nm}`" @change="change(props.tag_id)">{{ data.cnt }}</v-checkbox>
    <v-checkbox hide-details v-else :label="`${tag_nm}`" disabled>{{ data.cnt }}</v-checkbox>
  </v-container>
</template>