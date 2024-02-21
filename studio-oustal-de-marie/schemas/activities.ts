import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'activites',
    title: 'Activités',
    type: 'document',
    fields: [
        defineField({
            name: 'mainImage',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'url',
            title: 'Lien',
            type: 'url',
        }),
        defineField({
            name: 'date',
            title: 'Date publication',
            type: 'date',
            description: 'Affichage sur le site : du plus récent au plus vieux'
        }),
    ],
})
