import React from "react";

const Settings = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">BI INTERFAÇAGE</h1>
      <p className="text-gray-700 text-base leading-relaxed">
        Cette solution a été developpé pour alimenter une base de données utilisée par l'équipe de BI pour créer des KPI et assurer leur mise à jour régulière.
        Une synchronisation programmée toutes les heures (à la minute 40) permet de mettre à jour la base de données avec les nouvelles commandes, fournissant des informations détaillées telles que le client, la livraison, les produits et les quantités commandées.
        Des accès à la base de données sont fournis à l'équipe BI pour accéder aux views pertinentes.
      </p>
      <p className="text-gray-700 text-base leading-relaxed">
        Pour plus d'infos. sur l'API shopify:
        <a className="text-blue-500 hover:underline" href="https://shopify.dev/docs/api/admin-rest/2022-04/resources/order#get-orders?status=any">
          https://shopify.dev/docs/api/admin-rest/2022-04/resources/order#get-orders?status=any
        </a>
      </p>
    </div>
  );
};

export default Settings;
