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
        <div className="relative w-full">
          <img src="https://images.unsplash.com/photo-1569077251332-3c0293ae7d12?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gîte en ariège" className="object-cover w-full banner"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-4xl text-white font-bold">Visiter l'ariège avec L'Oustal de Marie</p>
          </div>
        </div>
      </section>

      <section className="homeBaniere">
        <h4 className="text-center text-2xl mb-5">localisation : </h4>
        <Maps />
      </section>
    </main>

  )
}
