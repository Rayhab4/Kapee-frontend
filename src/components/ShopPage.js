import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ShopPage = () => {
    const products = [
        {
            id: 1,
            name: "Wireless Speaker",
            price: "$120.00",
            img: "https://i.pinimg.com/736x/fb/5c/3b/fb5c3bfae2d9fa96292c9a2c6c6ac0c7.jpg",
        },
        {
            id: 2,
            name: "Smartphone Pro X",
            price: "$899.00",
            img: "https://i.pinimg.com/736x/43/19/64/43196464c93392764f44b8e5b3880a08.jpg",
        },
        {
            id: 3,
            name: "Noise Cancelling Headphones",
            price: "$250.00",
            img: "https://i.pinimg.com/736x/29/8e/fd/298efd12dbd33cc23a80d62b295c82c5.jpg",
        },
    ];
    return (_jsxs("div", { className: "px-6 py-10", children: [_jsx("h1", { className: "text-3xl font-bold mb-6", children: "Shop" }), _jsx("p", { className: "text-gray-600 mb-8", children: "Explore our wide range of products available for you." }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: products.map((item) => (_jsxs("div", { className: "bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition", children: [_jsx("img", { src: item.img, alt: item.name, className: "w-full h-56 object-cover" }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-800", children: item.name }), _jsx("p", { className: "text-yellow-600 font-bold", children: item.price })] })] }, item.id))) })] }));
};
export default ShopPage;
