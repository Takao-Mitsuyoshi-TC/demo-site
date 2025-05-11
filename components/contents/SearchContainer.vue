<script lang="ts" setup>

let selectProductBrandValue = ref("");
const selectProductBrand = (value: string): void => {
    selectProductBrandValue.value = value;
}

let selectProductCategoryValue = ref("");
const selectProductCategory = (value: string): void => {
    selectProductCategoryValue.value = value;
}

let selectProductGroupValue = ref("");
const selectProductGroup = (value: string): void => {
    selectProductGroupValue.value = value;
}

let selectMediaFormatValue = ref("");
const selectMediaFormat = (value: string): void => {
    selectMediaFormatValue.value = value;
}

let selectUsageRestrictionsValue = ref("");
const selectUsageRestrictions = (value: string): void => {
    selectUsageRestrictionsValue.value = value;
}

const SearchContents = (): void => {
    window.alert(`${selectProductBrandValue.value}¥r¥n`);
};
</script>

<template>
    <v-container>
        <v-sheet class="w-90">
            <v-text-field label="Keyword" clearable></v-text-field>
            <CommonMasterSelect
                v-bind:csvtable_id="`1`"
                v-bind:table_nm="`Product Brand`"
                v-on:selectMaster="selectProductBrand"
            />
            <CommonMasterSelect
                v-bind:csvtable_id="`2`"
                v-bind:table_nm="`Product Category`"
                v-on:selectMaster="selectProductCategory"
            />
            <CommonMasterSelect
                v-bind:csvtable_id="`3`"
                v-bind:table_nm="`Product Group`"
                v-on:selectMaster="selectProductGroup"
            />
            <CommonMasterSelect
                v-bind:csvtable_id="`4`"
                v-bind:table_nm="`Media Format`"
                v-on:selectMaster="selectMediaFormat"
            />
            <CommonMasterSelect
                v-bind:csvtable_id="`5`"
                v-bind:table_nm="`Usage Restrictions`"
                v-on:selectMaster="selectUsageRestrictions"
            />
            <v-btn color="primary" @click="SearchContents">Search</v-btn>
        </v-sheet>
    </v-container>    
</template>