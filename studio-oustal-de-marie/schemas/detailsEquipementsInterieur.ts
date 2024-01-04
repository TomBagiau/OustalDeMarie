import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'detailsEquipementsInterieur',
    title: 'Logement: Équipements intérieurs',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Équipements intérieurs',
            type: 'string',
        }),
    ],
})
