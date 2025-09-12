import React from "react";

const Navbar = () => {
  return (
    <div className="header-main bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="https://kapee.presslayouts.com/" rel="home">
              <img
                className="h-12 w-auto"
                src="https://kapee.presslayouts.com/wp-content/themes/kapee/assets/images/logo.png"
                alt="kapee"
              />
            </a>
          </div>

          {/* Center: Search input + Categories */}
          <div className="flex-1 mx-4 flex items-center gap-2">

            {/* Search input */}
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* All Categories dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-r-md flex items-center gap-1 hover:bg-yellow-500">
                All Categories ▼ 🔍
              </button>
              <ul className="absolute right-0 mt-1 w-56 bg-white text-black shadow-md rounded hidden group-hover:block max-h-64 overflow-auto z-10">
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Accessories</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Analog</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Anklets</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Beauty Accessory</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Belts</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Bracelets</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Casual Shoes</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Digital</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Dresses</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Earrings</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Electronics</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Formal Shoes</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Handbag</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Hats & Caps</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Coats & Jackets</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Jeans</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Laptop Bags</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Leather</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Lingerie & Nightwear</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Luggage & Travel</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Makeup Kit</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Pearl Jewelry</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Sandals & Floaters</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Shirts</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Shorts & Skirts</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Smart Analog</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Smart Watches</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Sneakers</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Socks</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Sunglasses</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">T-Shirts</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Tops</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Trolley Bags</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Trousers & Capris</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Wallets</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">Watches</li>
              </ul>
            </div>
          </div>

          {/* Right: Account + Wishlist + Cart */}
          <div className="flex items-center gap-4">
            <a
              className="font-semibold hover:text-gray-700"
              href="https://kapee.presslayouts.com/my-account/"
            >
              Hello, Sign In
            </a>

            <a
              href="https://kapee.presslayouts.com/my-wishlist"
              className="relative text-xl"
            >
              ♥
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </a>

            <a
              href="https://kapee.presslayouts.com/cart"
              className="relative flex items-center gap-2 text-xl"
            >
              🛍
              <span className="font-semibold">$0.00</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
