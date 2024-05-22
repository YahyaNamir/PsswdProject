import React from "react";
import home from "../picture/home.png";

const Installation = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">PAGE D’ACCUEIL</h1>
      <div className="text-gray-700 text-base leading-relaxed">
        <p>
          La page d'accueil -temporaire- est la page principale avant d'accéder
          au dashboard du projet de synchronisation, car elle aide les
          utilisateurs à se familiariser avec le projet et à naviguer facilement
          vers les autres pages. En particulier, elle fournit des liens pour
          accéder à la page de connexion, où les utilisateurs peuvent se
          connecter pour accéder à leur compte, ainsi qu'au tableau de bord, où
          ils peuvent gérer et visualiser les données de synchronisation. En
          résumé, la page d'accueil temporaire est un point de départ essentiel
          pour les utilisateurs qui souhaitent utiliser le projet de
          synchronisation avec succès.
        </p>
        <div className="w-full md:w-1/2 xl:w-1/2 float-right p-4 md:p-8 xl:p-8">
          <img
            src={home}
            alt="Home"
            className="w-full h-auto rounded-lg mx-auto mb-4"
          />
        </div>
        <p>
          Pour accéder à la page d'accueil temporaire, veuillez suivre le lien
          correspondant:
        </p>
        <div className="inline-block bg-gray-200 rounded-lg p-2 shadow-lg hover:bg-gray-300 hover:shadow-xl transition duration-300">
          <a
            className="text-blue-500 hover:underline"
            href="https://synchro.isla-dev.com/"
          >
            https://synchro.isla-dev.com/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Installation;
