import React from "react";
import { Link } from "react-router-dom";

const SidebarDashboard = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <div className="text-lg font-bold mb-6">My Dashboard</div>
      <nav className="flex-1">
        <ul className="space-y-3">
          <li><Link to="/dashboard">🏠 Dashboard</Link></li>
          <li><Link to="/transactions">💳 Transactions</Link></li>
          <li><Link to="/sales">📈 Sales</Link></li>
          <li><Link to="/products">📦 Products</Link></li>
          <li><Link to="/members">👥 Members</Link></li>
          <li><Link to="/reports">📊 Reports</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarDashboard;
