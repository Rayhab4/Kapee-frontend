import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = localStorage.getItem("userId"); // get logged-in user ID
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (!id)
                    return;
                setLoading(true);
                const res = await fetch(`http://localhost:5000/api/products/${id}`);
                if (!res.ok)
                    throw new Error("Failed to fetch product");
                const data = await res.json();
                setProduct(data);
            }
            catch (err) {
                setError(err.message || "Something went wrong");
            }
            finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);
    const placeOrder = async () => {
        if (!userId) {
            navigate("/login"); // redirect to login if not logged in
            return;
        }
        if (!product)
            return;
        try {
            const res = await fetch("http://localhost:5000/api/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    productId: product._id,
                    quantity: 1,
                    userId,
                }),
            });
            if (!res.ok)
                throw new Error("Failed to place order");
            await res.json();
            alert(`${product.name} ordered successfully ✅`);
            // Clear cart
            await fetch("http://localhost:5000/api/cart/clear", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId }),
            });
            navigate("/cart"); // cart will be empty
        }
        catch (err) {
            console.error(err);
            alert("Something went wrong placing the order ❌");
        }
    };
    if (loading)
        return _jsx("div", { className: "p-6 text-center", children: "Loading..." });
    if (error)
        return _jsxs("div", { className: "p-6 text-red-600", children: ["Error: ", error] });
    if (!product)
        return _jsx("div", { className: "p-6", children: "Product not found" });
    return (_jsxs("div", { className: "max-w-5xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-10", children: [_jsx("div", { className: "flex justify-center", children: _jsx("img", { src: product.imageUrl || "/placeholder.jpg", alt: product.name, className: "w-full max-w-md h-[400px] object-contain rounded-lg shadow-lg" }) }), _jsxs("div", { className: "space-y-6", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: product.name }), _jsx("p", { className: "text-lg text-gray-600", children: product.description || "No description available." }), _jsxs("p", { className: "text-2xl font-semibold text-yellow-600", children: ["$", product.price] }), _jsxs("div", { className: "flex gap-4", children: [_jsx("button", { onClick: placeOrder, className: "bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition", children: "Add to Cart" }), _jsx("button", { onClick: placeOrder, className: "bg-yellow-500 text-black px-6 py-3 rounded-lg shadow font-bold hover:bg-yellow-600 transition transform hover:scale-105", children: "Buy Now" })] })] })] }));
};
export default ProductPage;
