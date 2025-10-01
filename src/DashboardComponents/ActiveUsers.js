import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { activeUsers } from "../mockData";
const ActiveUsers = () => {
    return (_jsxs("div", { className: "bg-white p-4 rounded-2xl shadow-md", children: [_jsx("h3", { className: "font-semibold mb-2", children: "Active Users" }), _jsx("div", { className: "text-2xl font-bold", children: "2,758" }), _jsx("p", { className: "text-green-600 text-sm mb-4", children: "+8.02% from last month" }), activeUsers.map((user, idx) => (_jsxs("div", { className: "mb-2", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { children: user.country }), _jsxs("span", { children: [user.percentage, "%"] })] }), _jsx("div", { className: "bg-gray-200 h-2 rounded-full", children: _jsx("div", { className: "bg-orange-500 h-2 rounded-full", style: { width: `${user.percentage}%` } }) })] }, idx)))] }));
};
export default ActiveUsers;
