import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./menu.css";

const Sidebar = ({ projectId, setProjectSelected }) => {
  const navigate = useNavigate();
  const [showLog, setShowLog] = useState(false);

  const logOut = () => {
    setProjectSelected(null);
    localStorage.removeItem("projectSelected");
    setShowLog(false);
    navigate("/");
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setShowLog(true);
  };

  return (
    <div className="h-screen w-64 bg-gray-100 text-gray-900 flex flex-col border-r border-gray-300 fixed top-0 left-0">
      <div className="p-4 border-b border-gray-300">
        <h1 className="text-2xl font-bold text bg-clip-text text-transparent bg-gradient-to-r from-stone-900 to-sky-200">
          IWACO
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <h2 className="px-3 py-1 text-lg text-sky-700 font-semibold border-b border-gray-300">
          <b>Getting Started</b>
        </h2>
        <NavLink
          to={`/project/${projectId}/introduction`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Introduction
        </NavLink>
        <NavLink
          to={`/project/${projectId}/cdc`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          CDC
        </NavLink>
        <NavLink
          to={`/project/${projectId}/installation`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Installation
        </NavLink>
        <NavLink
          to={`/project/${projectId}/technologies`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Technologies
        </NavLink>
        <NavLink
          to={`/project/${projectId}/ci_cd`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          CI/CD
        </NavLink>
        <NavLink
          to={`/project/${projectId}/architectures`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Architectures
        </NavLink>
        <h2 className="px-3 py-1 text-lg text-sky-700 font-semibold border-b border-gray-300">
          <b>Updates</b>
        </h2>
        <NavLink
          to={`/project/${projectId}/update`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Update
        </NavLink>
        <NavLink
          to={`/project/${projectId}/help`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Help
        </NavLink>
        <NavLink
          to={`/project/${projectId}/settings`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Settings
        </NavLink>
        <h2 className="px-3 py-1 text-lg text-sky-700 font-semibold border-b border-gray-300">
          <b>Services</b>
        </h2>
        <NavLink
          to={`/project/${projectId}/details_S`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Details
        </NavLink>
        <NavLink
          to={`/project/${projectId}/subscription_S`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Subscription
        </NavLink>
        <h2 className="px-3 py-1 text-lg text-sky-700 font-semibold border-b border-gray-300">
          <b>Domains</b>
        </h2>
        <NavLink
          to={`/project/${projectId}/details_D`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Details
        </NavLink>
        <NavLink
          to={`/project/${projectId}/subscription_D`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Access
        </NavLink>
        <h2 className="px-3 py-1 text-lg text-sky-700 font-semibold border-b border-gray-300">
          <b>Mobile</b>
        </h2>

        <NavLink
          to={`/project/${projectId}/mobile_installation`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Installation
        </NavLink>
        <NavLink
          to={`/project/${projectId}/mobile_technologies`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Technologies
        </NavLink>
        <NavLink
          to={`/project/${projectId}/mobile_ci_cd`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          CI/CD
        </NavLink>
        <NavLink
          to={`/project/${projectId}/mobile_architectures`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Architectures
        </NavLink>
        <h2 className="px-3 py-1 text-lg text-sky-700 font-semibold border-b border-gray-300">
          <b>Web</b>
        </h2>

        <NavLink
          to={`/project/${projectId}/web_installation`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Installation
        </NavLink>
        <NavLink
          to={`/project/${projectId}/web_technologies`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Technologies
        </NavLink>
        <NavLink
          to={`/project/${projectId}/web_ci_cd`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          CI/CD
        </NavLink>
        <NavLink
          to={`/project/${projectId}/web_architectures`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Architectures
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
