import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`h-screen bg-gray-800 text-white w-64 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 ease-in-out`}>
        {/* Logo */}
        <h1 className="text-3xl font-semibold text-center mb-10">
          <i className="fas fa-layer-group mr-2"></i>
          Brand
        </h1>
        {/* Nav items */}
        <nav className="space-y-4">
          <a href="#" className="flex items-center py-2 px-4 text-white rounded hover:bg-gray-600">
            <i className="fas fa-home mr-3"></i>
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-white rounded hover:bg-gray-600">
            <i className="fas fa-user mr-3"></i>
            <span>Profile</span>
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-white rounded hover:bg-gray-600">
            <i className="fas fa-cog mr-3"></i>
            <span>Settings</span>
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-white rounded hover:bg-gray-600">
            <i className="fas fa-sign-out-alt mr-3"></i>
            <span>Logout</span>
          </a>
        </nav>
      </div>

      {/* Toggle Button */}
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-4 focus:outline-none focus:bg-gray-100"
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} fa-lg`}></i>
        </button>
      </div>

      {/* Main content */}
      <div className="flex-grow p-8">
        <h2 className="text-2xl font-semibold">Main Content Area</h2>
        <p>
          This is where your page content will go. You can integrate this sidebar
          component into a larger layout as needed.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
