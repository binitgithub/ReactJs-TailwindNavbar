import React, { useState } from 'react';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo */}
        <div className="flex items-center">
          <img src="zohologo.png" alt="Logo" className="h-10 w-20 mr-2" />
        </div>

        {/* Center: Dropdown - Hidden on small screens */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Billing & Payments
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Usage
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Account
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Outages
          </a>

          {/* Dropdown for Services */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              Services
            </button>
            {servicesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg">
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-600"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-600"
                >
                  Service 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-600"
                >
                  Service 3
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right side: Search, Settings, Profile, Menu */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative text-gray-400">
            <input
              type="text"
              className="bg-gray-700 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
              />
            </svg>
          </div>

          {/* Settings */}
          <button className="text-white hover:text-gray-300 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a9.034 9.034 0 016.364 2.636A9.034 9.034 0 0121 12.001a9.034 9.034 0 01-2.636 6.364A9.034 9.034 0 0112 21a9.034 9.034 0 01-6.364-2.636A9.034 9.034 0 013 12.001a9.034 9.034 0 012.636-6.364A9.034 9.034 0 0112 4.354z"
              />
            </svg>
          </button>

          {/* Profile */}
          <div className="relative">
            <img
              src="profile.png"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 mt-2 p-4 rounded-md">
          <a href="#" className="block text-white py-2 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="block text-white py-2 hover:text-gray-300">
            Billing & Payments
          </a>
          <a href="#" className="block text-white py-2 hover:text-gray-300">
            Usage
          </a>
          <a href="#" className="block text-white py-2 hover:text-gray-300">
            Account
          </a>
          <a href="#" className="block text-white py-2 hover:text-gray-300">
            Outages
          </a>

          {/* Services Dropdown in Mobile */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="block text-white py-2 w-full text-left hover:text-gray-300"
            >
              Services
            </button>
            {servicesDropdownOpen && (
              <div className="bg-gray-600 rounded-md mt-2">
                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-500">
                  Service 1
                </a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-500">
                  Service 2
                </a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-gray-500">
                  Service 3
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
