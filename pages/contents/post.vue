<script lang="ts" setup>
import { master_id } from "@/constants/contents"

</script>

<template>
  <v-row>
    <v-col cols="6">
      <v-label>File</v-label>
      <v-container>
        <v-file-upload density="default"></v-file-upload>
      </v-container>

    </v-col>
    <v-col cols="6">
      <CommonMasterSelect
        :key="master_id.product_brand"
        v-bind:csvtable_id="master_id.product_brand"
        v-bind:label="`Product Brand`"

      />

    </v-col>  

  </v-row>
  <v-row>
    <v-col cols="6">
      <v-label>Thumbnail</v-label>
      <v-container>
        <v-file-upload density="default"></v-file-upload>
      </v-container>

    </v-col>
    <v-col cols="6">

    </v-col>      
  </v-row>
</template>