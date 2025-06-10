<script lang="ts" setup>
import { ContentsFilterCheckBox } from '#components';

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
            <ContentsFilterCheckBox
              v-bind:topics_group_id="contentsParam.topics_group_id"
              v-bind:contents_type="contentsParam.topics_category_id"
              v-bind:tag_id="tag_id"
              v-bind:tag_nm="tag_nm"
            >
            </ContentsFilterCheckBox>
          </template>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>  
</template>
</template>