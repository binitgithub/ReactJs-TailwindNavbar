import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faFileInvoice } from '@fortawesome/free-solid-svg-icons';

const Sidebars = ({ isOpen }) => {
  return (
    <div className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 ${isOpen ? 'block' : 'hidden'} md:block`}>
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <nav>
        <ul>
          <li className="flex items-center py-2">
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span className="ml-2">Analytics</span>
          </li>
          <li className="flex items-center py-2">
            <FontAwesomeIcon icon={faUsers} />
            <span className="ml-2">Accounts</span>
          </li>
          <li className="flex items-center py-2">
            <FontAwesomeIcon icon={faFileInvoice} />
            <span className="ml-2">Invoices</span>
          </li>
          {/* Add more items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebars;
