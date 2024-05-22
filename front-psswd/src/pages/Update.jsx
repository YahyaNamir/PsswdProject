import React from "react";
import nav_shopify from "../picture/nav_shopify.png";
import nav_shopify_detail_1 from "../picture/nav_shopify_detail_1.png";
import nav_shopify_detail_2 from "../picture/nav_shopify_detail_2.png";
import nav_shopify_detail_3 from "../picture/nav_shopify_detail_3.png";
import nav_shopify_detail_5 from "../picture/nav_shopify_detail_5.png";
import nav_shopify_detail_6 from "../picture/nav_shopify_detail_6.png";
import nav_shopify_detail_7 from "../picture/nav_shopify_detail_7.png";
import nav_shopify_detail_8 from "../picture/nav_shopify_detail_8.png";
import nav_shopify_detail_9 from "../picture/nav_shopify_detail_9.png";
import nav_shopify_detail_10 from "../picture/nav_shopify_detail_10.png";

const Update = () => {
  return (
    <div className="p-8 flex">
      <div className="w-1/3 pr-8">
        <img src={nav_shopify} alt="Shopify Logo" className="my-4" />
        <p className="text-gray-700 text-base leading-relaxed">
          Le but est d'établir une liaison entre les plateformes de commerce
          électronique (e-com) et le système de gestion de iwaco (Navision) pour
          synchroniser en temps réel les tarifs et les stocks. Cela fournira une
          visibilité à jour des produits en stock, des prix et des promotions
          disponibles. La synchronisation s'effectue automatiquement selon les
          plages horaires programmées. La première étape consistait à créer une
          application sur la plateforme Shopify.
        </p>
        <img src={nav_shopify_detail_1} alt="Image 1" className="my-4" />
        <p className="text-gray-700 text-base leading-relaxed">
          Pour accéder à l'interface de gestion des synchronisations
          Navision-Shopify, veuillez suivre le lien suivant :{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://synchro.isla-dev.com/app/update"
          >
            https://synchro.isla-dev.com/app/update
          </a>
        </p>
        <img src={nav_shopify_detail_2} alt="Image 2" className="my-4" />
        <p className="text-gray-700 text-base leading-relaxed">
          L'objectif de cette interface est de gérer et de contrôler la
          synchronisation automatique ou manuelle pour un ou plusieurs produits
          sur Shopify, en particulier pour le projet Taiga et iwashop.
          <br /> Pour accéder à l'interface, cliquez sur "Show".
        </p>
        <img src={nav_shopify_detail_3} alt="Image 3" className="my-4" />
        <p className="text-gray-700 text-base leading-relaxed">
          Pour ajouter un SKU à la liste des produits ignorés par le script de
          synchronisation, vous pouvez suivre les étapes suivantes :
          <ul className="list-disc list-inside">
            <li>Cliquez sur le bouton "Ajouter un SKU".</li>
            <li>
              Ajoutez le SKU que vous souhaitez ignorer à la liste existante.
            </li>
            <li>
              Si vous le souhaitez, vous pouvez spécifier une date de début
              et/ou une date de fin pour la période pendant laquelle le SKU doit
              être ignoré.
            </li>
            <li>
              Enregistrez les modifications apportées à la liste des SKUs
              ignorés.
            </li>
          </ul>
          Une fois le SKU ajouté à la liste des produits ignorés, le script de
          synchronisation ne le synchronisera plus.
        </p>
        <img src={nav_shopify_detail_5} alt="Image 5" className="my-4" />
        <p className="text-gray-700 text-base leading-relaxed">
          Pour mettre à jour tous les produits, vous pouvez cliquer sur le
          bouton "Mettre à jour tous les produits".
        </p>
        <img src={nav_shopify_detail_6} alt="Image 6" className="my-4" />
        <p className="text-gray-700 text-base leading-relaxed">
          Pour mettre à jour un produit spécifique, vous pouvez cliquer sur le
          bouton "Mettre à jour un produit".
        </p>
        <img src={nav_shopify_detail_7} alt="Image 7" className="my-4" />
        <p className="text-gray-700 text-base leading-relaxed">
          Pour gérer la liste des produits à ignorer, vous pouvez cliquer sur le
          bouton "Gérer la liste des produits à ignorer".
        </p>
        <img src={nav_shopify_detail_8} alt="Image 8" className="my-4" />
        <p className="text-gray-700 text-base leading-relaxed">
          Pour ajouter un SKU à la liste des produits ignorés, vous pouvez
          suivre les étapes suivantes :
          <ul className="list-disc list-inside">
            <li>Cliquez sur le bouton "Ajouter un SKU".</li>
            <li>
              Ajoutez le SKU que vous souhaitez ignorer à la liste existante.
            </li>
            <li>
              Si vous le souhaitez, vous pouvez spécifier une date de début
              et/ou une date de fin pour la période pendant laquelle le SKU doit
              être ignoré.
            </li>
            <li>
              Enregistrez les modifications apportées à la liste des SKUs
              ignorés.
            </li>
          </ul>
          Une fois le SKU ajouté à la liste des produits ignorés, le script de
          synchronisation ne le synchronisera plus.
        </p>
        <img src={nav_shopify_detail_9} alt="Image 9" className="my-4" />
        <p className="text-gray-700 text-base leading-relaxed">
          Une fois le SKU ajouté à la liste des produits ignorés, le script de
          synchronisation ne le synchronisera plus.
        </p>
        <img src={nav_shopify_detail_10} alt="Image 10" className="my-4" />
      </div>
      <div className="w-2/3">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          SYNCHRONISATION API NAVISION ET SHOPIFY
        </h1>
        <ul className="list-disc list-inside">
          <li>Mettre à jour tous les produits</li>
          <li>Mettre à jour un produit</li>
          <li>Gérer la liste des produits à ignorer</li>
        </ul>
      </div>
    </div>
  );
};

export default Update;
