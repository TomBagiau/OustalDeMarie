import { Button } from "@material-tailwind/react";
import BlockContent from '@sanity/block-content-to-react';
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { BsFillHouseCheckFill } from "react-icons/bs";
import sanityClient from "../client.js";
import "./Maison.css";
import Carousel from "./MaisonSlider";
import Reservation from "./Reservation.js";

export default function Maison() {

  const [imagesData, setImagesData] = useState(null);
  const [descriptionMaison, setDescriptionMaison] = useState(null);
  const [leLogementData, setLeLogementData] = useState(null);
  const [serivcesData, setSerivcesData] = useState(null);
  const [equipementInterieurData, setEquipementInterieurData] = useState(null);
  const [aproxData, setAproxData] = useState(null);
  const [conditionsParticulieres, setConditionsParticulieres] = useState(null);

  const reservationRef = useRef(null);

  const scrollToReservation = () => {
    if (reservationRef.current) {
      reservationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  useEffect(() => {
    // Sanity description maison (about)
    sanityClient
      .fetch(`*[_type == "about"]`)
      .then((data) => setDescriptionMaison(data))
      .catch(console.error);

    /**
     * Sanity slider
     */
    sanityClient
      .fetch(
        `*[_type == "imageMaison"] | order(publishedAt asc){
          title,
          mainImage{
              asset->{
                  _id,
                  url
              },
          },
          publishedAt
        }`
      )
      .then((data) => setImagesData(data))
      .catch(console.error);

    /**
     * Sanity Details le logement
     */
    sanityClient
      .fetch(
        `*[_type == "detailsLogement"] | order(date desc){
          title,
          value,
          date
        }`
      )
      .then((data) => setLeLogementData(data))
      .catch(console.error);

    /**
     * Sanity Details services
     */
    sanityClient
      .fetch(
        `*[_type == "detailsServices"] | order(date desc){
        title,
        date
      }`
      )
      .then((data) => setSerivcesData(data))
      .catch(console.error);

    /**
     * Sanity Equipements interieurs
     */
    sanityClient
      .fetch(
        `*[_type == "equipementsInterieur"] | order(date desc){
        title,
        body
      }`
      )
      .then((data) => setEquipementInterieurData(data))
      .catch(console.error);

    /**
     * Sanity A proximité de
     */
    sanityClient
      .fetch(
        `*[_type == "detailsProximite"]{
        title,
        value
      }`
      )
      .then((data) => setAproxData(data))
      .catch(console.error);

    /**
     * Sanity Conditions particulières
     */
    sanityClient
      .fetch(
        `*[_type == "conditionsParticulieres"] | order(date desc){
        title,
        date
      }`
      )
      .then((data) => setConditionsParticulieres(data))
      .catch(console.error);
  }, []);

  // Vérifiez si les données des images ont été récupérées avant de rendre le composant
  if (!imagesData) return <div>Loading...</div>;

  // Utilisez les données des images pour construire le tableau de slides
  const slides = imagesData.map((image) => image.mainImage.asset.url);

  return (
    <div>
      <Helmet>
        <title>Oustal de Marie - Gîte de charme en Ariège | Découvrez notre hébergement</title>
        <meta name="description" content="Découvrez l'Oustal de Marie, un gîte authentique et confortable situé au cœur de l'Ariège. Profitez d'un séjour paisible dans notre hébergement de charme entouré par la nature et proche des sites touristiques." />
        <script type="text/javascript" src="https://v2.clevacances.com/assets/widget/sdk.js"></script>
      </Helmet>
      <div className="maisonContainer">
        <div className="maisonSliderContainer">
          <div className="carousel">
            <Carousel slides={slides} />
          </div>

          <div className="txtContainer">
            <h2 className="text-2xl sm:text-5xl font-bold mb-4">Les + du logement : </h2>
            <div className="txtMainMaison">
              <div className="flex m-6 txt">
                <BsFillHouseCheckFill className="iconGreen2" />
                <p className="ml-6">Idéalement situé pour visiter l'Ariège</p>
              </div>
              <div className="flex m-6 txt">
                <BsFillHouseCheckFill className="iconGreen2" />
                <p className="ml-6">Très confortable, ambiance cocooning</p>
              </div>
              <div className="flex m-6 txt">
                <BsFillHouseCheckFill className="iconGreen2" />
                <p className="ml-6">Wifi, lits faits, linge de toilette fournis</p>
              </div>
            </div>
            <Button className="bookButton" onClick={scrollToReservation}>Réserver</Button>
          </div>
        </div>

        {descriptionMaison &&
          descriptionMaison.map((text, index) => (
            <div key={index} className="descriptionMaison mx-auto mt-8 mb-8 p-6">
              <BlockContent blocks={text.body} />
            </div>
          ))}

        <div className="HomeDetails mx-auto mb-8 p-6 bg-gray-100 rounded-md">
          <h3 className="text-3xl font-semibold mb-8">Détails du Logement</h3>

          <div className="detailPart">
            <h3 className="detailTitle text-2xl font-semibold mb-4">Le Logement</h3>
            {leLogementData &&
              leLogementData.reduce((pairs, detail, index) => {
                if (index % 2 === 0) pairs.push([]);
                pairs[pairs.length - 1].push(detail);
                return pairs;
              }, []).map((pair, pairIndex) => (
                <div key={pairIndex} className="mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    {pair.map((detail, index) => (
                      <div key={index}>
                        <p className="font-semibold text-lg">{detail.title} :</p>
                        <p>{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="detailPart">
            <h3 className="detailTitle text-2xl font-semibold mb-4">Services</h3>
            {serivcesData &&
              serivcesData.reduce((pairs, detail, index) => {
                if (index % 2 === 0) pairs.push([]);
                pairs[pairs.length - 1].push(detail);
                return pairs;
              }, []).map((pair, pairIndex) => (
                <div key={pairIndex}>
                  <div className="grid grid-cols-2 gap-4">
                    {pair.map((service, index) => (
                      <div key={index} className="mb-4 flex items-center">
                        <p className="font-semibold text-lg">{service.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="detailPart">
            <h3 className="detailTitle text-2xl font-semibold mb-4">Équipements intérieur</h3>
            {equipementInterieurData &&
              equipementInterieurData.reduce((pairs, detail, index) => {
                if (index % 2 === 0) pairs.push([]);
                pairs[pairs.length - 1].push(detail);
                return pairs;
              }, []).map((pair, pairIndex) => (
                <div key={pairIndex}>
                  <div className="grid grid-cols-2 gap-4">
                    {pair.map((equipementInterieur, index) => (
                      <div key={index}>
                        <p className="font-semibold text-lg">{equipementInterieur.title} :</p>
                        <BlockContent blocks={equipementInterieur.body} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="detailPart">
            <h3 className="detailTitle text-2xl font-semibold mb-4">A proximité de </h3>
            {aproxData &&
              aproxData.reduce((pairs, detail, index) => {
                if (index % 2 === 0) pairs.push([]);
                pairs[pairs.length - 1].push(detail);
                return pairs;
              }, []).map((pair, pairIndex) => (
                <div key={pairIndex} className="mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    {pair.map((detail, index) => (
                      <div key={index} className="mb-4">
                        <p className="font-semibold text-lg">{detail.title} :</p>
                        <p>{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="detailPart">
            <h3 className="detailTitle text-2xl font-semibold mb-4">Conditions particulières</h3>
            {conditionsParticulieres &&
              conditionsParticulieres.reduce((pairs, detail, index) => {
                if (index % 2 === 0) pairs.push([]);
                pairs[pairs.length - 1].push(detail);
                return pairs;
              }, []).map((pair, pairIndex) => (
                <div key={pairIndex}>
                  <div className="grid grid-cols-2 gap-4">
                    {pair.map((service, index) => (
                      <div key={index} className="mb-4 flex items-center">
                        <p className="font-semibold text-lg">{service.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

        </div>
      </div>

      <div ref={reservationRef} id="reserver">
        <Reservation />
      </div>

    </div>
  );
}
