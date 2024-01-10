import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'conditionsParticulieres',
    title: 'Logement: Conditions particulières',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Conditions particulières',
            type: 'string',
        }),
    ],
    orderings: [
        {
            title: 'Ordre de création',
            name: 'createdAtDesc',
            by: [{ field: '_createdAt', direction: 'desc' }],
        },
    ],
});
