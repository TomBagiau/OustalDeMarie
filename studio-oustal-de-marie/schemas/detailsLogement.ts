import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'detailsLogement',
    title: 'Logement: Détails',
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
