import React from "react";
import { useParams } from "react-router-dom";
import home from "../picture/home.png";

const Introduction = () => {
  const { projectId } = useParams();
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
        PRÉSENTATION DU PROJET
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Le projet de synchronisation est une application web créée par l’équipe
        de développement du digital factory de Iwaco. Son objectif est de mettre
        à jour les produits publiés sur Shopify ainsi que d'alimenter une base
        de données par les commandes générées sur Shopify pour le traitement BI.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Cette application web contient :
      </p>
      <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6 ml-6">
        <li>Page d'accueil.</li>
        <li>Interface de programmation (API) pour communiquer avec Zendesk.</li>
        <li>
          Dashboard pour la manipulation des synchronisations, le suivi des
          synchronisations, la gestion des sauvegardes, la gestion des comptes
          et la consultation des logs.
        </li>
      </ul>
      <div className="flex flex-col md:flex-row items-start mb-8">
        <img
          src={home}
          alt="home"
          className="w-full md:w-1/2 lg:w-1/3 h-auto mb-6 md:mb-0 md:mr-8 rounded-lg shadow-lg"
        />
        <p className="text-gray-700 text-lg leading-relaxed flex-grow">
          Le projet est créé avec le framework Laravel 10, un choix populaire
          pour les projets web en raison de sa structure MVC, de sa
          documentation complète, de sa facilité de développement, de ses
          fonctionnalités de sécurité avancées, de sa couche d'abstraction de
          base de données puissante et de sa communauté active de développeurs.{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://github.com/laravel/laravel"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/laravel/laravel
          </a>
        </p>
      </div>
    </div>
  );
};

export default Introduction;
