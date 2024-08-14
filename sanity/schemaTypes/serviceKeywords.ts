import { defineType } from "sanity";

export const servicesKeywordType = defineType ({
    name:'servicesKeyword',
    title:'Services word',
    type:'object',
    fields:[
        {
            name:'keyword',
            title:'keyword',
            type:'string'
        },
    ]})