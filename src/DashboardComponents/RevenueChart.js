import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { revenueData } from "../mockData";
export default function RevenueChart() {
    return (_jsxs("div", { className: "bg-white p-4 rounded-2xl shadow-md w-full", children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("h3", { className: "font-semibold", children: "Revenue Analytics" }), _jsx("button", { className: "bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-sm", children: "Last 8 Days" })] }), _jsx(ResponsiveContainer, { width: "100%", height: 250, children: _jsxs(LineChart, { data: revenueData, children: [_jsx(XAxis, { dataKey: "date" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Line, { type: "monotone", dataKey: "revenue", stroke: "#f97316", strokeWidth: 2 }), _jsx(Line, { type: "monotone", dataKey: "order", stroke: "#fcd34d", strokeWidth: 2, strokeDasharray: "5 5" })] }) })] }));
}
