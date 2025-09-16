import {Outlet} from "react-router-dom";
import SidebarDashboard from "./SideBar";
import DashboardNavbar from "./Dashboardnavbar";
import Dashboard from "./Dashboard";
function DashboardLayout(){

    return(
        <div className="flex">
      {/* Sidebar on the left */}
      <SidebarDashboard />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <DashboardNavbar />

        {/* Page Content */}
        <main className="p-6 bg-gray-100 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
    )
    
}
export default DashboardLayout;