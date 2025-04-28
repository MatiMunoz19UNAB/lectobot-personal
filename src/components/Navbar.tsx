import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md fixed w-full z-10">
      <div className="text-2xl font-bold text-blue-600">Lectobot</div>
      <div className="flex items-center gap-6">
        <button className="text-gray-700 hover:text-blue-600">Nosotros</button>
        <button className="text-gray-700 hover:text-blue-600">Tutorial</button>
        <button className="text-gray-700 hover:text-blue-600">Versiones</button>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          JUGAR
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
