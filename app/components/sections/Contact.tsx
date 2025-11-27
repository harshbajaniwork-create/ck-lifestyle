import { CONTACT_INFO } from "../../constants";
import { Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

import SplitText from "../SplitText";
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-midnight relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4 flex justify-center">
            <SplitText
              text="Get in Touch"
              className="text-4xl md:text-6xl font-bold text-white"
              delay={50}
              from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
              to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.1}
              rootMargin="-50px"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="bg-gold/20 p-3 rounded-full text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <div className="flex flex-col">
                    {CONTACT_INFO.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="text-white text-lg font-medium hover:text-gold transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-gold/20 p-3 rounded-full text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-white text-lg font-medium hover:text-gold transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 pb-8">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { Icon: Instagram, link: CONTACT_INFO.socials.instagram },
                  { Icon: Facebook, link: CONTACT_INFO.socials.facebook },
                  { Icon: Twitter, link: CONTACT_INFO.socials.twitter },
                ].map(({ Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    className="bg-white/10 p-3 rounded-full text-white hover:bg-gold hover:text-black transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Simple Form */}
          <form className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>
            <button className="w-full bg-gold text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors uppercase tracking-wide">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
