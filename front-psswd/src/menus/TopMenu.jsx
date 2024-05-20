import React from "react";
import { useParams } from "react-router-dom";
function TopMenu() {
  const { projectId } = useParams();
  return (<></>
    // <div className="bg-slate-800 text-white px-4 py-2 flex justify-between items-center">
    //   <div className="flex items-center space-x-4">
    //     <a href="/" className="text-xl font-bold hover:text-gray-400">
    //       iwaclub
    //     </a>
    //   </div>

    //   <nav className="flex space-x-4">
    //     <a href="/" className="hover:text-gray-400">
    //       Home
    //     </a>
    //     <a href="/about" className="hover:text-gray-400">
    //       About
    //     </a>
    //     <a href="/services" className="hover:text-gray-400">
    //       Services
    //     </a>
    //     <a href="/contact" className="hover:text-gray-400">
    //       Contact
    //     </a>
    //   </nav>

    //   <div className="flex items-center space-x-4"></div>
    // </div>
  );
}

export default TopMenu;
