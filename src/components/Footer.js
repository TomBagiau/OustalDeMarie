import React from "react";
import { Typography } from "@material-tailwind/react";
import { TbBrandAirbnb, TbBrandBooking } from "react-icons/tb";
import './Footer.css';

export default function Footer() {
  const LINKS = [
    {
      title: "Navigation",
      items: [
        { name: "Accueil", url: "/" },
        { name: "La Maison", url: "/la-maison" },
        { name: "Activités", url: "/activites" },
        { name: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Confidentialité",
      items: [
        { name: "Confidentialité", url: "/confidentialite" },
        { name: "Mentions légales", url: "/mentions-legales" },
      ],
    },
    {
      title: "Contact / Réservation",
      items: [
        { name: "Contact", url: "/contact" },
        { name: "Réserver sur le site", url: "/la-maison" },
      ],
    },
  ];

    const currentYear = new Date().getFullYear();

    return (
      <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            Oustal de Marie
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                <Typography variant="small" className="text-lg mb-3 font-bold">
                  {title}
                </Typography>
                <ul>
                  {items.map((link) => (
                    <li key={link.name}>
                      <Typography
                        as="a"
                        href={link.url}
                        className="py-1.5 font-normal transition-colors"
                      >
                        {link.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal md:mb-0"
          >
            &copy; {currentYear} Oustal De Marie - tous droits réservés.
          </Typography>
          <div className="flex gap-4 sm:justify-center">
            <a href="/" target="_blank" className="logoFooter airbnb">
              <TbBrandAirbnb />
            </a>
            <a href="/" target="_blank" className="logoFooter booking">
              <TbBrandBooking />
            </a>
          </div>
        </div>
      </div>
    </footer>
    )
}
