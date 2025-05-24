<script lang="ts" setup>
const config = useRuntimeConfig();
const contentsParam = useContentsParam();
</script>

<template>
  <v-divider></v-divider>
    <section>
      <v-text-field v-model="contentsParam.topics_keyword" prepend-inner-icon="mdi-magnify" label="Search" clearable></v-text-field>
    </section>
  <v-divider></v-divider>
</template>