import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import emailjs from '@emailjs/browser'
import Maps from "./Maps";
import sanityClient from "../client.js";
import BlockContent from '@sanity/block-content-to-react';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState('');

  const [contactText, setContactText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Utilisation des variables d'environnement pour emailJS
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_USER_ID;

    //Object contains dynamic template params
    const  templateParams = {
      from_name: name,
      from_email: email,
      from_tel: tel,
      message: message
    }

    //Send email using emailJS
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setName('')
        setEmail('')
        setTel('')
        setMessage('')
        setMessageSent(true)
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi du formulaire :', error);
      });
  }

  useEffect(() => {
    // Sanity contactText
    sanityClient
      .fetch(`*[_type == "contactText"]`)
      .then((data) => setContactText(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Contact - Oustal de Marie | Prenez contact avec nous pour vos questions et réservations</title>
        <meta name="description" content="Contactez l'Oustal de Marie en Ariège pour toute demande d'information, réservation ou question. Nous sommes là pour répondre à vos besoins et vous aider à planifier votre séjour dans notre gîte. Envoyez-nous un message et découvrez comment profiter au mieux de votre visite." />
      </Helmet>
      <section className="contact">
        <div className="contactpart">
          <div className="container py-24 mx-auto">
            <div className="flex mx-4">
              <div className="leftPart">
                {contactText &&
                  contactText.map((text, index) => (
                    <div key={index}>
                      <BlockContent blocks={text.body} />
                    </div>
                  ))}
              </div>
              
              <div className="w-2/3 pl-4">
                <div className="rightPart">
                  <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="contactTitle font-medium mb-4">
                      Contactez-Nous
                    </h1>
                  </div>
                  <form onSubmit={handleSubmit} className="emailForm w-4/5">
                    <div className="flex flex-wrap">
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label for="name" className="leading-7 text-lg text-gray-600">
                            Nom Prénom
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label
                            for="email"
                            className="leading-7 text-lg text-gray-600"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label
                            for="tel"
                            className="leading-7 text-lg text-gray-600"
                          >
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            id="tel"
                            name="tel"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                            className="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            for="message"
                            className="leading-7 text-lg text-gray-600"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                          ></textarea>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <button className="flex mx-auto py-2 px-8 focus:outline-none rounded text-lg" type="submit">
                          Envoyer
                        </button>
                      </div>
                      {messageSent && (
                        <div className="text-green-500 text-center mt-4">
                          <p>Message envoyé!</p>
                        </div>
                      )}
                      <div className="conctactInfos p-2 w-full pt-8 mt-8 border-t text-gray-900 text-center">
                        <a href="mailto:contact@oustaldemarie.fr" className="mx-8">contact@oustaldemarie.fr</a>
                        <a href="tel:+33651377026" className="mx-8">06 12 34 56 78</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Maps/>
    </div>
  );
}
