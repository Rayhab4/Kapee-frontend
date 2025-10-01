import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async (emailInput, passwordInput) => {
        const normalizedEmail = emailInput.toLowerCase();
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: normalizedEmail, password: passwordInput }),
        });
        const data = await res.json();
        if (!res.ok) {
            alert(data.message);
            return false;
        }
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        if (data.role === "admin")
            navigate("/dashboard");
        else
            navigate("/");
        return true;
    };
    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const normalizedEmail = email.toLowerCase();
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email: normalizedEmail, password, role: "user" }),
            });
            const data = await res.json();
            if (!res.ok) {
                alert(data.message);
                return;
            }
            // ✅ Auto login after signup
            await handleLogin(normalizedEmail, password);
        }
        catch (err) {
            alert(err.message);
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: _jsxs("div", { className: "bg-white p-8 rounded shadow-md w-full max-w-md", children: [_jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "Sign Up" }), _jsxs("form", { onSubmit: handleSignup, className: "space-y-4", children: [_jsx("input", { type: "text", placeholder: "Full Name", value: name, onChange: (e) => setName(e.target.value), className: "w-full border px-4 py-2 rounded", required: true }), _jsx("input", { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full border px-4 py-2 rounded", required: true }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full border px-4 py-2 rounded", required: true }), _jsx("button", { type: "submit", className: "w-full bg-yellow-500 text-black py-2 rounded font-bold hover:bg-yellow-600 transition", disabled: loading, children: loading ? "Please wait..." : "Sign Up" })] }), _jsxs("p", { className: "mt-4 text-center text-gray-600", children: ["Already have an account?", " ", _jsx("button", { type: "button", onClick: () => navigate("/login"), className: "text-yellow-500 font-semibold", children: "Login" })] })] }) }));
};
export default SignupPage;
