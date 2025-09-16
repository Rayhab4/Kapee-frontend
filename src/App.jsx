import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./DashboardComponents/SideBar";
import Navbar from "./DashboardComponents/Dashboardnavbar";
import Dashboard from "./DashboardComponents/Dashboard";
// import Transactions from "./Pages/Transactions"; 
// import Sales from "./Pages/Sales";
// import Products from "./Pages/Products";
// import Members from "./Pages/Members";
// import Reports from "./Pages/Reports";
import SidebarDashboard from "./DashboardComponents/SideBar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/transactions" element={<Transactions />} /> */}
            {/* <Route path="/sales" element={<Sales />} /> */}
            {/* <Route path="/products" element={<Products />} /> */}
            {/* <Route path="/members" element={<Members />} /> */}
            {/* <Route path="/reports" element={<Reports />} /> */}
            <Route path="/sidebar" element={<SidebarDashboard/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
