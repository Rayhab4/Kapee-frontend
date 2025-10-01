import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import LoginForm from "./loginPage";
import RegistrationForm from "./RegistrationForm";
const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (_jsx("div", { className: "flex flex-col items-center mt-20", children: _jsx("div", { className: "w-[22rem] p-6 border rounded shadow-md", children: isLogin ? (_jsxs(_Fragment, { children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-center", children: "Login" }), _jsx(LoginForm, {}), _jsxs("p", { className: "mt-4 text-sm text-center", children: ["Don\u2019t have an account?", " ", _jsx("button", { onClick: () => setIsLogin(false), className: "text-blue-600 hover:underline", children: "Register here" })] })] })) : (_jsxs(_Fragment, { children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-center", children: "Register" }), _jsx(RegistrationForm, {}), _jsxs("p", { className: "mt-4 text-sm text-center", children: ["Already have an account?", " ", _jsx("button", { onClick: () => setIsLogin(true), className: "text-green-600 hover:underline", children: "Login here" })] })] })) }) }));
};
export default AuthPage;
