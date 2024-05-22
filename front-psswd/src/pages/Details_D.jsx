import React from 'react';
import { useParams } from 'react-router-dom';

const Details_D = () => {
  const { projectId } = useParams();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        DÉTAILS DU DOMAINE {projectId}
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          ARCHITECTURE DE LA CONNEXION
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          L'application de synchronisation utilise le protocole HTTPS pour garantir une connexion sécurisée entre le client et le serveur contre les interceptions et les attaques malveillantes.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">SSL</h2>
        <p className="text-gray-700 leading-relaxed">
          La clé SSL utilisée par l'application de synchronisation est certifiée par COMODO RSA et a une durée de validité de 3 mois. Elle est également renouvelée automatiquement pour assurer la continuité du service.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Modsecurity</h2>
        <p className="text-gray-700 leading-relaxed">
          est un pare-feu applicatif, dont le rôle est de filtrer les requêtes entrant sur un serveur HTTP Apache. Il se présente sous la forme d'un module apache, qui analyse les requêtes reçues grâce à l'emploi d'une base des règles de requêtes considérées comme non souhaitées.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Apache</h2>
        <p className="text-gray-700 leading-relaxed">
          Le logiciel libre Apache HTTP Server est un serveur HTTP créé et maintenu au sein de la fondation Apache. Ce fut le serveur HTTP le plus populaire du World Wide Web. Il est distribué selon les termes de la licence Apache.
        </p>
      </div>
    </div>
  );
};

export default Details_D;
