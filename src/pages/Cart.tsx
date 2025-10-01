import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  quantity: number;
}

interface CartItem {
  _id: string;
  product: Product;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch cart items
  const fetchCartItems = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first to view your cart.");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/cart", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("token");
          alert("Session expired, please login again.");
          navigate("/login");
        } else {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.message || "Failed to fetch cart items");
        }
        return;
      }

      const data = await res.json();
      setCartItems(data.data || []);
    } catch (err: any) {
      console.error("Cart fetch error:", err);
      alert(err.message || "Failed to fetch cart items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Update quantity
  const updateQuantity = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return; // avoid 0 or negative

    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update quantity");

      fetchCartItems();
    } catch (err: any) {
      console.error("Update quantity failed:", err);
      alert(err.message);
    }
  };

  // Remove item
  const removeItem = async (itemId: string) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to remove item");

      fetchCartItems();
    } catch (err: any) {
      console.error("Remove item failed:", err);
      alert(err.message);
    }
  };

  // Checkout all items in cart
  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first to place an order.");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to place order");

      alert(data.message || "Order placed successfully!");
      fetchCartItems(); // refresh cart (should now be empty)
      navigate("/orders"); // go to orders page
    } catch (err: any) {
      console.error("Checkout failed:", err);
      alert(err.message || "Failed to place order");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading cart...</p>;
  if (cartItems.length === 0) return <p className="text-center mt-10">Your cart is empty.</p>;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">My Cart</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white"
          >
            <img
              src={item.product.imageUrl}
              alt={item.product.name}
              className="w-48 h-48 object-contain rounded-lg mb-4"
            />
            <h2 className="font-bold text-lg mb-2">{item.product.name}</h2>
            <p className="text-gray-700 mb-2">Price: ${item.product.price}</p>

            {/* Quantity controls */}
            <div className="flex items-center space-x-2 mb-4">
              <button
                onClick={() => updateQuantity(item._id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item._id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
            </div>

            {/* Subtotal */}
            <p className="font-semibold mb-2">
              Subtotal: ${item.product.price * item.quantity}
            </p>

            {/* Remove button */}
            <button
              onClick={() => removeItem(item._id)}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total + Checkout */}
      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ${totalPrice}</p>
        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Checkout All Items
        </button>
      </div>
    </div>
  );
};

export default CartPage;
