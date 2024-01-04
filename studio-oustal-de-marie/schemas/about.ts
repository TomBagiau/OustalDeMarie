import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: 'Logement: Description',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
    ],
})
