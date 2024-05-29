import React from "react";
import { useParams } from "react-router-dom";

const Details_S = () => {
  const { projectId } = useParams();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        DÉTAILS DU PROJET
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          PRÉSENTATION DU PROJET
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Le projet de synchronisation est une application web créée par
          l’équipe de développement du digital factory de Iwaco. Il a pour but
          de mettre à jour les produits publiés sur Shopify ainsi que
          l’alimentation d’une base de données par les commandes générées sur
          Shopify pour le traitement BI.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          Cette application web contient :
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Page d'accueil.</li>
          <li>
            Interface de programmation (API) pour communiquer avec Zendesk.
          </li>
          <li>
            Dashboard pour la manipulation des synchronisations, le suivi des
            synchronisations, la gestion des backups, la gestion des comptes et
            la consultation des logs.
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Architecture
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          L'application est créée sous Framework Laravel 10 en raison de sa
          structure MVC, de sa documentation complète, de sa facilité de
          développement, de ses fonctionnalités de sécurité avancées, de sa
          couche d'abstraction de base de données puissante et de sa communauté
          active de développeurs.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          Pour plus d'informations, visitez:{" "}
          <a
            href="https://github.com/laravel/laravel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Laravel GitHub
          </a>
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Configuration du serveur
        </h2>
        <table className="w-full mb-8 bg-white shadow-md rounded-lg overflow-hidden">
          <tbody>
            <tr className="bg-gray-100 hover:bg-gray-200 transition-colors">
              <th className="text-left p-4 text-gray-800">Server</th>
              <td className="p-4">Dédié - ns3086294.ip-145-239-65.eu</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100 transition-colors">
              <th className="text-left p-4 text-gray-800">OS</th>
              <td className="p-4">AlmaLinux 8</td>
            </tr>
            <tr className="bg-gray-100 hover:bg-gray-200 transition-colors">
              <th className="text-left p-4 text-gray-800">
                Panneau de contrôle
              </th>
              <td className="p-4">WHM</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100 transition-colors">
              <th className="text-left p-4 text-gray-800">
                Access panneau de contrôle
              </th>
              <td className="p-4">
                <a
                  href="https://iwaco.ma:2087/"
                  className="text-blue-500 hover:underline"
                >
                  https://iwaco.ma:2087/
                </a>
              </td>
            </tr>
            <tr className="bg-gray-100 hover:bg-gray-200 transition-colors">
              <th className="text-left p-4 text-gray-800">CPU</th>
              <td className="p-4">Xeon D-1520</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100 transition-colors">
              <th className="text-left p-4 text-gray-800">RAM</th>
              <td className="p-4">32 Go</td>
            </tr>
            <tr className="bg-gray-100 hover:bg-gray-200 transition-colors">
              <th className="text-left p-4 text-gray-800">Storage</th>
              <td className="p-4">2 x 2 To</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100 transition-colors">
              <th className="text-left p-4 text-gray-800">PHP</th>
              <td className="p-4">8.1</td>
            </tr>
            <tr className="bg-gray-100 hover:bg-gray-200 transition-colors">
              <th className="text-left p-4 text-gray-800">MYSQL</th>
              <td className="p-4">Mysql v8.0.32</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100 transition-colors">
              <th className="text-left p-4 text-gray-800">PHP-FPM</th>
              <td className="p-4">8.1</td>
            </tr>
            <tr className="bg-gray-100 hover:bg-gray-200 transition-colors">
              <th className="text-left p-4 text-gray-800">Firewall</th>
              <td className="p-4">Modsecurity</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100 transition-colors">
              <th className="text-left p-4 text-gray-800">Server web</th>
              <td className="p-4">Apache</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details_S;
