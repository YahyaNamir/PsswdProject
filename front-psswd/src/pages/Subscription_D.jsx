import React from 'react';
import { useParams } from 'react-router-dom';

const Subscription_D = () => {
  const { projectId } = useParams();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        ABONNEMENT DOMAINE 
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          MODÉLISATION
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Diagramme de use cases
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          Ce diagramme permet de représenter les différentes fonctionnalités du système de synchronisation ainsi que les acteurs qui interagissent avec lui.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          Il aide à visualiser les différents scénarios d'utilisation du système, en mettant en évidence les interactions entre les utilisateurs et les fonctionnalités offertes par le système.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          En résumé, il permet de décrire les besoins des utilisateurs et de spécifier les fonctionnalités du système en termes de cas d'utilisation.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Diagramme de séquence</h2>
        <p className="text-gray-700 leading-relaxed">
          Ce diagramme représente graphiquement des interactions entre les acteurs et le système e-recharges selon un ordre chronologique.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Diagramme de classes</h2>
        <p className="text-gray-700 leading-relaxed">
          Ce diagramme permet de représenter visuellement les différentes classes d'objets qui sont utilisées dans un projet, ainsi que les associations, les attributs et les méthodes de ces classes.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Il offre une vue d'ensemble claire et organisée de la structure du système de synchronisation et de ses composants, ce qui facilite la compréhension et la communication entre les membres de l'équipe de développement.
        </p>
      </div>
    </div>
  );
};

export default Subscription_D;
