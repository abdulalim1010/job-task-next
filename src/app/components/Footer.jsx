"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-10">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">MyShop</h2>
          <p className="text-gray-200 text-sm">
            Your one-stop shop for quality products. Fast delivery, secure payments, and excellent support.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><a href="#" className="hover:text-gray-100 transition">Home</a></li>
            <li><a href="#" className="hover:text-gray-100 transition">Products</a></li>
            <li><a href="#" className="hover:text-gray-100 transition">Add Product</a></li>
            <li><a href="#" className="hover:text-gray-100 transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Subscribe to our Newsletter</h3>
          <p className="text-gray-200 text-sm mb-3">Get updates about new products and offers.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="p-2 rounded-l-lg flex-1 focus:outline-none"
            />
            <button 
              type="submit" 
              className="px-4 py-2 bg-gray-800 rounded-r-lg hover:bg-gray-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-500 mt-6 py-4 text-center text-gray-200 text-sm">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
