import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/ProductShowcase.tsx
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
// Expanded products list: 6 products per category
const products = [
    // Featured
    { id: 1, name: "Apple AirPods Pro", price: "$85.00", image: "https://i.pinimg.com/1200x/11/b2/c2/11b2c26e69f2bc7de9704b03b2fe5c9f.jpg", category: "Featured", tagLine: "Wireless Sound" },
    { id: 2, name: "JBL Bluetooth Speaker", price: "$96.00", image: "https://i.pinimg.com/736x/88/ca/24/88ca2472db2920fed4c870b192fda11d.jpg", category: "Featured", tagLine: "Portable & Powerful" },
    // Recent
    { id: 7, name: "Apple iPhone 11 Pro Max", price: "$199.00", oldPrice: "$254.00", image: "https://i.pinimg.com/736x/43/fd/59/43fd59e5a7c6adba1584ec69c515cf4e.jpg", category: "Recent", tagLine: "Smart & Sleek" },
    // On Sale
    { id: 13, name: "Samsung Gear 360 Camera", price: "$29.00", oldPrice: "$48.00", image: "https://i.pinimg.com/1200x/03/1a/8a/031a8ae96dddf4134c81ddf215ffe7d0.jpg", category: "On Sale", tagLine: "Capture Every Angle" },
    // Top Rated
    { id: 19, name: "Samsung VR Headset", price: "$18.00", image: "https://i.pinimg.com/1200x/3a/0e/84/3a0e842f2c250534316a424ef30e3e5e.jpg", category: "Top Rated", tagLine: "Immersive Experience" },
];
const categories = ["Featured", "Recent", "On Sale", "Top Rated"];
const ProductShowcase = () => {
    const [currentCategory, setCurrentCategory] = useState("Featured");
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 4;
    const filteredProducts = products.filter(p => p.category === currentCategory);
    const handleScroll = (direction) => {
        if (direction === "left" && startIndex > 0)
            setStartIndex(startIndex - 1);
        if (direction === "right" && startIndex < filteredProducts.length - visibleCount)
            setStartIndex(startIndex + 1);
    };
    return (_jsxs("div", { className: "w-full bg-gray-50 py-10 px-6", children: [_jsx("div", { className: "flex space-x-6 mb-6", children: categories.map((cat) => (_jsx("button", { onClick: () => { setCurrentCategory(cat); setStartIndex(0); }, className: `px-4 py-2 font-semibold rounded ${currentCategory === cat
                        ? "bg-yellow-500 text-white shadow-lg"
                        : "bg-white text-gray-700 border hover:bg-yellow-100"}`, children: cat }, cat))) }), _jsxs("div", { className: "relative flex items-center", children: [_jsx("button", { onClick: () => handleScroll("left"), className: "absolute left-0 z-10 p-3 bg-white shadow-md rounded-full hover:bg-yellow-500 transition", children: _jsx(SlArrowLeft, { size: 24 }) }), _jsx("div", { className: "flex overflow-hidden w-full space-x-4", children: filteredProducts
                            .slice(startIndex, startIndex + visibleCount)
                            .map((product) => (_jsxs("div", { className: "min-w-[220px] bg-white p-4 rounded-lg shadow hover:shadow-lg transition", children: [_jsx("img", { src: product.image, alt: product.name, className: "w-full h-40 object-cover rounded mb-4" }), _jsx("h3", { className: "font-semibold text-lg", children: product.name }), _jsx("p", { className: "text-gray-500 text-sm", children: product.tagLine }), _jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [_jsx("span", { className: "font-bold text-yellow-500", children: product.price }), product.oldPrice && (_jsx("span", { className: "line-through text-gray-400 text-sm", children: product.oldPrice }))] })] }, product.id))) }), _jsx("button", { onClick: () => handleScroll("right"), className: "absolute right-0 z-10 p-3 bg-white shadow-md rounded-full hover:bg-yellow-500 transition", children: _jsx(SlArrowRight, { size: 24 }) })] })] }));
};
export default ProductShowcase;
