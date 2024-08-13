import { defineType } from "sanity";

export const servicesContentType = defineType ({
    name:'servicesContent',
    title:'Services Content',
    type:'object',
    fields:[

       {
            name:'serviceTitle',
            title:'Service Title',
            type:'string'
        },
        // {
        //     name:'serviceDescription',
        //     title:'Service Description',
        //     type:'string'
        // },
        // {
        // name:'serviceInfo',
        // title:'Service Info',
        // type:'array',
        // of: [{type: 'block'}]
        // },
        {
            name:'serviceInfo',
            title:'Service Info',
            type:'string',
        
            }
    ]
})