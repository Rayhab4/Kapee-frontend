import React from "react";

const TopBar = () => {
  return (
    <div className="bg-black text-white py-3">
      <div className="container mx-auto flex items-center justify-center gap-4">
        
        <div className="promo-bar-msg font-semibold text-lg">
          SUMMER SALE, Get 40% off for all products
        </div>

        
        <a
          className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition"
          href="#"
          target="_blank"
        >
          Click Here
        </a>
      </div>
    </div>
  );
};

export default TopBar;
