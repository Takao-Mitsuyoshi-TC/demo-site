export const promotion_ext_fields = {
    product_category: "ext_3",
    product_brand: "ext_4",
    product_group: "ext_5",
    media_format: "ext_6",
    usage_restricions: "ext_7",
    memo: "ext_8"
} as const

export const path_mapping: { [key: string]: string } = {
    home: "/",
    contents: "/contents"
} as const

export const master_id = {
    product_category: 2,
    product_brand: 1,
    product_group: 3,
    media_format: 4,
    usage_restricions: 5,
} as const