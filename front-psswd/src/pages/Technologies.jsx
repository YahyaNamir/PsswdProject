import React from "react";
import login from "../picture/login.png";
import forgot_password from "../picture/forgot-password.png";

const Technologies = () => {
  return (
    <div className="p-8 w-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        AUTHENTIFICATION
      </h1>
      <div className="mb-8">
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Pour accéder au tableau de bord consulter le lien :
          <a
            className="text-blue-500 hover:underline ml-2"
            href="https://synchro.isla-dev.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://synchro.isla-dev.com/login
          </a>
        </p>
        <img
          className="w-full h-auto mb-6 rounded shadow-md"
          src={login}
          alt="Login Screen"
        />
        <p className="text-gray-700 text-lg leading-relaxed">
          Puis entrer le nom d’utilisateur (email) et le mot de passe.
        </p>
      </div>
      <div>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Pour la recuperation du mot de passe, consulter le lien :
          <a
            className="text-blue-500 hover:underline ml-2"
            href="https://synchro.isla-dev.com/password/reset"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://synchro.isla-dev.com/password/reset
          </a>
        </p>
        <img
          className="w-full h-auto mb-6 rounded shadow-md"
          src={forgot_password}
          alt="Forgot Password Screen"
        />
        <p className="text-gray-700 text-lg leading-relaxed">
          Puis entrer le nom d’utilisateur (email), un email envoyé qui contient
          lien de recuperation du mot de passe.
        </p>
      </div>
    </div>
  );
};

export default Technologies;
