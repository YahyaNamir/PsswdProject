import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

function RightSideMenu({ setProjectSelected }) {
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
    <div className="fixed top-0 right-0 h-full w-16 bg-slate-700   text-white flex flex-col items-center py-4 space-y-4">
      <FontAwesomeIcon
        icon={faEnvelope}
        className="text-xl hover:text-gray-400 cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faUser}
        className="text-xl hover:text-gray-400 cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faCog}
        className="text-xl hover:text-gray-400 cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faSignOutAlt}
        className="text-xl text-red-900 hover:text-red-400 cursor-pointer mt-auto"
        onClick={handleLogoutClick}
      />

      {showLog && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-200 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Confirm Logout
            </h2>
            <p className="mb-4 text-black">Are you sure you want to log out?</p>
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
}

export default RightSideMenu;
