import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layout & Pages
import Layout from "./Layout/Layout";
import DLayout from "./Layout/dashBoardLayout";
import WelcomePage from "./components/WelcomePage";
import BestSellingProducts from "./components/BestSellProduct";
import About from "./components/Aboutus";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import LoginPage from "./components/loginPage";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Orders from "./pages/Orders";
import Discounts from "./pages/Discounts";
import Settings from "./pages/Settings";
import Integration from "./pages/Intergration";
import CartPage from "./components/CartPage";
import ProductPage from "./components/ProductPage";
import RegistrationForm from "./components/RegistrationForm";
const App = () => {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsxs(Route, { path: "/", element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(WelcomePage, {}) }), _jsx(Route, { path: "best-products", element: _jsx(BestSellingProducts, {}) }), _jsx(Route, { path: "about", element: _jsx(About, {}) }), _jsx(Route, { path: "faq", element: _jsx(FAQ, {}) }), _jsx(Route, { path: "services", element: _jsx(BestSellingProducts, {}) }), _jsx(Route, { path: "shop", element: _jsx(BestSellingProducts, {}) }), _jsx(Route, { path: "login", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "signup", element: _jsx(RegistrationForm, {}) }), _jsx(Route, { path: "contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "product/:id", element: _jsx(ProductPage, {}) }), _jsx(Route, { path: "*", element: _jsx(WelcomePage, {}) })] }), _jsxs(Route, { path: "/dashboard", element: _jsx(DLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "Users", element: _jsx(Users, {}) }), _jsx(Route, { path: "products", element: _jsx(Products, {}) }), _jsx(Route, { path: "reports", element: _jsx(Reports, {}) }), _jsx(Route, { path: "orders", element: _jsx(Orders, {}) }), _jsx(Route, { path: "cart", element: _jsx(CartPage, {}) }), _jsx(Route, { path: "discounts", element: _jsx(Discounts, {}) }), _jsx(Route, { path: "settings", element: _jsx(Settings, {}) }), _jsx(Route, { path: "integration", element: _jsx(Integration, {}) })] })] }) }));
};
export default App;
