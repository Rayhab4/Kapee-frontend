import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product, onAddToCart, onViewDetails, }) => {
    const [quantity, setQuantity] = useState(1);
    const increaseQty = () => setQuantity((prev) => prev + 1);
    const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    return (_jsxs("div", { className: "border rounded-lg shadow-md p-4 flex flex-col items-center bg-white", children: [_jsx("img", { src: product.imageUrl, alt: product.name, className: "w-48 h-48 object-contain rounded-lg mb-4" }), _jsx("h2", { className: "font-bold text-lg mb-2", children: product.name }), _jsxs("p", { className: "text-gray-700 mb-2", children: ["$", product.price] }), _jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx("button", { onClick: decreaseQty, className: "px-2 py-1 bg-gray-300 rounded hover:bg-gray-400", children: "\u2212" }), _jsx("span", { className: "px-3 font-semibold", children: quantity }), _jsx("button", { onClick: increaseQty, className: "px-2 py-1 bg-gray-300 rounded hover:bg-gray-400", children: "+" })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { onClick: () => onAddToCart(product, quantity), className: "bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition", children: "Add to Cart" }), onViewDetails && (_jsx("button", { onClick: () => onViewDetails(product), className: "bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition", children: "View Details" }))] })] }));
};
const WelcomePage = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showOrderReview, setShowOrderReview] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    // 🔹 Fetch Products & Cart
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/products", {
                    headers: token ? { Authorization: `Bearer ${token}` } : {},
                });
                const data = await res.json();
                setProducts(data.data || []);
            }
            catch (err) {
                console.error("Failed to fetch products:", err);
            }
        };
        const fetchCart = async () => {
            if (!token)
                return;
            try {
                const res = await fetch("http://localhost:5000/api/cart", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await res.json();
                setCart(data.data || []);
            }
            catch {
                setCart([]);
            }
        };
        fetchProducts();
        fetchCart();
    }, [token]);
    // 🔹 Add to Cart
    const handleAddToCart = async (product, quantity) => {
        if (!token) {
            alert("Please login first.");
            navigate("/login");
            return;
        }
        try {
            const res = await fetch("http://localhost:5000/api/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ items: [{ productId: product._id, quantity }] }),
            });
            const data = await res.json();
            if (!res.ok)
                throw new Error(data.message || "Failed to add to cart");
            alert(data.message || "Added to cart!");
            // Update frontend cart state
            setCart((prevCart) => {
                const existingIndex = prevCart.findIndex((item) => item.productId?._id === product._id);
                if (existingIndex !== -1) {
                    const updatedCart = [...prevCart];
                    const existingItem = updatedCart[existingIndex];
                    updatedCart[existingIndex] = {
                        ...existingItem,
                        quantity: existingItem.quantity + quantity,
                    };
                    return updatedCart;
                }
                else {
                    return [...prevCart, { _id: new Date().toISOString(), productId: product, quantity }];
                }
            });
        }
        catch (err) {
            alert(err.message || "Failed to add to cart");
        }
    };
    // 🔹 Place Order
    const handlePlaceOrder = async () => {
        if (!token) {
            alert("Please login first.");
            navigate("/login");
            return;
        }
        // Filter out deleted/invalid products
        const validCartItems = cart.filter((item) => item.productId?._id);
        if (!validCartItems.length) {
            alert("No valid products in cart to place order.");
            return;
        }
        try {
            const res = await fetch("http://localhost:5000/api/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    items: validCartItems.map((item) => ({
                        productId: item.productId._id,
                        quantity: item.quantity,
                    })),
                }),
            });
            const data = await res.json();
            if (!res.ok)
                throw new Error(data.message || "Failed to place order");
            alert(data.message || "Order placed successfully!");
            setCart([]); // clear cart
            setShowOrderReview(false);
        }
        catch (err) {
            alert(err.message || "Failed to place order");
        }
    };
    return (_jsxs("div", { className: "bg-gray-50 min-h-screen", children: [_jsxs("section", { className: "max-w-7xl mx-auto px-6 py-12", children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: "Featured Products" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: products.map((product) => (_jsx(ProductCard, { product: product, onAddToCart: handleAddToCart, onViewDetails: setSelectedProduct }, product._id))) })] }), cart.length > 0 && (_jsx("div", { className: "fixed bottom-6 right-6", children: _jsxs("button", { onClick: () => setShowOrderReview(true), className: "bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition", children: ["Checkout & Place Order (", cart.length, ")"] }) })), showOrderReview && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: _jsxs("div", { className: "bg-white p-6 rounded-2xl w-96 relative", children: [_jsx("button", { onClick: () => setShowOrderReview(false), className: "absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold text-lg", children: "\u00D7" }), _jsx("h2", { className: "text-xl font-bold mb-4", children: "Order Review" }), _jsx("div", { className: "space-y-2 max-h-64 overflow-y-auto", children: cart.map((item, idx) => item.productId && (_jsxs("div", { className: "flex justify-between border-b py-2", children: [_jsxs("span", { children: [item.productId.name, " x ", item.quantity] }), _jsxs("span", { children: ["$", item.productId.price * item.quantity] })] }, idx))) }), _jsx("button", { onClick: handlePlaceOrder, className: "mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition", children: "Place Order" })] }) })), selectedProduct && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: _jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-6 w-96 relative", children: [_jsx("button", { onClick: () => setSelectedProduct(null), className: "absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold text-lg", children: "\u00D7" }), _jsx("h2", { className: "text-xl font-bold mb-4", children: selectedProduct.name }), _jsx("img", { src: selectedProduct.imageUrl, alt: selectedProduct.name, className: "w-56 h-56 object-contain mx-auto mb-4" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("p", { children: [_jsx("strong", { children: "Description:" }), " ", selectedProduct.description] }), _jsxs("p", { children: [_jsx("strong", { children: "Category:" }), " ", selectedProduct.category] }), _jsxs("p", { children: [_jsx("strong", { children: "Price:" }), " $", selectedProduct.price] })] })] }) }))] }));
};
export default WelcomePage;
