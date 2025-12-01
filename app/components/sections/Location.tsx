import { LOCATION_DETAILS } from "../../constants";
import { MapPin } from "lucide-react";

import SplitText from "../SplitText";

export default function Location() {
  return (
    <section
      id="location"
      className="py-20 bg-midnight relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4 flex justify-center">
            <SplitText
              text="Our Location"
              className="text-4xl md:text-6xl font-bold text-white"
              delay={50}
              from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
              to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.1}
              rootMargin="-50px"
            />
          </div>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>
        {/* Address Info */}
        <div className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="flex items-start space-x-4">
            <div className="bg-gold/20 p-3 rounded-full text-gold">
              <MapPin size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {LOCATION_DETAILS.address}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-gray-400 italic">
              "Located conveniently near Udwada Railway Station, making it
              accessible for everyone."
            </p>
          </div>
        </div>

        {/* Map Embed with Logo Overlay */}
        <div className="h-[400px] w-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl relative group mt-8">
          {/* Map iframe */}
          <iframe
            src={LOCATION_DETAILS.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="grayscale group-hover:grayscale-0 transition-all duration-500"
          ></iframe>

          {/* Logo Overlay - positioned near the center marker */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none">
            <div className="bg-white p-2 shadow-2xl">
              <img
                src="/logo-transparent.png"
                alt="CK Lifestyle"
                className="object-contain w-24 h-14 ml-1"
              />
            </div>
            {/* Optional: Add a label below the logo */}
            <div className="mt-2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
              <p className="text-xs font-bold text-midnight text-center whitespace-nowrap">
                CK Lifestyle Mall
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
