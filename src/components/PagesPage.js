import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Truck, ShieldCheck, Headphones, CreditCard, Gift, RefreshCcw, } from "lucide-react";
const PagesPage = () => {
    const features = [
        {
            id: 1,
            title: "Free Shipping",
            desc: "Enjoy free worldwide shipping on orders above $50.",
            icon: _jsx(Truck, { className: "w-10 h-10 text-indigo-600" }),
            img: "https://i.pinimg.com/736x/87/56/3e/87563ec7e5dbdc76c58c0c0c885a88b4.jpg",
        },
        {
            id: 2,
            title: "24/7 Customer Support",
            desc: "Our team is always ready to assist you anytime.",
            icon: _jsx(Headphones, { className: "w-10 h-10 text-indigo-600" }),
            img: "https://i.pinimg.com/736x/89/22/51/892251e20ac06f1431792f416b5eb50c.jpg",
        },
        {
            id: 3,
            title: "Secure Payments",
            desc: "We use the latest encryption to keep your transactions safe.",
            icon: _jsx(CreditCard, { className: "w-10 h-10 text-indigo-600" }),
            img: "https://i.pinimg.com/736x/9f/0f/2a/9f0f2af32142d13f4f22372c05f1990b.jpg",
        },
        {
            id: 4,
            title: "Money Back Guarantee",
            desc: "Not satisfied? Get a full refund within 30 days.",
            icon: _jsx(ShieldCheck, { className: "w-10 h-10 text-indigo-600" }),
            img: "https://i.pinimg.com/736x/0a/8a/bb/0a8abb2548cf32b1b8c651c5f5db49bb.jpg",
        },
        {
            id: 5,
            title: "Special Gifts",
            desc: "Get exclusive gifts and offers during seasonal sales.",
            icon: _jsx(Gift, { className: "w-10 h-10 text-indigo-600" }),
            img: "https://i.pinimg.com/736x/f7/76/82/f77682cbb2f6dd2741f79e6b65e93935.jpg",
        },
        {
            id: 6,
            title: "Easy Returns",
            desc: "Hassle-free returns within 14 days of purchase.",
            icon: _jsx(RefreshCcw, { className: "w-10 h-10 text-indigo-600" }),
            img: "https://i.pinimg.com/736x/d7/38/73/d7387316b612c66d59db018cdf08a7cf.jpg",
        },
    ];
    return (_jsxs("div", { className: "px-6 py-12", children: [_jsx("h1", { className: "text-3xl font-bold mb-4 text-gray-900", children: "Our Features" }), _jsx("p", { className: "text-gray-600 mb-10", children: "Explore the services and guarantees we provide to make your shopping experience better." }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: features.map((feature) => (_jsxs("div", { className: "bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1", children: [feature.img && (_jsx("img", { src: feature.img, alt: feature.title, className: "w-full h-40 object-cover" })), _jsxs("div", { className: "p-5 flex flex-col items-start", children: [_jsx("div", { className: "mb-3", children: feature.icon }), _jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-2", children: feature.title }), _jsx("p", { className: "text-gray-600", children: feature.desc })] })] }, feature.id))) })] }));
};
export default PagesPage;
