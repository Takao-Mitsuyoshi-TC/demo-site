<script lang="ts" setup>
const config = useRuntimeConfig();
const contentsParam = useContentsParam();

const focusChange = () => {
};
</script>

<template>
  <v-divider></v-divider>
    <section>
      <v-text-field prepend-inner-icon="mdi-magnify" label="Search" clearable @update:focused="focusChange"></v-text-field>
    </section>
  <v-divider></v-divider>
</template>