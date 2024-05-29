import React from "react";
import fig1 from "../picture/fig1.png";
import synch from "../picture/synch.jpg";
import mysql from "../picture/1200px-MySQL.svg.png";
import apache from "../picture/Apache_HTTP_server_logo_(2019-present).svg.png";
import download from "../picture/download.png";
import ovh from "../picture/Logo-OVH.svg.png";
import php from "../picture/PHP-logo.svg.webp";
import restApi from "../picture/rest-api-icon.webp";

function Architectures() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        ARCHITECTURE DE LA CONNEXION
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Introduction
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          L'application de synchronisation utilise le protocole HTTPS pour
          garantir une connexion sécurisée entre le client et le serveur contre
          les interceptions et les attaques malveillantes. La fig. explique les
          différentes services qui interviennent dans la connexion entre
          client-serveur.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">SSL</h2>
        <p className="text-gray-700 leading-relaxed">
          La clé SSL utilisée par l'application de synchronisation est certifiée
          par COMODO RSA et a une durée de validité de 3 mois. Elle est
          également renouvelée automatiquement pour assurer la continuité du
          service.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Apache</h2>
        <p className="text-gray-700 leading-relaxed">
          Le logiciel libre Apache HTTP Server est un serveur HTTP créé et
          maintenu au sein de la fondation Apache. Ce fut le serveur HTTP le
          plus populaire du World Wide Web. Il est distribué selon les termes de
          la licence Apache.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Modsecurity
        </h2>
        <p className="text-gray-700 leading-relaxed">
          est un pare-feu applicatif, dont le rôle est de filtrer les requêtes
          entrant sur un serveur HTTP Apache. Il se présente sous la forme d'un
          module apache, qui analyse les requêtes reçues grâce à l'emploi d'une
          base des règles de requêtes considérées comme non souhaitées.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row items-center">
          <img
            src={synch}
            alt="synch"
            className="w-full lg:w-1/3 mr-4 rounded-lg mb-4 lg:mb-0"
          />
          <p className="text-base text-gray-700 leading-relaxed flex-1">
            La figure illustre les différents systèmes liés à l'application de
            synchronisation.
          </p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8 flex flex-col lg:flex-row items-center">
        <img
          src={fig1}
          alt="fig"
          className="w-full lg:w-1/3 mr-4 rounded-lg mb-4 lg:mb-0"
        />
        <p className="text-base text-gray-700 leading-relaxed flex-1">
          L'application de synchronisation utilise le protocole HTTPS pour
          garantir une connexion sécurisée entre le client et le serveur contre
          les interceptions et les attaques malveillantes. La fig. explique les
          différentes services qui interviennent dans la connexion entre
          client-serveur.
        </p>
      </div>

      <table className="w-full mb-8 bg-white shadow-md rounded-lg overflow-hidden">
        <tbody>
          <tr className="bg-gray-100 hover:bg-gray-200 transition-colors">
            <th className="text-left p-4 text-gray-800">Server</th>
            <td className="p-4">Dédié - ns3086294.ip-145-239-65.eu</td>
          </tr>
          <tr className="bg-white hover:bg-gray-100 transition-colors">
            <th className="text-left p-4 text-gray-800">OS</th>
            <td className="p-4">WHM</td>
          </tr>
          <tr className="bg-gray-100 hover:bg-gray-200 transition-colors">
            <th className="text-left p-4 text-gray-800">
              Access panneau de contrôle
            </th>
            <td className="p-4">
              <a
                className="text-blue-500 hover:underline"
                href="https://iwaco.ma:2087/"
              >
                https://iwaco.ma:2087/
              </a>
            </td>
          </tr>
          <tr className="bg-white hover:bg-gray-100 transition-colors">
            <th className="text-left p-4 text-gray-800">CPU</th>
            <td className="p-4">Xeon D-1520</td>
          </tr>
          <tr className="bg-gray-100 hover:bg-gray-200 transition-colors">
            <th className="text-left p-4 text-gray-800">RAM</th>
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

      <div className="flex justify-center items-center space-x-4">
        <img
          src={mysql}
          alt="MySQL"
          className="h-12 filter grayscale hover:filter-none transition duration-300"
        />
        <img
          src={apache}
          alt="Apache"
          className="h-12 filter grayscale hover:filter-none transition duration-300"
        />
        <img
          src={download}
          alt="Download"
          className="h-12 filter grayscale hover:filter-none transition duration-300"
        />
        <img
          src={ovh}
          alt="OVH"
          className="h-12 filter grayscale hover:filter-none transition duration-300"
        />
        <img
          src={php}
          alt="PHP"
          className="h-12 filter grayscale hover:filter-none transition duration-300"
        />
        <img
          src={restApi}
          alt="REST API"
          className="h-12 filter grayscale hover:filter-none transition duration-300"
        />
      </div>
    </div>
  );
}

export default Architectures;
