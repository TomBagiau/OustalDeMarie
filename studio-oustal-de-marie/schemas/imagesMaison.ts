import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'imageMaison',
    title: 'Logement : Images',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title de l\'image',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Date de publication',
            type: 'datetime',
        }),
    ],
})
