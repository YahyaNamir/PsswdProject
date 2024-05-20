import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ projectId, setProjectSelected }) => {
  const navigate = useNavigate();
  const [showLog, setShowLog] = useState(false);

  const logOut = () => {
    setProjectSelected(null);
    localStorage.removeItem("projectSelected");
    navigate("/");
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setShowLog(true);
  };

  return (
    <div className="overflow-y-auto h-screen w-64 bg-gray-100 text-gray-900 flex flex-col border-r border-gray-300">
      <div className="p-4 border-b border-gray-300">
        <h1 className="text-xl font-bold text-gray-800 ">IWACO</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <h2 className="px-3 py-1 text-lg text-gray-800 font-semibold border-b border-gray-300">
          Getting Started
        </h2>
        <Link
          to={`/project/${projectId}/introduction`}
          className="block py-1 px-3 rounded hover:bg-gray-300"
        >
          Introduction
        </Link>
        <Link
          to={`/project/${projectId}/Cdc`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          CDC
        </Link>
        <Link
          to={`/project/${projectId}/installation`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Installation
        </Link>
        <Link
          to={`/project/${projectId}/technologies`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Technologies
        </Link>
        <Link
          to={`/project/${projectId}/ci_cd`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          CI/CD
        </Link>
        <Link
          to={`/project/${projectId}/architectures`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Architectures
        </Link>
        <h2 className="px-3 py-1 text-lg text-gray-800 font-semibold border-b border-gray-300">
          Architectures
        </h2>
        <Link
          to={`/project/${projectId}/update`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Update
        </Link>
        <Link
          to={`/project/${projectId}/help`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Help
        </Link>
        <Link
          to={`/project/${projectId}/settings`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Settings
        </Link>
        <h2 className="px-3 py-1 text-lg text-gray-800 font-semibold border-b border-gray-300">
          Services
        </h2>
        <Link
          to={`/project/${projectId}/details_S`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Details
        </Link>
        <Link
          to={`/project/${projectId}/subscription_S`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Subscription
        </Link>
        <a
          href="/"
          className="block py-2 px-3 rounded hover:bg-gray-300"
          onClick={handleLogoutClick}
        >
          Logout
        </a>
        <h2 className="px-3 py-1 text-lg text-gray-800 font-semibold border-b border-gray-300">
          Domains
        </h2>
        <Link
          to={`/project/${projectId}/details_D`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Details
        </Link>
        <Link
          to={`/project/${projectId}/subscription_D`}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Subscription
        </Link>
        <a
          href="/"
          className="block py-2 px-3 rounded hover:bg-gray-300"
          onClick={handleLogoutClick}
        >
          Logout
        </a>
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
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-400 "
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
