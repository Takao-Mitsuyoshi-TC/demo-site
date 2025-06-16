<script lang="ts" setup>
import { master_id } from "@/constants/contents"
import { shallowRef } from 'vue'

const model = shallowRef(null);

const onClickAddButton = () => {
  console.log(model.value);
}
</script>

<template>
  <v-row>
    <v-col cols="6">
      <v-label>File</v-label>
      <v-container>
        <v-file-upload density="compact" v-model="model" clearable show-size>
        </v-file-upload>
      </v-container>

    </v-col>
    <v-col cols="6">
      <CommonMasterSelect
        :key="master_id.product_brand"
        v-bind:csvtable_id="master_id.product_brand"
        v-bind:label="`Product Brand`"
      />
      <CommonMasterSelect
        :key="master_id.product_category"
        v-bind:csvtable_id="master_id.product_category"
        v-bind:label="`Product Category`"
      />
      <CommonMasterSelect
        :key="master_id.product_group"
        v-bind:csvtable_id="master_id.product_group"
        v-bind:label="`Product Group`"
      />
      <CommonMasterSelect
        :key="master_id.media_format"
        v-bind:csvtable_id="master_id.media_format"
        v-bind:label="`Media Format`"
      />
      <CommonMasterSelect
        :key="master_id.usage_restricions"
        v-bind:csvtable_id="master_id.usage_restricions"
        v-bind:label="`Usage Restricions`"
      />
    </v-col>  

  </v-row>
  <v-row>
    <v-col cols="6">
      <v-label>Thumbnail</v-label>
      <v-container>
        <v-file-upload density="compact"></v-file-upload>
      </v-container>

    </v-col>
    <v-col cols="6">
      <v-textarea label="Memo"></v-textarea>
      <v-btn @click="onClickAddButton">Add</v-btn>
    </v-col>      
  </v-row>
</template>