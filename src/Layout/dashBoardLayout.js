import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Sidebar from "../DashboardComponents/SideBar";
import Header from "../DashboardComponents/Header";
export default function DLayout() {
    return (_jsxs("div", { className: "flex h-screen", children: [_jsx(Sidebar, {}), _jsxs("div", { className: "flex flex-col flex-1 overflow-auto", children: [_jsx(Header, {}), _jsx("div", { className: "flex-1 p-6 bg-gray-50", children: _jsx(Outlet, {}) })] })] }));
}
