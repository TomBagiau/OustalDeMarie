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
  const [captchaNumber1, setCaptchaNumber1] = useState(0);
  const [captchaNumber2, setCaptchaNumber2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState('');

  const [contactText, setContactText] = useState([]);

  useEffect(() => {
    // Generate random numbers for captcha
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaNumber1(num1);
    setCaptchaNumber2(num2);
    
    // Sanity contactText
    sanityClient
      .fetch(`*[_type == "contactText"]`)
      .then((data) => setContactText(data))
      .catch(console.error);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check captcha answer
    const answer = parseInt(captchaAnswer);
    if (answer === captchaNumber1 + captchaNumber2) {
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
    } else {
      alert("La réponse au captcha est incorrecte. Veuillez réessayer.");
    }
  }

  return (
    <div>
      <Helmet>
        <title>Contact - Oustal de Marie | Prenez contact avec nous pour vos questions et réservations</title>
        <meta name="description" content="Contactez l'Oustal de Marie en Ariège pour toute demande d'information, réservation ou question. Nous sommes là pour répondre à vos besoins et vous aider à planifier votre séjour dans notre gîte. Envoyez-nous un message et découvrez comment profiter au mieux de votre visite." />
      </Helmet>
      <section className="contact">
        <div className="contactpart">
          <div className="container py-24 mx-auto">
            <div className="contactFormText flex mx-4">
              <div className="leftPart">
                {contactText &&
                  contactText.map((text, index) => (
                    <div key={index}>
                      <BlockContent blocks={text.body} />
                    </div>
                  ))}
              </div>
              
              <div className="formcontainer w-2/3 pl-4">
                <div className="rightPart">
                  <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="contactTitle font-medium mb-4">
                      Contactez-Nous
                    </h1>
                  </div>
                  <form onSubmit={handleSubmit} className="emailForm">
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
                        <label htmlFor="captcha" className="leading-7 text-lg text-gray-600">
                          Combien font {captchaNumber1} + {captchaNumber2} ?
                        </label>
                        <input
                          type="number"
                          id="captcha"
                          name="captcha"
                          value={captchaAnswer}
                          onChange={(e) => setCaptchaAnswer(e.target.value)}
                          className="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
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
                        <a href="tel:+686814117" className="mx-8">06 86 81 41 17</a>
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