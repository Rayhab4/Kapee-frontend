import React from "react";

const Category = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto">
        <div className="py-4">
          {/* Title */}
          <div className="flex items-center justify-between border-b pb-2">
            <span className="font-semibold text-lg">Shop By Categories</span>
            <span className="text-gray-500">▼</span>
          </div>

          {/* Categories Menu */}
          <ul className="mt-3 space-y-2">
            {/* Men’s Clothing */}
            <li className="group relative">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 font-medium"
              >
                Men’s Clothing
              </a>
              <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg w-[1170px] p-6 z-10">
                <div className="grid grid-cols-3 gap-6">
                  {/* Top Wear */}
                  <div>
                    <h3 className="font-semibold mb-2">Top Wear</h3>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:underline">T-shirts</a></li>
                      <li><a href="#" className="hover:underline">Shirts</a></li>
                      <li><a href="#" className="hover:underline">Suits & Blazers</a></li>
                      <li><a href="#" className="hover:underline">Jackets</a></li>
                    </ul>
                  </div>

                  {/* Bottom Wear */}
                  <div>
                    <h3 className="font-semibold mb-2">Bottom Wear</h3>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:underline">Jeans</a></li>
                      <li><a href="#" className="hover:underline">Trousers</a></li>
                      <li><a href="#" className="hover:underline">Shorts</a></li>
                      <li><a href="#" className="hover:underline">Track Pants</a></li>
                    </ul>
                  </div>

                  {/* Winter Wear */}
                  <div>
                    <h3 className="font-semibold mb-2">Winter Wear</h3>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:underline">Sweaters</a></li>
                      <li><a href="#" className="hover:underline">Jackets</a></li>
                      <li><a href="#" className="hover:underline">Hoodies</a></li>
                      <li><a href="#" className="hover:underline">Pullovers</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Women’s Clothing */}
            <li className="group relative">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 font-medium"
              >
                Women’s Clothing
              </a>
              <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg w-[1170px] p-6 z-10">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Top Wear</h3>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:underline">Tops</a></li>
                      <li><a href="#" className="hover:underline">Kurtas</a></li>
                      <li><a href="#" className="hover:underline">Sarees</a></li>
                      <li><a href="#" className="hover:underline">Dresses</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Bottom Wear</h3>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:underline">Jeans</a></li>
                      <li><a href="#" className="hover:underline">Leggings</a></li>
                      <li><a href="#" className="hover:underline">Skirts</a></li>
                      <li><a href="#" className="hover:underline">Palazzos</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Accessories</h3>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:underline">Handbags</a></li>
                      <li><a href="#" className="hover:underline">Jewellery</a></li>
                      <li><a href="#" className="hover:underline">Scarves</a></li>
                      <li><a href="#" className="hover:underline">Makeup</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Electronics */}
            <li className="group relative">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 font-medium"
              >
                Electronics
              </a>
              <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg w-[1170px] p-6 z-10">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Mobiles</h3>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:underline">Smartphones</a></li>
                      <li><a href="#" className="hover:underline">Feature Phones</a></li>
                      <li><a href="#" className="hover:underline">Accessories</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Laptops</h3>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:underline">Gaming Laptops</a></li>
                      <li><a href="#" className="hover:underline">Business Laptops</a></li>
                      <li><a href="#" className="hover:underline">Laptop Bags</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Wearables</h3>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:underline">Smart Watches</a></li>
                      <li><a href="#" className="hover:underline">Fitness Bands</a></li>
                      <li><a href="#" className="hover:underline">VR Headsets</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 font-medium">Accessories</a></li>

        
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 font-medium">Footwear</a></li>

        
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 font-medium">Jewellery</a></li>

            
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 font-medium">Beauty & Personal Care</a></li>

            
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 font-medium">Bags & Travel</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;