import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 z-20`}
      >
        <div className="p-4 text-2xl font-bold flex justify-between items-center">
          <span>Menu</span>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <ul className="mt-10 space-y-6">
          <li className="px-4 py-2 hover:bg-gray-700">
            <FontAwesomeIcon icon={faHome} className="mr-3" />
            <span>Home</span>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <FontAwesomeIcon icon={faUser} className="mr-3" />
            <span>Profile</span>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <FontAwesomeIcon icon={faCog} className="mr-3" />
            <span>Settings</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-100">
        {/* Navbar */}
        <div className="flex items-center justify-between bg-gray-800 text-white p-4">
          <button onClick={toggleSidebar} className="text-white text-2xl focus:outline-none">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold">Welcome to your Dashboard!</h2>
          <p className="mt-4 text-gray-700">This is a demo layout with a sidebar navigation.</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
