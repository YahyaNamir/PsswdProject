import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

function RightSideMenu() {
  return (
    <div className="fixed top-0 right-0 h-full w-16 bg-slate-800 text-white flex flex-col items-center py-4 space-y-4">
      <FontAwesomeIcon icon={faBell} className="text-xl hover:text-gray-400 cursor-pointer" />
      <FontAwesomeIcon icon={faEnvelope} className="text-xl hover:text-gray-400 cursor-pointer" />
      <FontAwesomeIcon icon={faUser} className="text-xl hover:text-gray-400 cursor-pointer" />
      <FontAwesomeIcon icon={faCog} className="text-xl hover:text-gray-400 cursor-pointer" />
    </div>
  );
}

export default RightSideMenu;
