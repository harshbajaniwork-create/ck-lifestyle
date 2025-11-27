import { FACILITIES } from "../../constants";

import SplitText from "../SplitText";

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="py-20 bg-linear-to-b from-midnight to-black"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4 flex justify-center">
            <SplitText
              text="World-Class Facilities"
              className="text-4xl md:text-6xl font-bold text-white"
              delay={50}
              from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
              to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.1}
              rootMargin="-50px"
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need for a perfect day out, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 hover:border-gold/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent opacity-90 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {facility.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
