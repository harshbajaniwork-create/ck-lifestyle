import { HERO_CONTENT } from "../../constants";
import { Link } from "react-scroll";
import SplitText from "../SplitText";
import BlurText from "../BlurText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_CONTENT.image}
          alt="CK Lifestyle Mall"
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
          style={{ animationDuration: "20s" }}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-midnight mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />{" "}
        {/* Extra darkening for text pop */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center justify-center h-full pt-20">
        <div className="mb-2 overflow-hidden">
          <p className="text-gold tracking-[0.5em] uppercase text-sm md:text-base font-bold mb-4 animate-fade-in-up">
            Welcome to
          </p>
        </div>

        <div className="mb-6 relative">
          {/* Main Title with SplitText */}
          <SplitText
            text={HERO_CONTENT.title}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none px-4 py-2"
            delay={50}
            from={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
          />
          {/* Glow Effect behind text */}
          <div className="absolute -inset-10 bg-gold/20 blur-3xl rounded-full -z-10 opacity-50 animate-pulse" />
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <BlurText
            text={HERO_CONTENT.subtitle}
            delay={50}
            animateBy="words"
            direction="bottom"
            className="text-xl md:text-3xl text-gray-200 font-light tracking-wide leading-relaxed"
          />
        </div>

        <Link
          to="facilities"
          smooth={true}
          duration={800}
          className="group relative px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest overflow-hidden cursor-pointer hover:border-gold transition-all duration-500 rounded-full"
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">
            {HERO_CONTENT.cta}
          </span>
          <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_30px_rgba(204,164,59,0.5)]" />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] uppercase tracking-widest text-white/70">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-transparent via-gold to-transparent animate-bounce" />
      </div>
    </section>
  );
}
