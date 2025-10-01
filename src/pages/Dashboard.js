import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
const COLORS = {
    orders: "#34D399",
    carts: "#60A5FA",
    products: "#FBBF24",
};
const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    const [carts, setCarts] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeSection, setActiveSection] = useState(null);
    const token = localStorage.getItem("token");
    // Fetch Helpers
    const fetchOrders = async () => {
        if (!token)
            return;
        try {
            const res = await fetch("http://localhost:5000/api/order", {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            if (res.ok)
                setOrders(data.data || []);
        }
        catch (err) {
            console.error("Failed to fetch orders:", err);
        }
    };
    const fetchCarts = async () => {
        if (!token)
            return;
        try {
            const res = await fetch("http://localhost:5000/api/cart", {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            if (res.ok) {
                const validCarts = (data.data || []).filter((item) => item.productId);
                setCarts(validCarts);
            }
        }
        catch (err) {
            console.error("Failed to fetch carts:", err);
        }
    };
    const fetchProducts = async () => {
        if (!token)
            return;
        try {
            const res = await fetch("http://localhost:5000/api/products", {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            if (res.ok)
                setProducts(data.data || []);
        }
        catch (err) {
            console.error("Failed to fetch products:", err);
        }
    };
    useEffect(() => {
        if (token) {
            fetchOrders();
            fetchCarts();
            fetchProducts();
        }
    }, [token]);
    const pieData = [
        { name: "Orders", value: orders.length, color: COLORS.orders },
        { name: "Carts", value: carts.length, color: COLORS.carts },
        { name: "Products", value: products.length, color: COLORS.products },
    ];
    return (_jsxs("div", { className: "p-8", children: [_jsx("h1", { className: "text-3xl font-bold text-yellow-600 mb-6", children: "Admin Dashboard" }), !activeSection && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8", children: [_jsxs("div", { onClick: () => setActiveSection("orders"), className: "p-4 rounded shadow bg-green-100 cursor-pointer hover:bg-green-200", children: [_jsx("h2", { className: "text-lg font-bold text-green-700", children: "Orders" }), _jsx("p", { className: "text-2xl font-semibold", children: orders.length })] }), _jsxs("div", { onClick: () => setActiveSection("carts"), className: "p-4 rounded shadow bg-blue-100 cursor-pointer hover:bg-blue-200", children: [_jsx("h2", { className: "text-lg font-bold text-blue-700", children: "Carts" }), _jsx("p", { className: "text-2xl font-semibold", children: carts.length })] }), _jsxs("div", { onClick: () => setActiveSection("products"), className: "p-4 rounded shadow bg-yellow-100 cursor-pointer hover:bg-yellow-200", children: [_jsx("h2", { className: "text-lg font-bold text-yellow-700", children: "Products" }), _jsx("p", { className: "text-2xl font-semibold", children: products.length })] })] }), _jsx("div", { className: "w-full md:w-1/2 h-64 mb-8", children: _jsx(ResponsiveContainer, { children: _jsxs(PieChart, { children: [_jsx(Pie, { data: pieData, dataKey: "value", nameKey: "name", outerRadius: 80, label: true, children: pieData.map((entry, index) => (_jsx(Cell, { fill: entry.color }, `cell-${index}`))) }), _jsx(Tooltip, {})] }) }) })] })), activeSection && (_jsx("button", { onClick: () => setActiveSection(null), className: "mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400", children: "\u2190 Back to Dashboard" })), activeSection === "orders" && (_jsxs("div", { className: "overflow-x-auto mb-8", children: [_jsx("h2", { className: "text-xl font-bold text-green-700 mb-2", children: "Orders" }), _jsxs("table", { className: "min-w-full bg-white border border-gray-300", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-green-100", children: [_jsx("th", { className: "px-4 py-2 border", children: "Order ID" }), _jsx("th", { className: "px-4 py-2 border", children: "User" }), _jsx("th", { className: "px-4 py-2 border", children: "Total Price" }), _jsx("th", { className: "px-4 py-2 border", children: "Status" })] }) }), _jsx("tbody", { children: orders.map((order) => (_jsxs("tr", { children: [_jsx("td", { className: "px-4 py-2 border", children: order._id }), _jsx("td", { className: "px-4 py-2 border", children: order.userId?.name || "Deleted User" }), _jsxs("td", { className: "px-4 py-2 border", children: ["$", order.totalPrice] }), _jsx("td", { className: "px-4 py-2 border", children: order.status })] }, order._id))) })] })] })), activeSection === "carts" && (_jsxs("div", { className: "overflow-x-auto mb-8", children: [_jsx("h2", { className: "text-xl font-bold text-blue-700 mb-2", children: "Carts" }), _jsxs("table", { className: "min-w-full bg-white border border-gray-300", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-blue-100", children: [_jsx("th", { className: "px-4 py-2 border", children: "Cart ID" }), _jsx("th", { className: "px-4 py-2 border", children: "User" }), _jsx("th", { className: "px-4 py-2 border", children: "Product" }), _jsx("th", { className: "px-4 py-2 border", children: "Quantity" })] }) }), _jsx("tbody", { children: carts.map((cart) => (_jsxs("tr", { children: [_jsx("td", { className: "px-4 py-2 border", children: cart._id }), _jsx("td", { className: "px-4 py-2 border", children: cart.userId?.name }), _jsx("td", { className: "px-4 py-2 border", children: cart.productId?.name || "Deleted Product" }), _jsx("td", { className: "px-4 py-2 border", children: cart.quantity })] }, cart._id))) })] })] })), activeSection === "products" && (_jsxs("div", { className: "overflow-x-auto mb-8", children: [_jsx("h2", { className: "text-xl font-bold text-yellow-700 mb-2", children: "Products" }), _jsxs("table", { className: "min-w-full bg-white border border-gray-300", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-yellow-100", children: [_jsx("th", { className: "px-4 py-2 border", children: "Product ID" }), _jsx("th", { className: "px-4 py-2 border", children: "Name" }), _jsx("th", { className: "px-4 py-2 border", children: "Price" }), _jsx("th", { className: "px-4 py-2 border", children: "Quantity" })] }) }), _jsx("tbody", { children: products.map((product) => (_jsxs("tr", { children: [_jsx("td", { className: "px-4 py-2 border", children: product._id }), _jsx("td", { className: "px-4 py-2 border", children: product.name }), _jsxs("td", { className: "px-4 py-2 border", children: ["$", product.price] }), _jsx("td", { className: "px-4 py-2 border", children: product.quantity })] }, product._id))) })] })] }))] }));
};
export default Dashboard;
