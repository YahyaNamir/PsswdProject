import React from "react";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Sidebar = () => {
  return (
    <div className="overflow-y-auto h-screen w-50 bg-gray-100 text-gray-900 flex flex-col border-r border-gray-300">
      <nav className="flex-1 p-4 space-y-2">
        <h2 className="px-3 py-1 text-lg text-gray-800 font-semibold border-b border-gray-300">
          Getting Started
        </h2>
        <Link
          to="/introduction"
          onClick={scrollToTop}
          className="block py-1 px-3 rounded hover:bg-gray-300"
        >
          Introduction
        </Link>
        <Link
          to="/cdc"
          onClick={scrollToTop}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          CDC
        </Link>
        <Link
          to="/installation"
          onClick={scrollToTop}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Installation
        </Link>
        <Link
          to="/technologies"
          onClick={scrollToTop}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Technologies
        </Link>
        <Link
          to="/ci_cd"
          onClick={scrollToTop}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          CI/CD
        </Link>
        <Link
          to="/architectures"
          onClick={scrollToTop}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Architectures
        </Link>
        <h2 className="px-3 py-1 text-lg text-gray-800 font-semibold border-b border-gray-300">
          Architectures
        </h2>
        <Link
          to="/update"
          onClick={scrollToTop}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Update
        </Link>
        <Link
          to="/help"
          onClick={scrollToTop}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Help
        </Link>
        <Link
          to="/settings"
          onClick={scrollToTop}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Settings
        </Link>
        <h2 className="px-3 py-1 text-lg text-gray-800 font-semibold border-b border-gray-300">
          Services
        </h2>
        <Link
          to="/details_S"
          onClick={scrollToTop}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Details
        </Link>
        <Link
          to="/subscription_S"
          onClick={scrollToTop}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Subscription
        </Link>
        <Link
          to="/logout_S"
          onClick={scrollToTop}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Logout
        </Link>
        <h2 className="px-3 py-1 text-lg text-gray-800 font-semibold border-b border-gray-300">
          Domains
        </h2>
        <Link
          to="/details_D"
          onClick={scrollToTop}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Details
        </Link>
        <Link
          to="/subscription_D"
          onClick={scrollToTop}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Subscription
        </Link>
        <Link
          to="/logout_D"
          onClick={scrollToTop}
          className="block py-2 px-3 rounded hover:bg-gray-300"
        >
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
