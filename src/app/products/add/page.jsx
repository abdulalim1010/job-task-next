"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, description, price: parseFloat(price), image };

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (res.ok) {
      toast.success("Product added successfully!");
      router.push("/products");
    } else {
      toast.error("Failed to add product");
    }
  };

  const preview = image || "https://via.placeholder.com/400x300.png?text=Preview";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <Toaster position="top-right" />
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-xl p-8 sm:p-10 flex flex-col gap-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Add New Product
        </h1>

        {/* Image Preview */}
        <div className="flex justify-center">
          <img
            src={preview}
            alt="Product Preview"
            className="w-full max-w-sm h-64 object-cover rounded-xl shadow-md"
          />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition resize-none"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition transform hover:-translate-y-0.5"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
