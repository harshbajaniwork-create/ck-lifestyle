import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gold mb-2">CK Lifestyle</h2>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CK Lifestyle. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-8">
          {["Home", "Facilities", "Location", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase() === "home" ? "hero" : item.toLowerCase()}
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-gold transition-colors cursor-pointer text-sm uppercase tracking-wider"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
