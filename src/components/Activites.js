import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import sanityClient from "../client.js";
import BlockContent from '@sanity/block-content-to-react';
import './Activites.css';

const Activites = () => {
  const [activite, setActivite] = useState([])

  useEffect(() => {
    // Sanity Activités
    sanityClient
      .fetch(
        `*[_type == "activites"] | order(date desc){
          mainImage{
              asset->{
                  url
              },
          },
          title,
          url,
          body
        }`
      )
      .then((data) => setActivite(data))
      .catch(console.error);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Activités autour de l'Oustal de Marie | Découvrez les activités et sites à visiter en Ariège</title>
        <meta name="description" content="Découvrez les activités incontournables à faire autour de l'Oustal de Marie en Ariège. Explorez les randonnées, les sites historiques, les activités culturelles et les attractions touristiques à proximité de notre gîte pour un séjour riche en découvertes." />
      </Helmet>

      <div className="cardContainer flex flex-col">
        {activite &&
        activite.map((activite, index) => (
          <div
              key={index}
              className={`card w-3/4 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="md:w-1/2">
              <img src={activite.mainImage.asset.url} alt={activite.title} className="w-full h-auto" />
            </div>

            <div className="flex flex-col justify-center items-center md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-4">{activite.title}</h2>
              <p><BlockContent blocks={activite.body} /></p>
              
              {activite.url && (
                  <a href={activite.url} target="_blank" rel="noopener noreferrer">
                    Voir plus
                  </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activites;