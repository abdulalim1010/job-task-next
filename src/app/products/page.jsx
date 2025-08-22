// app/products/page.js
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product._id} className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition">
            <img
              src={product.image || "https://via.placeholder.com/300x200.png?text=Product"}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description || "No description"}</p>
            <p className="font-bold text-blue-600">${product.price}</p>
             <Link
              href={`/products/${product._id}`}
              className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
