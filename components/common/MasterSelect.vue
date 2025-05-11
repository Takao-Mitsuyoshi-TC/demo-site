<script lang="ts" setup>

interface Props {
    csvtable_id: string;
    table_nm: string;
}

const config = useRuntimeConfig();
const props = defineProps<Props>();

const params: {
    csvtable_id: string;
    table_nm: string;
} = {
    csvtable_id: props.csvtable_id,
    table_nm: props.table_nm
}

const {data: items} = await useLazyFetch(
    `/master/list`, {
        baseURL: `${config.public.apiDomainUrl}${config.public.apiBasePath}`,
        key: `/master/list/${props.csvtable_id}`,
        query: params,
        credentials:`include`,
        default: (): any[] => [ { title: "", value: "" } ],
        transform: (data): any[] => {
            //const items:any[] = [{ title:"", value: "" }];
            const items:any[] = [];
            for (let i:number = 1; i < data.list.length; i++) {
                if (data.list[i][0] !== "") {
                    items.push({ title: data.list[i][1], value: data.list[i][0] });
                }
            }

            return items;

        }
    }
);

type Emit = {
    selectMaster: [value: string];
}
const selectValue = ref("");
const emit = defineEmits<Emit>();

const changeValue = (): void => {
    emit("selectMaster", selectValue.value);
}

</script>

<template>
    <v-select v-model="selectValue" :items="items" :item-title="items.title" :item-value="items.value" :label="`${props.table_nm}`" clearable @click="changeValue"></v-select>
</template>