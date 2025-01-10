import { defineType, defineField } from "sanity";

export const servicesType = 

defineType({
name:'services',
title:'services',
type:'document',
fields:[
    defineField({
        name:'servicesDescription',
        title:'Services Description',
        type:'array',
      of:[{type:'servicesContent'}]
    })
]

})
