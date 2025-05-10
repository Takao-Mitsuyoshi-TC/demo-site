<script lang="ts" setup>
    const tab = ref(7);
    const items = new Map<number, string>();
    items.set(7, "Content");
    items.set(8, "Dcumtent");
    items.set(0, "e-learning");

    const select_content_type = ref("15");

    const onClickContentsType = (contents_type:string): void => {
        select_content_type.value = contents_type;
    }
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
        :key="`${tab}`"
        v-bind:group_nm="`${items.get(tab)}`"
        v-bind:topics_group_id="`${tab}`"
        v-on:selectContentsType="onClickContentsType"
    />

    <v-main>
        <v-row no-gutters>
            <v-col cols="3"><v-container style="border: solid;"></v-container></v-col>
            <v-col>
                <ContentsListContainer
                    :key="`${select_content_type}`"
                    v-bind:topics_group_id="`${tab}`"
                    v-bind:contents_type="`${select_content_type}`"
                />
            </v-col>
        </v-row>

    </v-main>
  </v-layout>


</template>