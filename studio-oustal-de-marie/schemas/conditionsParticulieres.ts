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
        defineField({
            name: 'date',
            title: 'Date publication',
            type: 'date',
            description: 'Affichage sur le site : du plus récent au plus vieux'
        }),
    ],
});
