import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faChartLine, faCog } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <aside className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faCog} />
        </button>
        <nav>
          <a href="#" className="flex items-center p-2 text-sm font-medium text-gray-200 hover:bg-gray-700">
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
            Dashboard
          </a>
          <a href="#" className="flex items-center p-2 text-sm font-medium text-gray-200 hover:bg-gray-700">
            <FontAwesomeIcon icon={faUser} className="mr-3" />
            Contacts
          </a>
          <a href="#" className="flex items-center p-2 text-sm font-medium text-gray-200 hover:bg-gray-700">
            <FontAwesomeIcon icon={faChartLine} className="mr-3" />
            Analytics
          </a>
          {/* Add more navigation items as needed */}
        </nav>
      </aside>

      <div className="flex-1 p-10">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        {/* Add dashboard content here */}
      </div>

      <button onClick={toggleSidebar} className="md:hidden p-2 bg-gray-700 text-white">
        Toggle Sidebar
      </button>
    </div>
  );
};

export default Dashboard;
