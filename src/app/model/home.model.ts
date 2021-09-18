export interface Parent_categories {
    id:number,
    is_default:boolean,
    title:string,
    avatar:any,
    position:number,
    is_enable:boolean,
    is_visible:boolean,
    parent:any
}
export interface Headeritem {
    id:number,
    name:string,
    name_english:string,
    product_type:number,
    producer_name:string,
    payment_type:[],
    price:number,
    price_show:any,
    avatar:Avatar[],
    feature_avatar:Feature_avatar[],
    rank:number,
    short_description:string,
    is_purchased:boolean,
    comments:number,
    is_bookmarked:boolean,
    sku:number,
    price_unit:string,
    total_view:number,
    date_added:Date,
    invest_goal:any,
    product_staff:[]
}
export interface Homeitem {
    id:number,
    title:string,
    sub_title:string,
    position:number,
    module:number,
    banner:any,
    row_type:string,
    products:Products[],
    row_mode:number
}
export interface Products {
    id:number,
    name:string,
    name_english:string,
    product_type:number,
    producer_name:string,
    payment_type:[],
    price:number,
    price_show:any
}
export interface Avatar {
    xxxdpi:string,
    xxhdpi:string,
    xhdpi:string,
    hdpi:string,
    mdpi:string
}
export interface Feature_avatar {
    xxxdpi:string,
    xxhdpi:string,
    xhdpi:string,
    hdpi:string,
    mdpi:string
}

export interface home {
    id:number,
    parent_categories:Parent_categories[],
    name:string,
    category:[],
    tabStrip:[],
    headeritem:Headeritem[],
    homeitem:Homeitem[]
}