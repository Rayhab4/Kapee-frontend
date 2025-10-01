
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";  
import Footer from "../components/Footer"; 



const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
