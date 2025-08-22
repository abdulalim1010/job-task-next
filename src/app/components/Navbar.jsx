"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-600 rounded-2xl text-white px-3 py-4 shadow-md">
      <div className="max-w-8xl lg:px-8 mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="flex" >
          <img
              src="/logo.avif" // replace with your public logo URL
              alt="MyShop Logo"
              className="w-20 h-15 p-2 rounded-2xl object-contain"
            />
          <h1 className="text-5xl font-bold">My Shope</h1>
        </div>

        {/* Menu Links */}
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-3 py-1 rounded hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white transition"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="px-3 py-1 rounded hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white transition"
          >
            Products
          </Link>
          <Link
            href="/products/add"
           className="px-3 py-1 rounded hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white transition"
          >
            Add Product
          </Link>
        </div>

        {/* Login / Logout Button */}
        {session ? (
          <div className="flex items-center gap-3">
            <span className="text-sm">{session.user?.name}</span>
            <button
              onClick={() => signOut()}
              className="px-3 py-1 rounded-2xl bg-white text-black hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="px-3 py-1 rounded-2xl bg-white text-black hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white transition"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
