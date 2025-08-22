"use client"; // Top of file

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetailsClient() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image || "https://via.placeholder.com/600x400.png?text=Product"}
        alt={product.name}
        className="w-full h-96 object-cover rounded mb-6"
      />
      <p className="text-gray-700 mb-4">{product.description || "No description"}</p>
      <p className="text-2xl font-bold text-blue-600 mb-6">${product.price}</p>
      <button
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  );
}
