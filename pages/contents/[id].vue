<script lang="ts" setup>
import type { TopicsInfo, TopicsSearchInfo } from "@/interfaces/contents/TopicsModel"
import { master_id } from "@/constants/contents"

const config = useRuntimeConfig();
const contentsParam = useContentsParam();
const route = useRoute();

const searchInfo: TopicsSearchInfo = reactive({ topics_id: Number(route.params.id) });

const { data, status, error } = await useTopicsDetails(searchInfo);

</script>

<template>
  <template v-if="status === `success`">
    <v-row>
    <v-col cols="4">
      <v-sheet color="red">
        <v-card>
          <v-card-text>
            <template v-if="data.details.contents_type === 24">
              <video :src="`${data.details.ext_2.url_org}`" controls></video>
            </template>
            <template v-else>
              <img :src="`${data.details.ext_1.url_org}?width=600`">
            </template>
          </v-card-text>
        </v-card>
        
        
      </v-sheet>
    </v-col>
    <v-col cols="8">
      <v-sheet>
        <v-row>
          <v-col cols="4">Title</v-col>
          <v-col cols="8">{{ data.details.subject }}</v-col>
        </v-row>
        <v-row>
          <v-col cols="4">Content Type</v-col>
          <v-col cols="8">{{ data.details.contents_type_nm }}</v-col>
        </v-row>        
        <v-row>
          <v-col cols="4">FileName</v-col>
          <v-col cols="8"></v-col>
        </v-row>
        <v-row>
          <v-col cols="4">Product Brand</v-col>
          
          <CommonMasterCheckBoxes
            :key=master_id.product_brand
            v-bind:csvtable_id=master_id.product_brand
            v-bind:disabled=true
            v-bind:items=data.details.ext_4
          />
        </v-row>
        <v-row>
          <v-col cols="4">Product Categpry</v-col>
          <CommonMasterCheckBoxes
            :key=master_id.product_category
            v-bind:csvtable_id=master_id.product_category
            v-bind:disabled=true
            v-bind:items=data.details.ext_3
          />
        </v-row>
        <v-row>
          <v-col cols="4">Product Group</v-col>
          <CommonMasterCheckBoxes
            :key=master_id.product_group
            v-bind:csvtable_id=master_id.product_group
            v-bind:disabled=true
            v-bind:items=data.details.ext_5
          />
        </v-row>
        <v-row>
          <v-col cols="4">Media Format</v-col>
          <CommonMasterCheckBoxes
            :key=master_id.media_format
            v-bind:csvtable_id=master_id.media_format
            v-bind:disabled=true
            v-bind:items=data.details.ext_6
          />
        </v-row>
        <v-row>
          <v-col cols="4">Usage Rsstricions</v-col>
          <CommonMasterCheckBoxes
            :key=master_id.usage_restricions
            v-bind:csvtable_id=master_id.usage_restricions
            v-bind:disabled=true
            v-bind:items=data.details.ext_7
          />
        </v-row>
        <v-row>
          <v-col cols="4">Artist</v-col>
          <v-col cols="8"></v-col>
        </v-row>
        <v-row>
          <v-col cols="4">Memo</v-col>
          <v-col cols="8">{{ data.details.ext_8 }}</v-col>
        </v-row>
        <v-row>
          <v-empty-state></v-empty-state>
          <V-col cols="12">File Infomation</V-col>
        </v-row>
        <v-divider></v-divider>

      </v-sheet>
    </v-col>
  </v-row>
</template>
</template>