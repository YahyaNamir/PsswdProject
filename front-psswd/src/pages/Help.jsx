import React from "react";

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
      <p className="text-gray-700 text-base leading-relaxed">
        Une fois que l'utilisateur confirme la commande, le webhook de Zendesk
        est déclenché et il communique avec l'API de synchronisation pour mettre
        à jour la date de confirmation associée à cette commande. Cette mise à
        jour est essentielle pour maintenir les données du système à jour et
        fournir une vue précise de l'état de la commande.
      </p>
      <p className="text-gray-700 text-base leading-relaxed">
        <strong>Exemple d'execution:</strong>
        <br /> End point: POST https://synchro.isla-dev.com/api/bi
        <br /> Header: Header Authorization: Bearer xxx…
        <br /> Body: {'{"project": "project_name","id": "shopify_order_id"}'}
        <br /> Exemple:
        <pre>
          {`curl --request POST \\
    --url https://synchro.isla-dev.com/api/bi \\
    --header 'Authorization: Bearer ' \\
    --header 'Content-Type: application/json' \\
    --data '{"project": "taiga","id": 5199855911142}'`}
        </pre>
        <strong>Reponse:</strong>
        <ul className="list-disc list-inside">
          <li>200 Commande déjà confirmée</li>
          <li>201 Commande confirmée</li>
          <li>401 Une authentification est nécessaire</li>
          <li>404 Commande n'exist pas sur shopify</li>
          <li>406 Body request error</li>
        </ul>
      </p>
    </div>
  );
};

export default Help;
