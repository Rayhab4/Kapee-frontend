import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const BestSellingProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/products");
                const data = await res.json();
                setProducts(Array.isArray(data.data) ? data.data : []);
            }
            catch (err) {
                console.error("Failed to fetch products:", err);
                setProducts([]);
            }
            finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    const handleAddToCart = async (product) => {
        const userId = localStorage.getItem("userId");
        if (!userId)
            return navigate("/login");
        try {
            const res = await fetch("http://localhost:5000/api/cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, productId: product._id, quantity: 1 }),
            });
            if (!res.ok)
                throw new Error("Failed to add to cart");
            alert(`${product.name} added to cart ✅`);
        }
        catch (err) {
            alert(err.message || "Error adding to cart");
        }
    };
    const handleBuyNow = (product) => {
        localStorage.setItem("buyNowProduct", JSON.stringify(product));
        navigate("/login"); // or wherever your buy now page is
    };
    if (loading)
        return _jsx("p", { children: "Loading best selling products..." });
    if (products.length === 0)
        return _jsx("p", { children: "No products available." });
    return (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: products.map((product) => (_jsxs("div", { className: "border rounded p-4 shadow hover:shadow-lg transition flex flex-col justify-between", children: [product.imageUrl && (_jsx("img", { src: product.imageUrl, alt: product.name, className: "w-60 h-60 object-cover mb-4 rounded" })), _jsx("h3", { className: "font-bold text-lg", children: product.name }), _jsxs("p", { className: "text-gray-700 font-semibold", children: ["$", product.price] }), _jsxs("div", { className: "mt-4 flex gap-2", children: [_jsx("button", { onClick: () => handleAddToCart(product), className: "flex-1 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition", children: "Add to Cart" }), _jsx("button", { onClick: () => handleBuyNow(product), className: "flex-1 bg-yellow-500 text-black px-4 py-2 rounded font-bold hover:bg-yellow-600 transition", children: "Buy Now" })] })] }, product._id))) }));
};
export default BestSellingProducts;
