import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, } from "recharts";
const salesData = [
    { name: "Electronics", value: 120000 },
    { name: "Fashion", value: 90000 },
    { name: "Home & Kitchen", value: 75000 },
    { name: "Books", value: 45000 },
    { name: "Sports", value: 60000 },
];
const customersData = [
    { month: "Jan", newCustomers: 200, returningCustomers: 150 },
    { month: "Feb", newCustomers: 300, returningCustomers: 220 },
    { month: "Mar", newCustomers: 250, returningCustomers: 180 },
    { month: "Apr", newCustomers: 400, returningCustomers: 350 },
    { month: "May", newCustomers: 320, returningCustomers: 270 },
    { month: "Jun", newCustomers: 450, returningCustomers: 400 },
];
const Reports = () => {
    return (_jsxs("div", { className: "p-6 bg-gray-50 min-h-screen space-y-10", children: [_jsx("h2", { className: "text-3xl font-bold mb-4 text-gray-800", children: "Reports Dashboard" }), _jsxs("div", { className: "bg-white p-6 rounded-2xl shadow-md", children: [_jsx("h3", { className: "text-xl font-semibold mb-4", children: "Sales by Category" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: salesData, margin: { top: 20, right: 30, left: 0, bottom: 5 }, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Bar, { dataKey: "value", fill: "#f59e0b" })] }) })] }), _jsxs("div", { className: "bg-white p-6 rounded-2xl shadow-md", children: [_jsx("h3", { className: "text-xl font-semibold mb-4", children: "Customer Growth" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(LineChart, { data: customersData, margin: { top: 20, right: 30, left: 0, bottom: 5 }, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "month" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Line, { type: "monotone", dataKey: "newCustomers", stroke: "#3b82f6", strokeWidth: 2 }), _jsx(Line, { type: "monotone", dataKey: "returningCustomers", stroke: "#10b981", strokeWidth: 2 })] }) })] })] }));
};
export default Reports;
