import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Settings = () => {
    const settings = [
        { id: 1, option: "Profile Settings", value: "Enabled" },
        { id: 2, option: "Notifications", value: "Disabled" },
        { id: 3, option: "Two-Factor Auth", value: "Enabled" },
    ];
    return (_jsxs("div", { className: "p-6", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Settings" }), _jsxs("table", { className: "w-full border-collapse border border-gray-300", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-100", children: [_jsx("th", { className: "border p-2", children: "ID" }), _jsx("th", { className: "border p-2", children: "Option" }), _jsx("th", { className: "border p-2", children: "Value" })] }) }), _jsx("tbody", { children: settings.map((s) => (_jsxs("tr", { children: [_jsx("td", { className: "border p-2", children: s.id }), _jsx("td", { className: "border p-2", children: s.option }), _jsx("td", { className: "border p-2", children: s.value })] }, s.id))) })] })] }));
};
export default Settings;
