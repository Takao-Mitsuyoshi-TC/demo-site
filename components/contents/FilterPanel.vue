<script lang="ts" setup>
const contentsParam = useContentsParam();

const { data, status, error } = await useTagCategoryList();

const checked = ref([contentsParam.tag_id ]);

onUpdated(() => {
  if (status.value === "error") {
    throw createError({ statusCode: error.value?.statusCode, statusMessage: error.value?.statusMessage, fatal: true });
  }
});

</script>

<template>
  <div class="text-subtitle-1">Filter</div>
  <template v-if="status === `success`">
    <v-expansion-panels v-for="{tag_category_id, tag_category_nm, tags} in data.list">
      <v-expansion-panel>
        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
          {{ tag_category_nm }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <template v-for="{tag_id, tag_nm, open_contents_cnt} in tags">
            
            <v-checkbox hide-details v-model="contentsParam.tag_id" :value="`${ tag_id }`" v-if="open_contents_cnt > 0" :label="`${tag_nm}`">{{ open_contents_cnt }}</v-checkbox>
            <v-checkbox hide-details v-if="open_contents_cnt == 0" :label="`${tag_nm}`" disabled>{{ open_contents_cnt }}</v-checkbox>
          </template>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>  
</template>
</template>