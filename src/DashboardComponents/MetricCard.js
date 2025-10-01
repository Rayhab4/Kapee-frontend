import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function MetricCard({ title, value, change, isPositive }) {
    return (_jsxs("div", { className: "bg-white p-4 rounded-2xl shadow-md flex flex-col gap-2", children: [_jsx("h3", { className: "text-sm text-gray-500", children: title }), _jsx("div", { className: "text-2xl font-bold", children: value }), _jsxs("div", { className: `text-sm ${isPositive ? "text-green-600" : "text-red-600"}`, children: [isPositive ? "+" : "", change, "% vs last week"] })] }));
}
