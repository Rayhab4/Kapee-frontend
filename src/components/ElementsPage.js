import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/ElementsPage.tsx
import { useState } from "react";
import { ShoppingBag, Info, Heart } from "lucide-react"; // icons
import picture9 from "../assets/picture9.jpg"; // local image
const ElementsPage = () => {
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState(null);
    // Mock data for product cards
    const products = [
        {
            id: 1,
            name: "Classic Sneakers",
            price: "$79.99",
            image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=200&fit=crop",
        },
        {
            id: 2,
            name: "Elegant Watch",
            price: "$120.00",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
        },
        {
            id: 3,
            name: "Leather Backpack",
            price: "$95.50",
            image: picture9,
        },
    ];
    // Buttons data
    const buttonActions = [
        {
            id: 1,
            label: "Shop Now",
            type: "info",
            message: "🛍️ Discover the latest arrivals today!",
            icon: _jsx(ShoppingBag, { className: "inline-block w-4 h-4 mr-2" }),
            color: "bg-yellow-500 text-white",
            hoverColor: "hover:bg-yellow-600",
        },
        {
            id: 2,
            label: "Learn More",
            type: "error",
            message: "⚠️ This feature is not available yet.",
            icon: _jsx(Info, { className: "inline-block w-4 h-4 mr-2" }),
            color: "bg-gray-200 text-gray-700",
            hoverColor: "hover:bg-gray-300",
        },
        {
            id: 3,
            label: "Add to Wishlist",
            type: "success",
            message: "❤️ Added to your wishlist!",
            icon: _jsx(Heart, { className: "inline-block w-4 h-4 mr-2 text-red-500" }),
            color: "border border-yellow-500 text-yellow-500",
            hoverColor: "hover:bg-yellow-50",
        },
    ];
    // Function to trigger alerts
    const showAlert = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        // Auto-hide after 3 seconds
        setTimeout(() => {
            setAlertMessage(null);
            setAlertType(null);
        }, 3000);
    };
    return (_jsxs("div", { className: "px-6 py-10", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-6", children: "Elements Showcase" }), alertMessage && (_jsx("div", { className: `mb-6 px-4 py-2 rounded text-sm font-medium ${alertType === "success"
                    ? "bg-green-100 text-green-800"
                    : alertType === "error"
                        ? "bg-red-100 text-red-800"
                        : "bg-blue-100 text-blue-800"}`, children: alertMessage })), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "p-6 border rounded-lg shadow-sm bg-white", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Buttons" }), _jsx("div", { className: "flex flex-wrap gap-3", children: buttonActions.map((btn) => (_jsxs("button", { onClick: () => showAlert(btn.type, btn.message), className: `${btn.color} ${btn.hoverColor} px-4 py-2 rounded flex items-center`, children: [btn.icon, btn.label] }, btn.id))) })] }), _jsxs("div", { className: "p-6 border rounded-lg shadow-sm bg-white md:col-span-2", children: [_jsx("h1", { className: "text-4xl font-bold mb-2", children: "New Arrivals" }), _jsx("h2", { className: "text-3xl font-semibold mb-2", children: "Summer Collection 2025" }), _jsx("h3", { className: "text-2xl font-medium mb-2", children: "Why Choose Us" }), _jsx("p", { className: "mt-2 text-gray-600", children: "Discover the latest fashion trends with exclusive deals. Our store offers high-quality products at affordable prices, ensuring you look stylish every season." }), _jsxs("ul", { className: "list-disc pl-5 mt-3 text-gray-700 space-y-1", children: [_jsx("li", { children: "\u2714 Free shipping on all orders over $50" }), _jsx("li", { children: "\u2714 30-day hassle-free returns" }), _jsx("li", { children: "\u2714 24/7 customer support" }), _jsx("li", { children: "\u2714 Exclusive discounts for members" })] })] }), _jsxs("div", { className: "p-6 border rounded-lg shadow-sm bg-white md:col-span-2", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Product Cards" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: products.map((product) => (_jsxs("div", { className: "border rounded-lg shadow hover:shadow-md transition p-3", children: [_jsx("img", { src: product.image, alt: product.name, className: "rounded-lg mb-3 w-full h-40 object-cover" }), _jsx("h3", { className: "text-lg font-semibold", children: product.name }), _jsx("p", { className: "text-yellow-600 font-bold", children: product.price }), _jsxs("button", { onClick: () => showAlert("success", `✅ ${product.name} added to cart!`), className: "mt-3 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded flex items-center", children: [_jsx(ShoppingBag, { className: "w-4 h-4 mr-2" }), "Add to Cart"] })] }, product.id))) })] }), _jsxs("div", { className: "p-6 border rounded-lg shadow-sm bg-white md:col-span-2", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Testimonials" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("blockquote", { className: "border-l-4 border-yellow-500 pl-4 italic text-gray-700", children: ["\"Amazing quality and fast delivery. I love shopping here!\"", _jsx("span", { className: "block text-sm text-gray-500 mt-1", children: "- Sarah K." })] }), _jsxs("blockquote", { className: "border-l-4 border-yellow-500 pl-4 italic text-gray-700", children: ["\"Great deals on trending items. Highly recommended!\"", _jsx("span", { className: "block text-sm text-gray-500 mt-1", children: "- James P." })] })] })] })] })] }));
};
export default ElementsPage;
