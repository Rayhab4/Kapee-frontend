import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Discounts = () => {
    const discounts = [
        { id: 1, product: "Apple Watch", discount: "10%", validTill: "2025-09-25" },
        { id: 2, product: "Xbox One", discount: "15%", validTill: "2025-09-22" },
        { id: 3, product: "JBL Headphones", discount: "5%", validTill: "2025-09-30" },
    ];
    return (_jsxs("div", { className: "p-6", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Discounts" }), _jsxs("table", { className: "w-full border-collapse border border-gray-300", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-100", children: [_jsx("th", { className: "border p-2", children: "ID" }), _jsx("th", { className: "border p-2", children: "Product" }), _jsx("th", { className: "border p-2", children: "Discount" }), _jsx("th", { className: "border p-2", children: "Valid Till" })] }) }), _jsx("tbody", { children: discounts.map((d) => (_jsxs("tr", { children: [_jsx("td", { className: "border p-2", children: d.id }), _jsx("td", { className: "border p-2", children: d.product }), _jsx("td", { className: "border p-2", children: d.discount }), _jsx("td", { className: "border p-2", children: d.validTill })] }, d.id))) })] })] }));
};
export default Discounts;
