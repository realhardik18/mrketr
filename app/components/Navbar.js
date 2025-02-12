import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#111] text-white rounded-full shadow-md">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" className="w-8 h-8" />
      </div>
      <div className="flex items-center space-x-6 text-gray-400">
        <a href="#" className="text-white font-medium">Home</a>
        <a href="#" className="hover:text-white">Open positions</a>
        <a href="#" className="hover:text-white">Portfolio</a>
        <a href="#" className="hover:text-white">Company</a>
      </div>
    </nav>
  );
};

export default Navbar;
