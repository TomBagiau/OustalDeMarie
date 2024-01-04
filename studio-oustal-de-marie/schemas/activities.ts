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
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Ajoutez une description',
        }),
        defineField({
            name: 'url',
            title: 'Lien',
            type: 'url',
        }),
    ],
})
