import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FunnelChart, Funnel, Tooltip, LabelList, ResponsiveContainer } from "recharts";
import { conversionRate } from "../mockData";
export default function ConversionRate() {
    return (_jsxs("div", { className: "bg-white p-4 rounded-2xl shadow-md w-full h-80", children: [_jsxs("div", { className: "flex justify-between items-center mb-4", children: [_jsx("h3", { className: "font-semibold", children: "Conversion Rate" }), _jsx("button", { className: "bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-sm", children: "This Week" })] }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(FunnelChart, { children: [_jsx(Tooltip, {}), _jsx(Funnel, { dataKey: "value", data: conversionRate, isAnimationActive: true, children: _jsx(LabelList, { position: "right", fill: "#000", stroke: "none", dataKey: "label" }) })] }) })] }));
}
