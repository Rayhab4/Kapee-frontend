import React, { Component } from "react";
import MyForn from Component

const MyForm = () => {
  return (
    <li className="relative group">
      <a href="#" className="text-gray-800 font-semibold hover:text-blue-600">
        Home
      </a>
    {/* Dropdown for Home */}
      <div className="absolute left-0 mt-2 hidden group-hover:flex bg-white shadow-lg rounded-lg p-6 w-[600px] space-x-10 z-20">
        {/* General Demos */}
        <div>
          <h3 className="text-gray-900 font-bold mb-3">General Demos</h3>
          <ul className="space-y-2">
            {/* Basic with nested submenu */}
            <li className="relative group/item">
              <a
                href="#"
                className="block px-2 py-1 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                Basic ▸
              </a>

              {/* Submenu for Basic */}
              <div className="absolute top-0 left-full ml-2 hidden group-hover/item:block bg-white shadow-lg rounded-lg p-4 w-64 z-30">
                <h4 className="text-gray-900 font-semibold mb-3">
                  Shop Page Layout
                </h4>
                <ul className="space-y-2">
                  {[
                    "Shop Page Layout",
                    "Shop Page Left Sidebar",
                    "Shop Page Right Sidebar",
                    "Shop Page Full Width",
                    "Shop Page Masonry",
                    "Shop Page Load More",
                    "Shop Page Infinite Scroll",
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="block px-2 py-1 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {["Catalog", "Marketplace", "Full Width", "Boxed", "Electronics", "RTL"].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="block px-2 py-1 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Marketplace Demos */}
        <div>
          <h3 className="text-gray-900 font-bold mb-3">Marketplace Demos</h3>
          <ul className="space-y-2">
            {["Dokan", "WC Marketplace", "WC Vendors", "WCFM"].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="block px-2 py-1 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}




const HomeMenu = () => {
  return (
    <li className="relative group">
      <a href="#" className="text-gray-800 font-semibold hover:text-blue-600">
        Home
      </a>

      {/* Dropdown for Home */}
      <div className="absolute left-0 mt-2 hidden group-hover:flex bg-white shadow-lg rounded-lg p-6 w-[600px] space-x-10 z-20">
        {/* General Demos */}
        <div>
          <h3 className="text-gray-900 font-bold mb-3">General Demos</h3>
          <ul className="space-y-2">
            {/* Basic with nested submenu */}
            <li className="relative group/item">
              <a
                href="#"
                className="block px-2 py-1 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                Basic ▸
              </a>

              {/* Submenu for Basic */}
              <div className="absolute top-0 left-full ml-2 hidden group-hover/item:block bg-white shadow-lg rounded-lg p-4 w-64 z-30">
                <h4 className="text-gray-900 font-semibold mb-3">
                  Shop Page Layout
                </h4>
                <ul className="space-y-2">
                  {[
                    "Shop Page Layout",
                    "Shop Page Left Sidebar",
                    "Shop Page Right Sidebar",
                    "Shop Page Full Width",
                    "Shop Page Masonry",
                    "Shop Page Load More",
                    "Shop Page Infinite Scroll",
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="block px-2 py-1 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {["Catalog", "Marketplace", "Full Width", "Boxed", "Electronics", "RTL"].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="block px-2 py-1 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Marketplace Demos */}
        <div>
          <h3 className="text-gray-900 font-bold mb-3">Marketplace Demos</h3>
          <ul className="space-y-2">
            {["Dokan", "WC Marketplace", "WC Vendors", "WCFM"].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="block px-2 py-1 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default MyForn;
