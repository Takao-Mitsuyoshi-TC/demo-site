<script lang="ts" setup>
const config = useRuntimeConfig();

interface Props {
    topics_group_id: string;
    contents_type: string;
}

const props = defineProps<Props>();

const params: {
    topics_group_id: string;
    contents_type: string;
} = {
    topics_group_id: props.topics_group_id,
    contents_type: props.contents_type
}
    
const {data: response} = await useLazyFetch(
    `/topics_list`, {
        baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
        key: `/topics_list`,
        query: params,
        credentials:`include`
    }
);

</script>

<template>
    <v-container>
        <v-row>
            <v-col no-gutters v-for="data in response.list">
                <v-card :variant="`elevated`">
                    <v-card-title>{{ data.subject }}</v-card-title>
                    <v-card-text>
                        <img :src="`${data.ext_1.url_org}`" :width="`100%`">
                        <div>{{ data.update_ymdhi }}</div>
                    </v-card-text>
                    

                </v-card>
            </v-col>

        </v-row>

    </v-container>    
</template>