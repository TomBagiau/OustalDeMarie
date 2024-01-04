import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'detailsServices',
    title: 'Logement: Services',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Service',
            type: 'string',
        }),
    ],
})
