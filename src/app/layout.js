import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "Simple Next.js 15 App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white">
          {/* Logo */}
          <div><h1>My page</h1></div>
          {/* Left side - Links */}
          <div className="flex gap-6">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/products" className="hover:text-gray-200">Products</Link>
            <Link href="/add-products" className="hover:text-gray-200">Add Products</Link>
          </div>

          {/* Right side - Login button */}
          <div>
            <Link
              href="/login"
              className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium shadow hover:bg-gray-100 transition"
            >
              Login
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
