import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Contact.tsx
import { useState } from "react";
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact Form:", { name, email, message });
        alert("Message sent! (This is just a demo)");
    };
    return (_jsxs("div", { className: "p-8 max-w-2xl mx-auto", children: [_jsx("h2", { className: "text-3xl font-bold mb-6", children: "Contact Us" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("input", { type: "text", placeholder: "Name", value: name, onChange: (e) => setName(e.target.value), className: "w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500", required: true }), _jsx("input", { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500", required: true }), _jsx("textarea", { placeholder: "Message", value: message, onChange: (e) => setMessage(e.target.value), className: "w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500", rows: 5, required: true }), _jsx("button", { type: "submit", className: "w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition", children: "Send Message" })] })] }));
};
export default Contact;
