import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Search } from "lucide-react";
export default function Header() {
    return (_jsxs("header", { className: "flex justify-between items-center p-4 bg-white shadow-sm", children: [_jsx("h1", { className: "text-2xl font-bold", children: "Dashboard" }), _jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", placeholder: "Search stock, order, etc", className: "pl-10 pr-4 py-2 border rounded-lg w-72" }), _jsx(Search, { className: "absolute left-3 top-2.5 text-gray-400", size: 18 })] })] }));
}
