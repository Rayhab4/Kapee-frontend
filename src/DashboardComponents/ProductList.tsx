import React from "react";

const products = [
  { name: "Homepod", price: "$129.00" },
  { name: "Macbook Pro", price: "$899.00" },
  { name: "Apple Watch", price: "$399.00" },
];

const ProductList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
      <ul className="space-y-4">
        {products.map((product, i) => (
          <li key={i} className="flex justify-between border-b pb-2">
            <span>{product.name}</span>
            <span className="font-bold">{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
