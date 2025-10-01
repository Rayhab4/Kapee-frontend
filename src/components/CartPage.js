import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/CartPage.tsx
import { useEffect, useState } from "react";
const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchCartItems = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/cart"); // your cart route
            if (!res.ok)
                throw new Error("Failed to fetch cart items");
            const data = await res.json();
            setCartItems(data);
        }
        catch (err) {
            console.error(err);
            alert("Error fetching cart items");
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchCartItems();
    }, []);
    const handleRemove = async (id) => {
        if (!window.confirm("Remove this item from cart?"))
            return;
        try {
            const res = await fetch(`http://localhost:5000/api/cart/${id}`, {
                method: "DELETE",
            });
            if (!res.ok)
                throw new Error("Failed to remove item");
            setCartItems(cartItems.filter((item) => item._id !== id));
        }
        catch (err) {
            console.error(err);
            alert("Could not remove item");
        }
    };
    const totalPrice = cartItems.reduce((total, item) => total + item.productId.price * item.quantity, 0);
    if (loading)
        return _jsx("p", { children: "Loading cart..." });
    return (_jsxs("div", { className: "p-6 bg-gray-50 min-h-screen", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Your Cart" }), cartItems.length === 0 ? (_jsx("p", { className: "text-gray-500", children: "Your cart is empty." })) : (_jsxs("div", { className: "space-y-4", children: [cartItems.map((item) => (_jsxs("div", { className: "flex items-center justify-between bg-white p-4 rounded shadow", children: [_jsxs("div", { className: "flex items-center gap-4", children: [item.productId.imageUrl && (_jsx("img", { src: item.productId.imageUrl, alt: item.productId.name, className: "w-20 h-20 object-cover rounded" })), _jsxs("div", { children: [_jsx("h3", { className: "font-bold", children: item.productId.name }), _jsxs("p", { children: ["Quantity: ", item.quantity] }), _jsxs("p", { children: ["Price: $", item.productId.price] })] })] }), _jsx("button", { onClick: () => handleRemove(item._id), className: "px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600", children: "Remove" })] }, item._id))), _jsxs("div", { className: "text-right font-bold text-lg", children: ["Total: $", totalPrice.toFixed(2)] })] }))] }));
};
export default CartPage;
