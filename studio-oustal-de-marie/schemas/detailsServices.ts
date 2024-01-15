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
        defineField({
            name: 'date',
            title: 'Date publication',
            type: 'date',
            description: 'Affichage sur le site : du plus récent au plus vieux'
        }),
    ],
})
