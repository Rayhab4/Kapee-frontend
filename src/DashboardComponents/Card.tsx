import React from "react";

function Card({ title, subtitle, size }) {
  // Define sizes
  let cardClasses = "bg-white shadow-md rounded-lg flex flex-col items-center justify-center text-center";

  if (size === "small") {
    cardClasses += " w-6 h-10"; // small card
  } else if (size === "large") {
    cardClasses += " w-30 h-10"; // large card
  } else {
    cardClasses += " w-12 h-10"; // normal/default card
  }

  return (
    <div className={cardClasses}>
      <h4 className="font-semibold text-sm">{title}</h4>
      {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
    </div>
  );
}

export default Card;
