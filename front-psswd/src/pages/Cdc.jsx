import React from "react";
import useCasesImage from "../picture/use_cases.jpg";
import sequencesImage from "../picture/sequences.jpg";
import classesImage from "../picture/classes.png";

const CDC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
        MODÉLISATION
      </h1>

      <div className="flex flex-col md:flex-row mb-12">
        <div className="md:w-1/2 order-1 flex justify-center items-center">
          <img
            src={useCasesImage}
            alt="Diagramme de cas d'utilisation"
            className="w-3/4 h-auto rounded-lg mx-auto mb-4"
          />
        </div>
        <div className="md:w-1/2 order-2 flex justify-center items-center">
          <div className="bg-white shadow-lg p-4 rounded-lg w-full h-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Diagramme de cas d'utilisation
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Ce diagramme permet de représenter les différentes fonctionnalités
              du système de synchronisation ainsi que les acteurs qui
              interagissent avec lui. Il aide à visualiser les différents
              scénarios d'utilisation du système, en mettant en évidence les
              interactions entre les utilisateurs et les fonctionnalités
              offertes par le système. En résumé, il permet de décrire les
              besoins des utilisateurs et de spécifier les fonctionnalités du
              système en termes de cas d'utilisation.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mb-12">
        <div className="md:w-1/2 order-2 flex justify-center items-center">
          <img
            src={sequencesImage}
            alt="Diagramme de séquence"
            className="w-3/4 h-auto rounded-lg mx-auto mb-4"
          />
        </div>
        <div className="md:w-1/2 order-1 flex justify-center items-center">
          <div className="bg-white shadow-lg p-4 rounded-lg w-full h-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Diagramme de séquence
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Ce diagramme représente graphiquement les interactions entre les
              acteurs et le système e-recharges selon un ordre chronologique.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 order-1 flex justify-center items-center">
          <img
            src={classesImage}
            alt="Diagramme de classes"
            className="w-3/4 h-auto rounded-lg mx-auto mb-4"
          />
        </div>
        <div className="md:w-1/2 order-2 flex justify-center items-center">
          <div className="bg-white shadow-lg p-4 rounded-lg w-full h-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Diagramme de classes
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Ce diagramme permet de représenter visuellement les différentes
              classes d'objets qui sont utilisées dans un projet, ainsi que les
              associations, les attributs et les méthodes de ces classes. Il
              offre une vue d'ensemble claire et organisée de la structure du
              système de synchronisation et de ses composants, ce qui facilite
              la compréhension et la communication entre les membres de l'équipe
              de développement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CDC;
