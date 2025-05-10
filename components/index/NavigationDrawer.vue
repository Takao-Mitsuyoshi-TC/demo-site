<script lang="ts" setup>
import type { Reactive } from 'vue';


interface Props {
    topics_group_id: string;
    group_nm: string;
}

const config = useRuntimeConfig();
const props = defineProps<Props>();

const params: {
    topics_group_id: string;
} = {
    topics_group_id: props.topics_group_id
}
    
const {data: response} = await useLazyFetch(
    `/topics-category/list`, {
        baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
        key: `/topics-category/list`,
        query: params,
        credentials:`include`
    }
);
</script>

<template>
    <v-navigation-drawer>
        <v-list-item :title="`${ props.group_nm }`" subtitle=""></v-list-item>
        <v-divider></v-divider>
        <div v-if="props.topics_group_id!==`0`">
            <div v-for="data in response.list">
                <v-list-item link :title="`${data.category_nm}`"></v-list-item>
            </div>
        </div>

    </v-navigation-drawer>    
</template>