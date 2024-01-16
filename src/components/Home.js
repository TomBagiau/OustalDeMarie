import React from "react";
import { Helmet } from "react-helmet";
import background from "../img/home_background.JPG"
import Cards from "./Cards";
import Maps from "./Maps";
import "./Home.css"

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Bienvenue à L'Oustal de Marie - Gîte en Ariège</title>
        <meta name="description" content="Bienvenue à L'oustal de Marie - Gîte en Ariège. Découvrez notre hébergement en Ariège et profitez de votre séjour." />
      </Helmet>
      <section className="relative homePage">
        <img src={background} alt="Gîte Oustal de Marie" className="home_image object-cover w-full" />
        <div className="absolute top-0 home_text">
          <h1 className="text-6xl text-white">Bienvenue à L'Oustal de Marie</h1>
          <h2 className="text-4xl text-white">Gîte en Ariège</h2>
        </div>
      </section>
      <section className="homeCards mt-16">
        <Cards />
      </section>

      <section className="homeBaniere">
        <div className="hero-section">
          <h1 className="hero-title font-bold">Visiter l'Ariège avec L'Oustal de Marie</h1>
          <p className="hero-text font-bold">
            L’Oustal de Marie est une maison de village, entièrement rénovée.
            </p>
          <p className="hero-text font-bold">Elle est située à Arquizat, l’un des 5 hameaux de Miglos, à 800 m d’altitude au cœur du Parc Naturel Régional des Pyrénées Ariégeoises.</p>
        </div>
      </section>

      <section className="homeBaniere">
        <h4 className="text-center text-2xl mb-5">localisation : </h4>
        <Maps />
      </section>
    </main>

  )
}
