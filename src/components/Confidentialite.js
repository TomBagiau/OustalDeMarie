import React from "react";
import { Helmet } from "react-helmet";
import './Contact.css';


export default function MentionsLegales() {
  return (
    <div id="mentions">
      <Helmet>
        <title>Confidentialite - Oustal de Marie</title>
        <meta name="description" content="L'Oustal de Marie - Gîte en Ariège | Confidentialite" />
      </Helmet>
      <div class="m-6 w-4/5">
        <div class="mb-6">
            <h1 class="text-3xl font-bold mb-2">Politique de confidentialité</h1>
            <p>Bienvenue sur L'Oustal de Marie. </p>
            <p> 
                Notre engagement envers votre confidentialité est primordial. 
                Cette politique de confidentialité explique comment nous collectons, 
                utilisons, divulguons et protégeons vos informations personnelles lorsque vous utilisez 
                notre site web et les formulaires associés.
            </p>
        </div>

        <div class="mb-6">
            <h2 className="text-2xl font-bold mb-2">Collecte d'informations</h2>
            <p>
                Lorsque vous utilisez notre site, nous pouvons recueillir des informations personnelles 
                que vous choisissez de nous fournir volontairement via des formulaires, tels que votre nom, prénom, 
                votre adresse e-mail et d'autres détails pertinents.
            </p>
        </div>

        <div class="mb-6">
            <h2 className="text-2xl font-bold mb-2">Utilisation des informations</h2>
            <p>
                Les informations que nous collectons sont utilisées dans le but de traiter vos demandes, de personnaliser votre expérience sur notre site et de vous fournir les services que vous avez demandés. Nous ne vendons ni ne louons vos informations à des tiers.
            </p>
        </div>

        <div class="mb-6">
            <h2 className="text-2xl font-bold mb-2">Protection des informations</h2>
            <p>
                Nous mettons en œuvre des mesures de sécurité pour protéger vos informations personnelles contre tout accès non autorisé ou toute divulgation. Cependant, veuillez noter qu'aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.
            </p>
        </div>

        <div class="mb-6">
            <h2 className="text-2xl font-bold mb-2">Divulgation à des tiers</h2>
            <p>
                Nous ne partageons pas vos informations personnelles avec des tiers, sauf si cela est nécessaire pour répondre à vos demandes, respecter la loi ou protéger nos droits.
            </p>
        </div>

        <div class="mb-6">
            <p>En utilisant notre site, vous consentez à notre politique de confidentialité.</p>
            <p>Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, veuillez nous contacter sur l'adresse email suivante : <a href="mailto:contact@oustaldemarie.fr">contact@oustaldemarie.fr</a></p>
        </div>
    </div>
    </div>
  )
}