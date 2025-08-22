"use client";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-10">
      <div className="max-w-7xl mx-auto py-6 px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-3 md:mb-0">
          &copy; {new Date().getFullYear()} MyShop. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-200 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
