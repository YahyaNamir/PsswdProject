import React from "react";
import { useParams } from "react-router-dom";
import laravel from "../picture/laravel.png";
import shopify from "../picture/shopify.png";
import Zendesk from "../picture/Zendesk.png";
import mysql from "../picture/mysql.png";
import archiproj from "../picture/archiproj.png";
import how_webhooks_work from "../picture/how-webhooks-work.png";

const Details_D = () => {
  const { projectId } = useParams();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        DÉTAILS DU DOMAINE 
        
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          ZENDESK Integration Overview
        </h2>
        <p className="text-gray-700 mb-4">
          Le script intermédiaire permet la génération de tickets sur la
          plateforme Zendesk en se basant sur les commandes provenant de Shopify
          via un Webhook.
        </p>
        <p className="text-gray-700 mb-4">
          L'application basée sur laravel et a utilisé le webhook shopify pour
          obtenir les données des commandes et a utilisé zendesk apis pour créer
          le ticket et vérifier le client et le créer
        </p>
        <div className="flex justify-center mb-8">
          <img
            target="_blank"
            rel="noopener noreferrer"
            src={Zendesk}
            alt="Zendesk"
            className=" cursor-pointer  h-12 mx-8 filter grayscale hover:grayscale-0 transition-transform duration-200 transform hover:scale-110"
          />
          <img
            target="_blank"
            rel="noopener noreferrer"
            href="https://shopify.dev/docs/api/admin-rest"
            src={shopify}
            alt="Shopify"
            className=" cursor-pointer  h-12 mx-8 filter grayscale hover:grayscale-0 transition-transform duration-200 transform hover:scale-110"
          />
          <img
            target="_blank"
            rel="noopener noreferrer"
            href="https://laravel.com/"
            src={laravel}
            alt="Laravel"
            className=" cursor-pointer  h-12 mx-8 filter grayscale hover:grayscale-0 transition-transform duration-200 transform hover:scale-110"
          />
          <img
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.isla-dev.com/synchro/#"
            src={mysql}
            alt="MySQL"
            className=" cursor-pointer  h-12 mx-8 filter grayscale hover:grayscale-0 transition-transform duration-200 transform hover:scale-110"
          />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Architecture Diagram
        </h3>
        <div className="flex">
          <img
            src={archiproj}
            alt="Architecture Diagram"
            className="mr-4 mb-4"
            style={{ width: "50%" }}
          />
          <ul className="list-disc list-inside mb-4">
            <li>
              Le processus commence sur Shopify lorsque les clients passent
              leurs commandes.
            </li>
            <li>
              Ensuite, l'application de synchronisation créa des tickets sur
              Zendesk en utilisant les webhooks de Shopify.
            </li>
            <li>Cela permet au service client de traiter les commandes.</li>
            <li>
              Une fois que la commande est confirmée, un tag "confirmed" est
              ajouté à celle-ci.{" "}
            </li>
            <li>
              Enfin, Navision utilise l'API de Shopify pour récupérer ces
              commandes.
            </li>
          </ul>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Shopify Webhooks
        </h3>
        <div className="flex">
          <p className="text-gray-700 mb-4">
            En utilisant les abonnements webhook pour recevoir des notifications
            sur la création ou la mise à jour de la commande, après
            l'application, créez le ticket pour zendesk et créez le client s'il
            n'existe pas, ou mettez à jour le ticket pour cette commande, en
            fonction des balises, chaque balise a une mise à jour différente.
            pour utiliser le webhook, nous devons créer une application privée
            dans shopify et vérifier le webhook{" "}
            <u>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://shopify.dev/docs/apps/webhooks/configuration/https#step-5-verify-the-webhook"
              >
                "vérifier ce lien"
              </a>
            </u>{" "}
            <br />
            <br />
            <ul className="list-disc list-inside mb-4">
              <li>
                L'application s'abonne au sujet commandes/création d'une
                boutique et écoute les événements de création de commande.
              </li>
              <li>
                L'application spécifie un point de terminaison HTTPS hébergé par
                le serveur d'applications pour recevoir les événements de la
                rubrique.
              </li>
              <li>Une commande sur la boutique est créée. .</li>
              <li>L'événement est publié dans le sujet commandes/création.</li>
              <li>
                Shopify envoie le webhook avec une charge utile de commande au
                point de terminaison d'abonnement enregistré.
              </li>
            </ul>
          </p>
          <img
            src={how_webhooks_work}
            alt="How Webhooks Work"
            className="mr-4 mb-4"
            style={{ width: "40%" }}
          />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Create WEBHOOKS{" "}
        </h3>{" "}
        <p>
          après avoir créé l'application privée dans le magasin shopify, accédez
          aux notifications et créez les webhooks nécessaires, puis créez ces
          webhooks avec REST
        </p>
        <pre className="bg-blue-300 p-4 rounded mb-4 overflow-auto">
          <code>
            {`{
  "webhook": {
    "topic": "orders/create",
    "address": "https://12345.ngrok.io/",
    "format": "json"
  }
}`}
          </code>
        </pre>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Taiga Webhooks
        </h3>
        <p>
          Obtenir des informations sur la commande lors de la création de la
          commande
        </p>
        <pre className="bg-blue-300 p-4 rounded mb-4 overflow-auto">
          <code>
            Event: orders/create{"\n"}
            Address: https://synchro.isla-dev.com/webhook/order/creat
          </code>
        </pre>
        <br />
        <hr />
        <br />
        <p>
          Obtenir des informations sur la commande lorsque la commande est mise
          à jour
        </p>
        <pre className="bg-blue-300 p-4 rounded mb-4 overflow-auto">
          <code>
            Event: orders/updated{"\n"}
            Address: https://synchro.isla-dev.com/webhook/order/update
          </code>
        </pre>
        <br />
        <hr />
        <br />
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Iwashop Webhooks
        </h3>
        <p>
          obtenir des informations sur la commande lors de la création de la
          commande
        </p>
        <pre className="bg-blue-300 p-4 rounded mb-4 overflow-auto">
          <code>
            Event: orders/create{"\n"}
            Address:
            https://synchro.isla-dev.com/webhook/order/ordercreatiwashop
          </code>
        </pre>
        <br />
        <hr />
        <br />
        <p>
          Obtenir des informations sur la commande lorsque la commande est mise
          à jour
        </p>
        <pre className="bg-blue-300 p-4 rounded mb-4 overflow-auto">
          <code>
            Event: orders/updated{"\n"}
            Address: https://synchro.isla-dev.com/webhook/order/updateiwashop
          </code>
        </pre>
        <br />
        <hr />
        <br />
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Shopify APIs
          </h3>
          <p className="text-gray-700 mb-4">
            en utilisant APIS pour recevoir des commandes et des produits. pour
            utiliser shopify apis, nous devons créer une application privée dans
            shopify obtenir le jeton d'accès car toutes les requêtes de l'API
            REST Admin nécessitent un Shopify valide et ce jeton. Pour plus
            d'informations visitez{" "}
            <u>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://shopify.dev/docs/api/admin-rest"
              >
                ce site
              </a>
            </u>
          </p>
          <div className="px-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Product
            </h3>{" "}
            <p> le produit de shopify par identifiant de produits.</p>
            <p>Pour taiga :$name = 'iwamalll'</p>
            <p>Pour iwashop : $name = 'iwaecom'</p>
            <pre className="bg-blue-300 p-4 rounded mb-4 overflow-auto">
              <code>
                URL : https://iwamalll.myshopify.com/admin/api/2022-10/products/
              </code>
            </pre>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Orders{" "}
            </h3>
            <p> le produit de shopify par identifiant de produits.</p>
            <p>Pour taiga :$name = 'iwamalll'</p>
            <p>Pour iwashop : $name = 'iwaecom'</p>
            <pre className="bg-blue-300 p-4 rounded mb-4 overflow-auto">
              <code>
                URL : https://iwaco-support.zendesk.com/api/v2/tickets.json
              </code>
            </pre>
          </div>
        </div>
        {/* -- */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Zendesk APIs
          </h3>
          <p className="text-gray-700 mb-4">
            Lorsque l'application reçoit la commande de shopify, il crée le
            ticket pour cette commande via apis, pour plus d'informations sur
            zendesk apis, consultez ce lien ce lien
            <u>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://developer.zendesk.com/api-reference/"
              >
                ce site
              </a>
            </u>
          </p>
          <div className="px-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Create ticket
              </h3>{" "}
              <p> Créer un nouveau billet</p>
              <pre className="bg-blue-300 p-4 rounded mb-4 overflow-auto">
                <code>
                  Methode : POST
                  <br />
                  URL :https://iwaco-support.zendesk.com/api/v2/tickets.json"
                </code>
              </pre>
            </div>

            <br />
            <hr />
            <br />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Update ticket
              </h3>{" "}
              <p> Mettre à jour le ticket existant par identifiant</p>
              <pre className="bg-blue-300 p-4 rounded mb-4 overflow-auto">
                <code>
                  Methode : PUT
                  <br />
                  URL :
                  https://iwaco-support.zendesk.com/api/v2/tickets/$ticketID.json"
                </code>
              </pre>
            </div>
            <br />
            <hr />
            <br />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Create new customer
              </h3>{" "}
              <p> Créer un nouveau client</p>
              <pre className="bg-blue-300 p-4 rounded mb-4 overflow-auto">
                <code>
                  Methode : POST
                  <br />
                  URL : https://iwaco-support.zendesk.com/api/v2/users.json "
                </code>
              </pre>
            </div>
            <br />
            <hr />
            <br />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Update customer
              </h3>{" "}
              <p>Créer un nouveau client</p>
              <pre className="bg-blue-300 p-4 rounded mb-4 overflow-auto">
                <code>
                  Methode : POST
                  <br />
                  URL :
                  https://iwaco-support.zendesk.com/api/v2/users/create_or_update.json
                </code>
              </pre>
            </div>
            <br />
            <hr />
            <br />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Find customer
              </h3>{" "}
              <p>Rechercher un client existant par e-mail</p>
              <pre className="bg-blue-300 p-4 rounded mb-4 overflow-auto">
                <code>
                  Methode : GET
                  <br />
                  URL :
                  https://iwaco-support.zendesk.com/api/v2/users/search.json?query=$mail
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details_D;
