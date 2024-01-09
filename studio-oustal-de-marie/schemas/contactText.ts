import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contactText',
    title: 'Texte Contact',
    type: 'document',
    fields: [
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
    ],
})
