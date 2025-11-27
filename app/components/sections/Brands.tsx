"use client";

import { BRANDS } from "../../constants";
import SplitText from "../SplitText";

export default function Brands() {
  const allBrands = [
    ...BRANDS.cinema,
    ...BRANDS.gaming,
    ...BRANDS.shopping,
    ...BRANDS.dining,
  ];

  return (
    <section
      id="brands"
      className="py-20 bg-linear-to-b from-midnight to-black relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4 flex justify-center">
            <SplitText
              text="Brands to Come"
              className="text-4xl md:text-6xl font-bold text-white"
              delay={50}
              from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
              to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.1}
              rootMargin="-50px"
            />
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Partnered with world-class brands to bring you the best in cinema,
            gaming, shopping, and dining.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="px-6 py-3 bg-gold/20 border border-gold/50 rounded-full text-gold font-semibold">
            Cinema
          </div>
          <div className="px-6 py-3 bg-purple-500/20 border border-purple-400/50 rounded-full text-purple-300 font-semibold">
            Gaming & Arcade
          </div>
          <div className="px-6 py-3 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 font-semibold">
            Shopping
          </div>
          <div className="px-6 py-3 bg-red-500/20 border border-red-400/50 rounded-full text-red-300 font-semibold">
            Dining
          </div>
        </div>

        {/* Brands Grid - Unified Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {/* Cinema */}
          {BRANDS.cinema.map((brand, index) => (
            <div
              key={`cinema-${index}`}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-gold hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(204,164,59,0.4)] aspect-square flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}

          {/* Gaming */}
          {BRANDS.gaming.map((brand, index) => (
            <div
              key={`gaming-${index}`}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-purple-400 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] aspect-square flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}

          {/* Shopping */}
          {BRANDS.shopping.map((brand, index) => (
            <div
              key={`shopping-${index}`}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-400 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] aspect-square flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}

          {/* Dining */}
          {BRANDS.dining.map((brand, index) => (
            <div
              key={`dining-${index}`}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-400 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] aspect-square flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Bottom decorative text */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm italic">
            And many more brands coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}
