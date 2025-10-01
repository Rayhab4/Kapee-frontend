import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const API_URL = "http://localhost:5000/api/products";
const AdminProductDashboard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState({});
    const token = localStorage.getItem("token");
    // Fetch products
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const res = await fetch(API_URL, {
                headers: {
                    Authorization: token ? `Bearer ${token}` : "",
                    "Content-Type": "application/json",
                },
            });
            const json = await res.json();
            if (!res.ok) {
                throw new Error(json.message || "Failed to fetch products");
            }
            setProducts(Array.isArray(json.data) ? json.data : []);
        }
        catch (err) {
            console.error(err);
            setError(err.message || "Something went wrong");
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    // Add or Update product
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.description || !form.price) {
            alert("Name, description, and price are required");
            return;
        }
        try {
            const res = await fetch(editingId ? `${API_URL}/${editingId}` : API_URL, {
                method: editingId ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token ? `Bearer ${token}` : "",
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok)
                throw new Error(data.message || "Action failed");
            alert(`Product ${editingId ? "updated" : "added"} successfully ✅`);
            setForm({});
            setEditingId(null);
            fetchProducts();
        }
        catch (err) {
            alert(err.message || "Something went wrong");
        }
    };
    const handleEdit = (product) => {
        setEditingId(product._id);
        setForm({ ...product });
    };
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this product?"))
            return;
        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: token ? `Bearer ${token}` : "",
                },
            });
            const data = await res.json();
            if (!res.ok)
                throw new Error(data.message || "Failed to delete product");
            alert("Product deleted ✅");
            fetchProducts();
        }
        catch (err) {
            alert(err.message || "Something went wrong");
        }
    };
    if (loading)
        return _jsx("p", { children: "Loading products..." });
    if (error)
        return _jsx("p", { className: "text-red-600", children: error });
    return (_jsxs("div", { className: "p-6 min-h-screen bg-gray-50", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Admin Product Dashboard" }), _jsxs("form", { onSubmit: handleSubmit, className: "mb-6 grid grid-cols-1 md:grid-cols-6 gap-4 bg-white p-4 rounded shadow-md", children: [_jsx("input", { type: "text", placeholder: "Name", value: form.name || "", onChange: (e) => setForm({ ...form, name: e.target.value }), className: "border px-2 py-1 rounded", required: true }), _jsx("input", { type: "text", placeholder: "Description", value: form.description || "", onChange: (e) => setForm({ ...form, description: e.target.value }), className: "border px-2 py-1 rounded", required: true }), _jsx("input", { type: "number", placeholder: "Price", value: form.price || "", onChange: (e) => setForm({ ...form, price: Number(e.target.value) }), className: "border px-2 py-1 rounded", required: true }), _jsx("input", { type: "text", placeholder: "Category", value: form.category || "", onChange: (e) => setForm({ ...form, category: e.target.value }), className: "border px-2 py-1 rounded" }), _jsx("input", { type: "text", placeholder: "Image URL", value: form.imageUrl || "", onChange: (e) => setForm({ ...form, imageUrl: e.target.value }), className: "border px-2 py-1 rounded" }), _jsx("button", { type: "submit", className: "bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600", children: editingId ? "Update Product" : "Add Product" })] }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full bg-white border rounded shadow-md", children: [_jsx("thead", { className: "bg-gray-100", children: _jsxs("tr", { children: [_jsx("th", { className: "px-4 py-2 border", children: "Image" }), _jsx("th", { className: "px-4 py-2 border", children: "Name" }), _jsx("th", { className: "px-4 py-2 border", children: "Description" }), _jsx("th", { className: "px-4 py-2 border", children: "Category" }), _jsx("th", { className: "px-4 py-2 border", children: "Price ($)" }), _jsx("th", { className: "px-4 py-2 border", children: "Actions" })] }) }), _jsx("tbody", { children: products.length > 0 ? (products.map((product) => (_jsxs("tr", { className: "text-center hover:bg-yellow-50", children: [_jsx("td", { className: "px-4 py-2 border", children: product.imageUrl ? (_jsx("img", { src: product.imageUrl, alt: product.name, className: "h-16 w-16 object-cover mx-auto rounded" })) : ("-") }), _jsx("td", { className: "px-4 py-2 border", children: product.name }), _jsx("td", { className: "px-4 py-2 border", children: product.description }), _jsx("td", { className: "px-4 py-2 border", children: product.category || "-" }), _jsx("td", { className: "px-4 py-2 border", children: product.price }), _jsxs("td", { className: "px-4 py-2 border space-x-2", children: [_jsx("button", { onClick: () => handleEdit(product), className: "px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600", children: "Edit" }), _jsx("button", { onClick: () => handleDelete(product._id), className: "px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600", children: "Delete" })] })] }, product._id)))) : (_jsx("tr", { children: _jsx("td", { colSpan: 6, className: "text-center py-4 text-gray-500", children: "No products available" }) })) })] }) })] }));
};
export default AdminProductDashboard;
