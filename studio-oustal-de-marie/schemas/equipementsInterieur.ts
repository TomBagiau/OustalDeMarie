import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'equipementsInterieur',
    title: 'Logement: Equipements intérieur',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Équipements intérieurs',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Texte',
            type: 'blockContent',
        }),
        defineField({
            name: 'date',
            title: 'Date publication',
            type: 'date',
            description: 'Affichage sur le site : du plus récent au plus vieux'
        }),
    ],
})
