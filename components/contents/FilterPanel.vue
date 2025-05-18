<script lang="ts" setup>
const contentsParam = useContentsParam();

const { data, status, error } = await useTagCategoryList();

let checked = ref([]);

onUpdated(() => {
  if (status.value === "error") {
    throw createError({ statusCode: error.value?.statusCode, statusMessage: error.value?.statusMessage, fatal: true });
  }
});


const change = () => {
  let tag_ids = [] as number[];
  
  checked.value.forEach((tag_id) => {
    tag_ids.push(Number(tag_id));
  });
  contentsParam.tag_id = tag_ids;
};
</script>

<template>
  <div class="text-subtitle-1">Filter</div>
  <template v-if="status === `success`">
    <v-expansion-panels v-for="{tag_category_id, tag_category_nm, tags} in data.list">
      <v-expansion-panel>
        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
          {{ tag_category_nm }}
        </v-expansion-panel-title>
        <v-expansion-panel-text v-for="{tag_id, tag_nm, open_contents_cnt} in tags">
          <v-checkbox v-model="checked" :value="`${ tag_id }`" v-if="open_contents_cnt > 0" :label="`${tag_nm}`" @update:model-value="change">{{ open_contents_cnt }}</v-checkbox>
          <v-checkbox v-if="open_contents_cnt == 0" :label="`${tag_nm}`" disabled>{{ open_contents_cnt }}</v-checkbox>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>  
</template>
</template>