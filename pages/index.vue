<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"], 
})
const contentsParam = useContentsParam();
const auth = useAuth();
const config = useRuntimeConfig();

contentsParam.topics_group_id = config.public.defaultTopicsGroupId;
</script>

<template>
  <v-layout class="rounded rounded-md border">
    <v-app-bar color="surface-variant">
      <v-app-bar-title>デモサイト</v-app-bar-title>
        <template v-slot:extension>
          <ContentsGourpTabMenu/>
        </template>
        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
    </v-app-bar>
    <v-navigation-drawer>
      <ContentsCategoryListMenu
        :key="`${ contentsParam.topics_group_id }`"
        v-bind:topics_group_id=contentsParam.topics_group_id
        v-bind:group_nm="`${ contentsParam.group_nm }`"
      />
      <ContentsKeyWordSearchSection/>
      <ContentsFilterPanel
        :key="`${contentsParam.topics_category_id}`"
      />
    </v-navigation-drawer>
    <v-main>
      <ContentsBreadCrumbs/>
      <ContentsListContainer
        :key="`${contentsParam.topics_category_id}/${contentsParam.topics_keyword}/${contentsParam.tag_id}`"
        v-bind:topics_group_id=contentsParam.topics_group_id
        v-bind:contents_type="`${contentsParam.topics_category_id}`"
        v-bind:category_nm="`${contentsParam.category_nm}`"
        v-bind:tag_id=contentsParam.tag_id
      />

    </v-main>
  </v-layout>


</template>