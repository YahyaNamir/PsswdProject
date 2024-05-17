import React from 'react';

function TopMenu() {
  return (
    <div className="bg-slate-800 text-white px-4 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a href="/" className="text-xl font-bold">iwaclub</a>
      </div>
      
      <nav className="flex space-x-4">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/about" className="hover:text-gray-400">About</a>
        <a href="/services" className="hover:text-gray-400">Services</a>
        <a href="/contact" className="hover:text-gray-400">Contact</a>
      </nav>
      
      <div className="flex items-center space-x-4">
      </div>
    </div>
  );
}

export default TopMenu;
