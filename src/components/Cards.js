import { useState, useEffect } from "react";
import sanityClient from "../client.js";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import "./Home.css";

export default function Cards() {
  const [cardData, setCardData] = useState([]);

  const characterLimit = 277;

  const [showFullTextArray, setShowFullTextArray] = useState(Array(cardData.length).fill(false));

  const handleToggleText = (index) => {
    const newShowFullTextArray = [...showFullTextArray];
    newShowFullTextArray[index] = !newShowFullTextArray[index];
    setShowFullTextArray(newShowFullTextArray);
  };

  useEffect(() => {
    /**
     * Sanity cartes
     */
    sanityClient
      .fetch(
        `*[_type == "carte"] | order(_id asc){
          image{
              asset->{
                  url
              },
          },
          titre,
          description,
          lien
        }`
      )
    .then((data) => setCardData(data))
    .catch(console.error);
  }, []);

  return (
    <div className="flex flex-wrap justify-around items-center mx-auto center">
      {cardData &&
        cardData.map((card, index) => (
          <Card key={index} className="sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 my-2 mx-2 mt-10 cart text-white">
            <CardHeader color="blue-gray" className="relative h-72">
              <img
                src={card.image.asset.url}
                alt="card-img"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h3" color="blue-gray" className="mb-2">
                {card.titre}
              </Typography>
              <Typography>
                {showFullTextArray[index] || card.description.length <= characterLimit
                  ? card.description
                  : `${card.description.slice(0, characterLimit)}...`}
                {card.description.length > characterLimit && (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a className="cursor-pointer readmore" onClick={() => handleToggleText(index)}>
                    {showFullTextArray[index] ? ' Lire moins' : ' Lire plus'}
                  </a>
                )}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to={card.lien}>
                <Button className="button">Voir plus</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
