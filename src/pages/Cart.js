import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    // Fetch cart items
    const fetchCartItems = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please login first to view your cart.");
            navigate("/login");
            return;
        }
        try {
            const res = await fetch("http://localhost:5000/api/cart", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!res.ok) {
                if (res.status === 401) {
                    localStorage.removeItem("token");
                    alert("Session expired, please login again.");
                    navigate("/login");
                }
                else {
                    const errorData = await res.json().catch(() => ({}));
                    throw new Error(errorData.message || "Failed to fetch cart items");
                }
                return;
            }
            const data = await res.json();
            setCartItems(data.data || []);
        }
        catch (err) {
            console.error("Cart fetch error:", err);
            alert(err.message || "Failed to fetch cart items");
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchCartItems();
    }, []);
    // Update quantity
    const updateQuantity = async (itemId, newQuantity) => {
        if (newQuantity < 1)
            return; // avoid 0 or negative
        const token = localStorage.getItem("token");
        try {
            const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ quantity: newQuantity }),
            });
            const data = await res.json();
            if (!res.ok)
                throw new Error(data.message || "Failed to update quantity");
            fetchCartItems();
        }
        catch (err) {
            console.error("Update quantity failed:", err);
            alert(err.message);
        }
    };
    // Remove item
    const removeItem = async (itemId) => {
        const token = localStorage.getItem("token");
        try {
            const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            if (!res.ok)
                throw new Error(data.message || "Failed to remove item");
            fetchCartItems();
        }
        catch (err) {
            console.error("Remove item failed:", err);
            alert(err.message);
        }
    };
    // Checkout all items in cart
    const handleCheckout = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please login first to place an order.");
            navigate("/login");
            return;
        }
        try {
            const res = await fetch("http://localhost:5000/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            if (!res.ok)
                throw new Error(data.message || "Failed to place order");
            alert(data.message || "Order placed successfully!");
            fetchCartItems(); // refresh cart (should now be empty)
            navigate("/orders"); // go to orders page
        }
        catch (err) {
            console.error("Checkout failed:", err);
            alert(err.message || "Failed to place order");
        }
    };
    if (loading)
        return _jsx("p", { className: "text-center mt-10", children: "Loading cart..." });
    if (cartItems.length === 0)
        return _jsx("p", { className: "text-center mt-10", children: "Your cart is empty." });
    const totalPrice = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    return (_jsxs("div", { className: "max-w-5xl mx-auto px-6 py-12", children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: "My Cart" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: cartItems.map((item) => (_jsxs("div", { className: "border rounded-lg shadow-md p-4 flex flex-col items-center bg-white", children: [_jsx("img", { src: item.product.imageUrl, alt: item.product.name, className: "w-48 h-48 object-contain rounded-lg mb-4" }), _jsx("h2", { className: "font-bold text-lg mb-2", children: item.product.name }), _jsxs("p", { className: "text-gray-700 mb-2", children: ["Price: $", item.product.price] }), _jsxs("div", { className: "flex items-center space-x-2 mb-4", children: [_jsx("button", { onClick: () => updateQuantity(item._id, item.quantity - 1), className: "px-2 py-1 bg-gray-300 rounded", children: "-" }), _jsx("span", { children: item.quantity }), _jsx("button", { onClick: () => updateQuantity(item._id, item.quantity + 1), className: "px-2 py-1 bg-gray-300 rounded", children: "+" })] }), _jsxs("p", { className: "font-semibold mb-2", children: ["Subtotal: $", item.product.price * item.quantity] }), _jsx("button", { onClick: () => removeItem(item._id), className: "bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition", children: "Remove" })] }, item._id))) }), _jsxs("div", { className: "mt-8 flex justify-between items-center", children: [_jsxs("p", { className: "text-xl font-bold", children: ["Total: $", totalPrice] }), _jsx("button", { onClick: handleCheckout, className: "bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition", children: "Checkout All Items" })] })] }));
};
export default CartPage;
