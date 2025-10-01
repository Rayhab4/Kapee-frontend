import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import axios from "axios";
const OrdersTable = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:5000/api/order", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setOrders(response.data.data);
            }
            catch (error) {
                console.error("Failed to fetch orders:", error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);
    if (loading)
        return _jsx("p", { children: "Loading orders..." });
    return (_jsx("div", { className: "overflow-x-auto mt-6", children: _jsxs("table", { className: "min-w-full border border-gray-200 rounded-lg", children: [_jsx("thead", { className: "bg-green-500 text-white", children: _jsxs("tr", { children: [_jsx("th", { className: "px-4 py-2 text-left", children: "Order ID" }), _jsx("th", { className: "px-4 py-2 text-left", children: "Users" }), _jsx("th", { className: "px-4 py-2 text-left", children: "Items" }), _jsx("th", { className: "px-4 py-2 text-left", children: "Total" }), _jsx("th", { className: "px-4 py-2 text-left", children: "Status" }), _jsx("th", { className: "px-4 py-2 text-left", children: "Date" })] }) }), _jsx("tbody", { children: orders.map((order) => (_jsxs("tr", { className: "border-b border-gray-200 hover:bg-gray-50", children: [_jsx("td", { className: "px-4 py-2", children: order._id }), _jsxs("td", { className: "px-4 py-2", children: [order.userId.name, " (", order.userId.email, ")"] }), _jsx("td", { className: "px-4 py-2", children: order.items.map((item, index) => (_jsxs("div", { children: [item.productId.name, " x ", item.quantity, " ($", item.priceAtPurchase, ")"] }, index))) }), _jsxs("td", { className: "px-4 py-2 font-bold", children: ["$", order.totalPrice] }), _jsx("td", { className: `px-4 py-2 font-semibold ${order.status === "completed" ? "text-green-600" :
                                    order.status === "pending" ? "text-yellow-600" :
                                        "text-red-600"}`, children: order.status }), _jsx("td", { className: "px-4 py-2", children: new Date(order.createdAt).toLocaleDateString() })] }, order._id))) })] }) }));
};
export default OrdersTable;
