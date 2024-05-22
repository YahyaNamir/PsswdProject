import React from "react";
import exemple_api from "../picture/exemple_api.png";
import zendesk_synch from "../picture/zendesk-synch.jpg";

const Help = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        API DATE DE CONFIRMATION
      </h1>
      <p className="text-gray-700 text-base leading-relaxed">
        L'API de confirmation de dates a été développée dans le but d'améliorer
        les indicateurs clés de performance (KPI) de la Business Intelligence
        (BI) en ce qui concerne la date de confirmation des commandes.
      </p>
      
      <div className="flex flex-col md:flex-row mb-6">
        <img
          src={zendesk_synch}
          alt="zendesk_synch"
          className="w-full md:w-2/3 lg:w-1/2 h-auto mb-4 md:mb-0 md:mr-8"
        />
        <p className="text-gray-700 text-lg leading-relaxed flex-grow">
          Une fois que l'utilisateur confirme la commande, le webhook de Zendesk
          est déclenché et il communique avec l'API de synchronisation pour mettre
          à jour la date de confirmation associée à cette commande. Cette mise à
          jour est essentielle pour maintenir les données du système à jour et
          fournir une vue précise de l'état de la commande.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center mb-6 p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300">
        <img
          src={exemple_api}
          alt="exemple_api"
          className="w-full md:w-1/1 lg:w-1/3 h-auto rounded-lg mr-4 mb-4 md:mb-0"
        />
        <div className="text-gray-700 text-base leading-relaxed flex-grow">
          <strong>Exemple d'execution:</strong>
          <br /> End point: POST https://synchro.isla-dev.com/api/bi
          <br /> Header: Header Authorization: Bearer xxx…
          <br /> Body: {'{"project": "project_name","id": "shopify_order_id"}'}
          <br /> Exemple:
          <pre className="bg-gray-100 p-2 rounded">
            {`curl --request POST \\
    --url https://synchro.isla-dev.com/api/bi \\
    --header 'Authorization: Bearer xxx' \\
    --header 'Content-Type: application/json' \\
    --data '{"project": "taiga","id": 5199855911142}'`}
          </pre>
          <strong>Reponse:</strong>
          <div>
            <div className="flex items-center bg-gray-100 p-2 rounded-lg mb-2 hover:bg-gray-200 transition-colors duration-300">
              <div className="flex-grow cursor-pointer">200 Commande déjà confirmée</div>
            </div>
            <div className="flex items-center bg-gray-100 p-2 rounded-lg mb-2 hover:bg-gray-200 transition-colors duration-300">
              <div className="flex-grow cursor-pointer">201 Commande confirmée</div>
            </div>
            <div className="flex items-center bg-gray-100 p-2 rounded-lg mb-2 hover:bg-gray-200 transition-colors duration-300">
              <div className="flex-grow cursor-pointer">401 Une authentification est nécessaire</div>
            </div>
            <div className="flex items-center bg-gray-100 p-2 rounded-lg mb-2 hover:bg-gray-200 transition-colors duration-300">
              <div className="flex-grow cursor-pointer">404 Commande n'existe pas sur Shopify</div>
            </div>
            <div className="flex items-center bg-gray-100 p-2 rounded-lg mb-2 hover:bg-gray-200 transition-colors duration-300">
              <div className="flex-grow cursor-pointer">406 Body request error</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
