import Image from "next/image";
import ProductsPage from "./products/page";

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner Section */}
      <section className="relative text-center py-32 text-white">
        {/* Background Image */}
        <Image
          src="/bannar.jpg"
          alt="Hero Banner"
          fill
          priority
          className="object-cover h-full object-center -z-10"
        />

        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-50 -z-10"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl text-blue-800 font-extrabold mb-4">
            Welcome to My Website 🚀
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Build modern web applications with Next.js 15 and Tailwind CSS use simple section.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* নিচে আরেকটা সেকশন */}
      <section>
        <ProductsPage/>
     </section>
    </div>
  );
}
