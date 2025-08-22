"use client"; // Navbar interactive → must be client component
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold hover:text-gray-200 transition">
          <Link href="/">MyShop</Link>
        </div>

        {/* Menu Links */}
        <div className="flex gap-4">
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-200 transition">
            Products
          </Link>
          <Link
            href="/products/add"
            className="hover:bg-green-600 transition"
          >
            Add Product
          </Link>
         
        </div>
         <Link href="/login" className=" px-3 rounded-2xl text-black bg-white transition">
            Login
          </Link>
      </div>
    </nav>
  );
}
