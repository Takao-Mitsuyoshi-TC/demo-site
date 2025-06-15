<script lang="ts" setup>
import type { MasterInfo, MasterSearchInfo } from "@/interfaces/table/MasterModel"

interface Props {
  csvtable_id: number;
  disabled: boolean;
  items: MasterInfo[];
};
const props = defineProps<Props>();

const searchInfo: MasterSearchInfo = reactive({ csvtable_id: props.csvtable_id});

const { data, status, error } = await useMasterList(searchInfo);

let item = reactive({value: []})

onUpdated(() => {
  if (status.value === "error") {
    throw createError({ statusCode: error.value?.statusCode, statusMessage: error.value?.statusMessage, fatal: true });
  }

  props.items.forEach((data: MasterInfo) => {
    item.value.push(data.key as never);
          });

});




</script>
<template>
  <template v-if="status === `success`">
    <template v-for="{value, title} in data.list">
      <v-checkbox v-model="item.value" hide-details :value="`${ value }`" :label="`${title}`" :disabled="props.disabled"></v-checkbox>
    </template>    
  </template>
</template>