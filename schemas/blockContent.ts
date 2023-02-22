import { defineField, defineType } from "sanity";

export default defineType({
    name: 'blockContent',
    title: 'BlockContent',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
    ],
})