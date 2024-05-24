import React from 'react';
import { useParams } from 'react-router-dom';

const Subscription_S = () => {
  const { projectId } = useParams();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        ABONNEMENT SERVICE 
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          SYNCHRONISATION API NAVISION ET SHOPIFY
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Le but est d'établir une liaison entre les plateformes de commerce électronique (e-com) et le système de gestion de Iwaco (Navision) pour synchroniser en temps réel les tarifs et les stocks. Cela fournira une visibilité à jour des produits en stock, des prix et des promotions disponibles.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          La synchronisation s'effectue automatiquement selon les plages horaires programmées.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          La première étape consistait à créer une application sur la plateforme Shopify.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Accueil</h2>
        <p className="text-gray-700 leading-relaxed">
          L'objectif de cette interface est d'afficher la liste des projets.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Pour accéder à l'interface de gestion des synchronisations Navision-Shopify, suivez ce lien : 
          <a href="https://synchro.isla-dev.com/app/update" className="text-blue-500 hover:underline">
            Interface de gestion des synchronisations
          </a>
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Détail</h2>
        <p className="text-gray-700 leading-relaxed">
          L'objectif de cette interface est de gérer et de contrôler la synchronisation automatique ou manuelle pour un ou plusieurs produits sur Shopify, en particulier pour le projet Taiga et Iwashop.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Pour accéder à l'interface, cliquez sur show.
        </p>
      </div>
    </div>
  );
};

export default Subscription_S;
