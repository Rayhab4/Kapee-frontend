import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const HotDealsSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // Fetch products from backend
    const fetchProducts = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/products");
            const data = await res.json();
            setProducts(data);
        }
        catch (err) {
            console.error("Failed to fetch products:", err);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    if (loading)
        return _jsx("p", { children: "Loading products..." });
    // Filter products with category Electronics for Hot Deals
    const hotDeals = products.filter((p) => p.category.toLowerCase() === "electronics");
    // Featured products (all others)
    const featuredProducts = products.filter((p) => p.category.toLowerCase() !== "electronics");
    return (_jsx("section", { className: "px-6 py-10 bg-white", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "border border-gray-300 rounded p-4 shadow-sm", children: [_jsx("h2", { className: "text-lg font-bold text-gray-900 mb-3 border-b pb-2", children: "HOT DEALS" }), hotDeals[0] && (_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("img", { src: hotDeals[0].img, alt: hotDeals[0].name, className: "w-[200px] h-[240px] object-contain mb-4" }), _jsx("p", { className: "text-sm text-gray-500", children: hotDeals[0].category }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 text-center", children: hotDeals[0].name }), _jsxs("p", { className: "mt-1 text-gray-700", children: [_jsxs("span", { className: "line-through mr-2 text-gray-400", children: ["$", (hotDeals[0].price * 1.2).toFixed(2)] }), _jsxs("span", { className: "text-green-600 font-semibold", children: ["$", hotDeals[0].price] })] }), _jsx("p", { className: "text-sm text-green-500 font-semibold", children: "17% Off" })] }))] }), _jsxs("div", { className: "col-span-2", children: [_jsx("div", { className: "flex justify-between items-center mb-4", children: _jsx("h2", { className: "text-lg font-bold text-gray-900 border-b-2 border-blue-500 pb-1", children: "FEATURED PRODUCTS" }) }), _jsxs("div", { className: "relative", children: [_jsx(SlArrowLeft, { className: "absolute -left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 cursor-pointer text-gray-700 z-10" }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-6", children: featuredProducts.map((item) => (_jsxs("div", { className: "border p-3 rounded shadow-sm hover:shadow-md transition bg-white flex flex-col items-center", children: [_jsx("img", { src: item.img, alt: item.name, className: "w-24 h-24 object-contain mb-3" }), _jsx("p", { className: "text-xs text-gray-500", children: item.category }), _jsx("h3", { className: "text-sm font-semibold text-gray-800 truncate text-center", children: item.name }), _jsxs("p", { className: "text-sm font-bold text-gray-900", children: ["$", item.price] })] }, item._id))) }), _jsx(SlArrowRight, { className: "absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 cursor-pointer text-gray-700 z-10" })] })] })] }) }));
};
export default HotDealsSection;
