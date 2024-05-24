import React from "react";
import { useParams } from "react-router-dom";

const Details_D = () => {
  const { projectId } = useParams();

  return (<></>
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
//         DÉTAILS DU DOMAINE
//       </h1>
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">
//           ZENDESK Integration Overview
//         </h2>
//         <p className="text-gray-700 mb-4">
//           Le script intermédiaire permet la génération de tickets sur la
//           plateforme Zendesk en se basant sur les commandes provenant de Shopify
//           via un Webhook. L'application basée sur Laravel utilise le webhook
//           Shopify pour obtenir les données des commandes et utilise les API
//           Zendesk pour créer le ticket, vérifier et créer le client si
//           nécessaire.
//         </p>

//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           Architecture Diagram
//         </h3>
//         <ul className="list-disc list-inside mb-4">
//           <li>
//             Le processus commence sur Shopify lorsque les clients passent leurs
//             commandes.
//           </li>
//           <li>
//             L'application de synchronisation crée des tickets sur Zendesk en
//             utilisant les webhooks de Shopify.
//           </li>
//           <li>
//             Le service client traite les commandes via les tickets Zendesk.
//           </li>
//           <li>Un tag "confirmed" est ajouté une fois la commande confirmée.</li>
//           <li>
//             Navision utilise l'API de Shopify pour récupérer ces commandes.
//           </li>
//         </ul>

//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           Shopify Webhooks
//         </h3>
//         <p className="text-gray-700 mb-4">
//           En utilisant les abonnements webhook, nous recevons des notifications
//           sur la création ou la mise à jour des commandes. L'application crée ou
//           met à jour les tickets Zendesk en fonction des balises.
//         </p>
//         <pre className="bg-gray-100 p-4 rounded mb-4">
//           <code>
//             {`{
//   "webhook": {
//     "topic": "orders/create",
//     "address": "https://12345.ngrok.io/",
//     "format": "json"
//   }
// }`}
//           </code>
//         </pre>

//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           Taiga Webhooks
//         </h3>
//         <pre className="bg-gray-100 p-4 rounded mb-4">
//           <code>
//             Event: orders/create{"\n"}
//             Address: https://synchro.isla-dev.com/webhook/order/creat
//           </code>
//         </pre>
//         <pre className="bg-gray-100 p-4 rounded mb-4">
//           <code>
//             Event: orders/updated{"\n"}
//             Address: https://synchro.isla-dev.com/webhook/order/update
//           </code>
//         </pre>

//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           Iwashop Webhooks
//         </h3>
//         <pre className="bg-gray-100 p-4 rounded mb-4">
//           <code>
//             Event: orders/create{"\n"}
//             Address:
//             https://synchro.isla-dev.com/webhook/order/ordercreatiwashop
//           </code>
//         </pre>
//         <pre className="bg-gray-100 p-4 rounded mb-4">
//           <code>
//             Event: orders/updated{"\n"}
//             Address: https://synchro.isla-dev.com/webhook/order/updateiwashop
//           </code>
//         </pre>

//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           Shopify APIs
//         </h3>
//         <p className="text-gray-700 mb-4">
//           En utilisant les APIs de Shopify, nous recevons des commandes et des
//           produits. Il faut créer une application privée et obtenir un jeton
//           d'accès valide.
//         </p>
//         <pre className="bg-gray-100 p-4 rounded mb-4">
//           <code>
//             URL : https://iwamalll.myshopify.com/admin/api/2022-10/products/
//             {$prodID}.json
//           </code>
//         </pre>

//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           Zendesk APIs
//         </h3>
//         <p className="text-gray-700 mb-4">
//           Lorsque l'application reçoit une commande de Shopify, elle crée un
//           ticket pour cette commande via les APIs de Zendesk.
//         </p>
//         <pre className="bg-gray-100 p-4 rounded mb-4">
//           <code>
//             URL : https://iwaco-support.zendesk.com/api/v2/tickets.json
//           </code>
//         </pre>
//       </div>
//     </div>
  );
};

export default Details_D;
