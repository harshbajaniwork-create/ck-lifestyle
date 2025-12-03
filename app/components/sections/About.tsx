"use client";

import { ABOUT_CONTENT } from "../../constants";
import SplitText from "../SplitText";

export default function About() {
  return (
    <section id="about" className="py-20 bg-linear-to-b from-black to-midnight">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4 flex justify-center">
            <SplitText
              text={ABOUT_CONTENT.title}
              className="text-4xl md:text-6xl font-bold text-white"
              delay={50}
              from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
              to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.1}
              rootMargin="-50px"
            />
          </div>
          <p className="text-gold text-xl md:text-2xl font-semibold mb-6">
            {ABOUT_CONTENT.subtitle}
          </p>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            {ABOUT_CONTENT.description}
          </p>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mt-4">
            Strategically located in Kikarla, Udvada, at National Hwy 848-B,
            Gujarat , Nestled near the picturesque Red Lotus Lake, CK Life Style
            offers a tranquil yet vibrant setting that blends nature with
            commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {ABOUT_CONTENT.highlights.map((highlight, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-gold/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gold/20 p-3 rounded-full text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300 shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
