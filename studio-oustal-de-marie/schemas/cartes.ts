// Dans votre dossier schemas, créez un fichier `carte.js`

export default {
    name: 'carte',
    title: 'Cartes accueil',
    type: 'document',
    fields: [
        {
            name: 'titre',
            title: 'Titre',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // Pour définir un point focal si nécessaire
            },
        },
        {
            name: 'lien',
            title: 'Lien',
            type: 'string',
        },
    ],
};
