import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'detailsEquipementsExterieur',
    title: 'Logement: Équipements extérieurs',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Équipements extérieurs',
            type: 'string',
        }),
    ],
})
