import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import { Home, Box, Users, BarChart2, Percent, Settings, ShoppingCart, CreditCard } from "lucide-react";
const menuItems = [
    { label: "Dashboard", icon: _jsx(Home, {}), path: "/dashboard" },
    { label: "Products", icon: _jsx(Box, {}), path: "/dashboard/products" },
    { label: "Users", icon: _jsx(Users, {}), path: "/dashboard/users" },
    { label: "Reports", icon: _jsx(BarChart2, {}), path: "/dashboard/reports" },
    { label: "Cart", icon: _jsx(ShoppingCart, {}), path: "/dashboard/cart" }, // Admin Cart
    { label: "Orders", icon: _jsx(CreditCard, {}), path: "/dashboard/orders" }, // Admin Orders
    { label: "Discounts", icon: _jsx(Percent, {}), path: "/dashboard/discounts" },
    { label: "Settings", icon: _jsx(Settings, {}), path: "/dashboard/settings" },
];
const DashboardSidebar = () => {
    return (_jsxs("aside", { className: "w-64 bg-white border-r border-gray-200 h-screen p-6 flex flex-col", children: [_jsx("h2", { className: "text-2xl font-bold mb-8", children: "Admin Panel" }), _jsx("nav", { className: "flex flex-col gap-2", children: menuItems.map((item) => (_jsxs(NavLink, { to: item.path, className: ({ isActive }) => `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition ${isActive ? "bg-gray-200 font-bold" : ""}`, children: [item.icon, _jsx("span", { children: item.label })] }, item.label))) })] }));
};
export default DashboardSidebar;
