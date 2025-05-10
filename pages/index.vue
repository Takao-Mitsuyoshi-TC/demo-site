<script lang="ts" setup>
    const tab = ref(7);
    const items = new Map<number, string>();
    items.set(7, "Content");
    items.set(8, "Dcumtent");
    items.set(0, "e-learning");

</script>

<template>
 <v-layout class="rounded rounded-md border">
    <v-app-bar color="surface-variant">
        <v-app-bar-title>デモサイト</v-app-bar-title>
        <template v-slot:extension>
            <v-tabs v-model="tab" align-tabs="title">
                <v-tab
                    v-for="[id, title] in items"
                    :key="id"
                    :text="title"
                    :value="id"
                ></v-tab>
            </v-tabs>
      </template>
    </v-app-bar>
    <v-tabs-window v-model="tab">
        <v-tabs-window-item v-for="[id, title] in items" :key="id" :value="id">
        </v-tabs-window-item>
    </v-tabs-window>
    <IndexNavigationDrawer
        :key="`${items.get(tab)}`"
        v-bind:group_nm="`${items.get(tab)}`"
        v-bind:topics_group_id="`${tab}`"
    />

    <v-main class="d-flex align-center justify-center" height="300">
      <v-container width="20%">
        <v-sheet
          border="dashed md"
          height="100vh"
          rounded="lg"
          width="100%"
        ></v-sheet>
      </v-container>
      <v-container width="80%">
        <v-sheet
          border="dashed md"
          height="100vh"
          rounded="lg"
          width="100%"
        ></v-sheet>
      </v-container>
    </v-main>
  </v-layout>


</template>