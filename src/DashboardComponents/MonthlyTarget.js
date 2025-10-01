import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function MonthlyTarget() {
    const percentage = 85;
    return (_jsxs("div", { className: "bg-white p-4 rounded-2xl shadow-md flex flex-col items-center gap-2", children: [_jsx("h3", { className: "font-semibold", children: "Monthly Target" }), _jsx("div", { className: "w-32 h-32", children: _jsx(CircularProgressbar, { value: percentage, text: `${percentage}%`, styles: buildStyles({
                        textColor: "#f97316",
                        pathColor: "#f97316",
                        trailColor: "#fcd34d",
                    }) }) }), _jsx("p", { className: "text-green-600 text-sm", children: "+8.02% from last month" }), _jsx("p", { className: "text-sm font-medium", children: "Great Progress! \uD83C\uDF89" }), _jsx("p", { className: "text-xs text-gray-500", children: "Our achievement increased by $200,000; let's reach 100% next month." }), _jsxs("div", { className: "flex justify-between w-full text-xs mt-2", children: [_jsx("span", { children: "Target $600,000" }), _jsx("span", { children: "Revenue $510,000" })] })] }));
}
