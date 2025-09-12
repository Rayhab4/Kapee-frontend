import React from "react";

const Header = () => {
  return (
    <div id="page" className="site-wrapper">
      <header
        id="header"
        className="site header header-1 scroll-down bg-yellow-400 text-black py-4"
      >
        <div className="header-topbar container mx-auto flex justify-between items-center">
          
          <div className="flex items-center gap-8">
            
            <div className="language-switcher relative group">
              <button className="font-semibold hover:text-gray-700">
                English ▼
              </button>
              <ul className="absolute left-0 mt-2 w-32 bg-white text-black shadow-md rounded hidden group-hover:block">
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">
                  Français
                </li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">
                  Deutsch
                </li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">
                  العربية
                </li>
              </ul>
            </div>
            <div className="currency-switcher relative group">
              <button className="font-semibold hover:text-gray-700">
                $ Dollar (US) ▼
              </button>
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md rounded hidden group-hover:block">
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">
                  ₹ Rupee (INR)
                </li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">
                  £ Pound (UK)
                </li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer">
                  € Euro (EUR)
                </li>
              </ul>
            </div>
          </div>

          
          <div className="flex items-center gap-6">
            <span className="font-medium">Welcome to our store!</span>
            <nav className="topbar-navigation">
              <ul className="flex gap-4">
                <li>
                  <a
                    className="flex items-center gap-1 hover:text-gray-700"
                    href="https://kapee.presslayouts.com/blog"
                  >
                    <i className="fa fa-folder-open-o"></i>
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-1 hover:text-gray-700"
                    href="https://kapee.presslayouts.com"
                  >
                    <i className="fa fa-clone"></i>
                    <span>FAQ</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-1 hover:text-gray-700"
                    href="https://kapee.presslayouts.com/contact-us"
                  >
                    <i className="fa fa-envelope-o"></i>
                    <span>Contact Us</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      </div>
  );
};


export default Header;
