import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'Disponibilite',
    title: 'Dates de disponibilité',
    type: 'document',
    fields: [
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
        }),
        defineField({
            name: 'disponible',
            title: 'Disponible',
            type: 'boolean',
        }),
    ],
})
