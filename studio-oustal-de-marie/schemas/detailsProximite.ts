import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'detailsProximite',
    title: 'Logement : A proximité de',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string',
        }),
        defineField({
            name: 'value',
            title: 'Valeur',
            type: 'string',
        }),
    ],
})
