<script lang="ts" setup>
import type { MasterInfo, MasterSearchInfo } from "@/interfaces/table/MasterModel"

interface Props {
  csvtable_id: number;
  label: string
};
const props = defineProps<Props>();

const searchInfo: MasterSearchInfo = reactive({ csvtable_id: props.csvtable_id});

const { data, status, error } = await useMasterList(searchInfo);

onUpdated(() => {
  if (status.value === "error") {
    throw createError({ statusCode: error.value?.statusCode, statusMessage: error.value?.statusMessage, fatal: true });
  }


});

</script>
<template>
  <template v-if="status === `success`">
    <v-select :items="data.list" item-title="title" :label="`${props.label}`">
      <template v-slot:item="{ props: itemProps, item }">
        <v-list-item v-bind="itemProps">

        </v-list-item>
      </template>

    </v-select>  
  </template>
</template>