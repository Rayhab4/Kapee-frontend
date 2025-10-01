import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Integrations = () => {
    const integrations = [
        { id: 1, service: "PayPal", status: "Connected" },
        { id: 2, service: "Stripe", status: "Disconnected" },
        { id: 3, service: "Google Analytics", status: "Connected" },
    ];
    return (_jsxs("div", { className: "p-6", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Integrations" }), _jsxs("table", { className: "w-full border-collapse border border-gray-300", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-100", children: [_jsx("th", { className: "border p-2", children: "ID" }), _jsx("th", { className: "border p-2", children: "Service" }), _jsx("th", { className: "border p-2", children: "Status" })] }) }), _jsx("tbody", { children: integrations.map((i) => (_jsxs("tr", { children: [_jsx("td", { className: "border p-2", children: i.id }), _jsx("td", { className: "border p-2", children: i.service }), _jsx("td", { className: "border p-2", children: i.status })] }, i.id))) })] })] }));
};
export default Integrations;
