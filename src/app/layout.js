import Link from "next/link";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My Next.js App",
  description: "Simple Next.js 15 App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* Navbar */}
       <Navbar/>

        {/* Page Content */}
        <main className="p-6">{children}</main>
        {/* Footer */}
        <Footer/>
      </body>
    </html>
  );
}
