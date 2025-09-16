import React from "react";

const Dashboardnavbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-2 rounded-md"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Search</button>
      </div>
      <div className="flex items-center gap-4">
        <span>🔔</span>
        <span>🇺🇸 ENG</span>
        <div className="flex items-center gap-2">
          <img src="https://i.pravatar.cc/30" alt="user" className="w-8 h-8 rounded-full"/>
          <span>Richard</span>
        </div>
      </div>
    </header>
  );
};

export default Dashboardnavbar;
