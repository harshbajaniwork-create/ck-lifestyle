import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import Facilities from "../components/sections/Facilities";
import Gallery from "../components/sections/Gallery";
import Location from "../components/sections/Location";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import type { Route } from "./+types/home";
import ScrollSmoothProvider from "~/components/ScrollSmoothProvider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CK Lifestyle - Premium Mall in Valsad" },
    {
      name: "description",
      content:
        "Experience luxury shopping, dining, and entertainment at CK Lifestyle. Discover a world of premium brands, fine dining, and entertainment all under one roof in Valsad.",
    },
    {
      name: "keywords",
      content:
        "CK Lifestyle, Mall in Valsad, Shopping Mall, Entertainment, Cinema, Gaming Zone, Luxury Hotel, Fine Dining, Valsad, Gujarat",
    },
    { name: "author", content: "CK Lifestyle" },
    { property: "og:title", content: "CK Lifestyle - Premium Mall in Valsad" },
    {
      property: "og:description",
      content:
        "Experience luxury shopping, dining, and entertainment at CK Lifestyle. Your premium lifestyle destination in Valsad.",
    },
    { property: "og:image", content: "/freepik__adjust__13028.jpeg.jpg" },
    { property: "og:url", content: "https://cklifestyle.in" }, // Assuming domain, can be updated
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "CK Lifestyle - Premium Mall in Valsad" },
    {
      name: "twitter:description",
      content:
        "Experience luxury shopping, dining, and entertainment at CK Lifestyle. Your premium lifestyle destination in Valsad.",
    },
    { name: "twitter:image", content: "/freepik__adjust__13028.jpeg.jpg" },
  ];
}

export default function Home() {
  return (
    <main className="bg-midnight min-h-screen text-white selection:bg-gold selection:text-black">
      <ScrollSmoothProvider>
        <Navbar />
        <Hero />
        <Facilities />
        <Gallery />
        <Location />
        <Contact />
        <Footer />
      </ScrollSmoothProvider>
    </main>
  );
}
