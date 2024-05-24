import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
        <h1 className="text-2xl font-bold text bg-clip-text text-transparent bg-gradient-to-r from-stone-900 to-blue-200">
          IWACO
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <h2 className="px-3 py-1 text-lg text-gray-800 font-semibold border-b border-gray-300">
          <b>Getting Started</b>
        </h2>
        <NavLink
          to={`/project/${projectId}/introduction`}
          className="block py-2 px-3 rounded hover:bg-gray-300 "
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
        <h2 className="px-3 py-1 text-lg text-gray-800 font-semibold border-b border-gray-300">
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
        <h2 className="px-3 py-1 text-lg text-gray-800 font-semibold border-b border-gray-300">
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
        {/* <a
          href="/"
          className="block py-2 px-3 rounded hover:bg-gray-300"
          onClick={handleLogoutClick}
        >
          Logout
        </a> */}
        <h2 className="px-3 py-1 text-lg text-gray-800 font-semibold border-b border-gray-300">
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
          Subscription
        </NavLink>
      </nav>

      {showLog && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-800 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10">
            <h2 className="text-xl font-semibold mb-4">Confirm Logout</h2>
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowLog(false)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={logOut}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
