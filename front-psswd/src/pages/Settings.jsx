import React from "react";
import sequances_bi from "../picture/sequances_bi.jpg";

const Settings = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
        BI INTERFAÇAGE
      </h1>
      <div className="bg-white shadow-xl rounded-xl p-4 mb-4 ">
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Cette solution a été développée pour alimenter une base de données
          utilisée par l'équipe de BI pour créer des KPI et assurer leur mise
          à jour régulière.
        </p>
        <p className="text-lg curs text-gray-700 mb-6 leading-relaxed">
          Une synchronisation programmée toutes les heures (à la minute 40)
          permet de mettre à jour la base de données avec les nouvelles
          commandes, fournissant des informations détaillées telles que le
          client, la livraison, les produits et les quantités commandées.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Des accès à la base de données sont fournis à l'équipe BI pour
          accéder aux vues pertinentes.
        </p>
        <img
          src={sequances_bi}
          alt="Diagramme de séquence"
          className="w-full h-auto mb-6 rounded-xl shadow-md"
        />
        <p className="text-lg text-gray-700 mb-6 text-center font-semibold">
          Diagramme de séquence
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Ce diagramme représente les interactions entre le projet de
          synchronisation avec l'API Shopify et le serveur de l'équipe BI.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Synchro. - Shopify</strong>
            <ol className="list-decimal list-inside ml-6">
              <li>
                Connexion via l'API Shopify pour récupérer les commandes
              </li>
              <li>Mise à jour de la base de données</li>
            </ol>
          </li>
          <li>
            <strong>Synchro. - BI</strong>
            <ol className="list-decimal list-inside ml-6">
              <li>Accès fourni à l'équipe BI</li>
              <li>Connexion sur la base de données</li>
            </ol>
          </li>
        </ul>
        <p className="text-lg text-gray-700 mb-6 font-semibold">API Shopify</p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Pour plus d'infos sur l'API Shopify:{" "}
          <a
            href="https://shopify.dev/docs/api/admin-rest/2022-04/resources/order#get-orders?status=any"
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation de l'API Shopify
          </a>
        </p>
      </div>
    </div>
  );
};

export default Settings;
