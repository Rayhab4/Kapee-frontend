import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = () => {
    return (_jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx(Navbar, {}), _jsx("main", { className: "flex-grow", children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
};
export default Layout;
