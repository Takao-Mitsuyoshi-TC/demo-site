<script lang="ts" setup>
import { path_mapping } from "@/constants/contents"


const route = useRoute();
const items = ref([]);
route.path.split("/").forEach((path: string) => {
  const item = { title: "", href: "", disabled: false };
  if (path === "") {
    item.title = "home";
    item.href = path_mapping["home"];
    
  }
  else
  {
    item.title = path;
    item.href = path_mapping[path];
  }

  items.value.push(item);
});
</script>

<template>
  <v-breadcrumbs :items="items"></v-breadcrumbs>
</template>