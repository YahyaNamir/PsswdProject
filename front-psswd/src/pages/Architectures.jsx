import React from "react";
import { useParams } from "react-router-dom";

function Architectures() {
  const { projectId } = useParams();
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        ARCHITECTURE DE LA CONNEXION
      </h1>
      <p className="text-gray-700 text-base leading-relaxed">
        L'application de synchronisation utilise le protocole HTTPS pour
        garantir une connexion sécurisée entre le client et le serveur contre
        les interceptions et les attaques malveillantes.
      </p>
      <div>
        <b>SSL</b>
        <p>
          La clé SSL utilisée par l'application de synchronisation est certifiée
          par COMODO RSA et a une durée de validité de 3 mois. Elle est
          également renouvelée automatiquement pour assurer la continuité du
          service.
        </p>
      </div>
      <div>
        <b>Modsecurity</b>
        <p>
          est un pare-feu applicatif, dont le rôle est de filtrer les requêtes
          entrant sur un serveur HTTP Apache. Il se présente sous la forme d'un
          module apache, qui analyse les requêtes reçues grâce à l'emploi d'une
          base des règles de requêtes considérées comme non souhaitées.
        </p>
      </div>
      <div>
        <b>Apache</b>
        <p>
          Le logiciel libre Apache HTTP Server est un serveur HTTP créé et
          maintenu au sein de la fondation Apache. Ce fut le serveur HTTP le
          plus populaire du World Wide Web. Il est distribué selon les termes de
          la licence Apache
        </p>
      </div>

      <table>
        <tr>
          <th>Server</th> <td>Dédié - ns3086294.ip-145-239-65.eu</td>
        </tr>
        <tr>
          <th>OS</th> <td>WHM</td>
        </tr>
        <tr>
          <th>Access panneau de contrôle </th>{" "}
          <td>
            <a href="">https://iwaco.ma:2087/</a>
          </td>
        </tr>
        <tr>
          <th>CPU</th> <td>Xeon D-1520</td>
        </tr>
        <tr>
          <th>RAM</th> <td>2 x 2 To</td>
        </tr>
        <tr>
          <th>PHP</th> <td>8.1</td>
        </tr>
        <tr>
          <th>MYSQL</th> <td>Mysql v8.0.32</td>
        </tr>
        <tr>
          <th>PHP-FPM </th> <td>8.1</td>
        </tr>
        <tr>
          <th>Firewall</th> <td>Modsecurity</td>
        </tr>
        <tr>
          <th>Server web </th> <td>Apache</td>
        </tr>
      </table>

      
    </div>
  );
}

export default Architectures;
