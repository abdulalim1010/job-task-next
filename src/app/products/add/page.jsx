"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
      alert("Product added!");
      router.push("/products");
    } else {
      alert("Failed to add product");
    }
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 rounded" required />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="border p-2 rounded" />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} className="border p-2 rounded" required />
        <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} className="border p-2 rounded" />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Add Product</button>
      </form>
    </div>
  );
}
