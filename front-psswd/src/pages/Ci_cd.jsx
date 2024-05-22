import React from "react";
import dashboard from "../picture/dashboard.png";

const Ci_cd = () => {
  return (
    <div className="p-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        TABLEAU DE BOARD
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Un tableau de bord de projet synchronisation est une interface graphique
        qui permet de visualiser de manière synthétique les informations clés et
        les données des systèmes ou des processus. Il permet de gérer les
        différentes fonctionnalités et de suivre l'état de la synchronisation
        des stocks et des prix entre les projets créés sur Shopify, la
        synchronisation entre Shopify et Zendesk, la base de données utilisée
        par le système d'information décisionnelle (BI), l'API consommée par
        Zendesk, les sauvegardes de tous les projets, ainsi que les comptes des
        utilisateurs qui ont accès au tableau de bord et à l'API. Le tableau de
        bord est donc un outil essentiel pour assurer le bon fonctionnement du
        projet de synchronisation.
      </p>
      <div className="bg-gray-100 p-8 flex items-start space-x-8 alone">
        <div className="flex-1">
          <p className="mb-4">
            Le projet de synchronisation dispose d'un tableau de bord qui permet
            de gérer plusieurs fonctionnalités importantes, notamment :
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              La synchronisation des stocks et des prix entre les différents
              projets créés sur Shopify
            </li>
            <li>La synchronisation entre Shopify et Zendesk</li>
            <li>
              La base de données utilisée par le système d'information
              décisionnelle (BI)
            </li>
            <li>L'API consommée par Zendesk</li>
            <li>
              Les sauvegardes de tous les projets, y compris les fichiers et les
              bases de données
            </li>
            <li>
              Les comptes des utilisateurs qui ont accès au tableau de bord et
              à l'API.
            </li>
          </ul>
          <p className="mt-4">
            Pour accéder à la page tableau de board
            <a
              className="text-blue-500 hover:underline ml-1"
              href="https://synchro.isla-dev.com/app"
            >
              https://synchro.isla-dev.com/app
            </a>
          </p>
        </div>
        <img src={dashboard} alt="Dashboard" className="w-1/2 h-auto object-cover" />
      </div>
    </div>
  );
};

export default Ci_cd;
