import React from "react";
import { Helmet } from "react-helmet";
import './Contact.css';


export default function MentionsLegales() {
  return (
    <div id="mentions">
      <Helmet>
        <title>Mentions Legales - Oustal de Marie</title>
        <meta name="description" content="L'Oustal de Marie - Gîte en Ariège | nos mentions légales" />
      </Helmet>
      <div class="m-6">
        <section class="mb-6">
            <h1 class="text-3xl font-bold mb-4">Editeur du site</h1>
            <div>
                <p class="mb-2">Nom : L'Oustal De Marie</p>
                <p class="mb-2">Adresse postale : 09400 Miglos</p>
                <p class="mb-2">Adresse Mail : <a href="mailto:contact@oustaldemarie.fr">contact@oustaldemarie.fr</a></p>
                <p class="mb-2">Téléphone : <a href="tel:0686814117">06 86 81 41 17</a></p>
                <p class="mb-2">Siret : </p>
            </div>
        </section>

        <section class="mb-6">
            <h1 class="text-3xl font-bold mb-4">Hébergement</h1>
            <div>
                <p class="mb-2">Site hébergé par : OVH</p>
            </div>
        </section>
    </div>
    </div>
  )
}