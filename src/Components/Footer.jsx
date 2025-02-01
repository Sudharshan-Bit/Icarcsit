import React from "react";
import { Facebook, Twitter, Youtube, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Info Logo Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">Guarder</h2>
            <p className="mt-4 text-gray-400">
              dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam, quisdotempor incididunt r
            </p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Useful Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">dolor sit amet, consectetur</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">magna aliqua. Ut enim ad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">minim veniam,</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">quisdotempor incididunt r</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Contact Us</h5>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="mr-2 text-white" />
                <span className="text-gray-400">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-white" />
                <span className="text-gray-400">Call: +01 1234567890</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-white" />
                <span className="text-gray-400">demo@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Newsletter</h5>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 bg-white text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <button className="bg-yellow-300 text-black px-8 py-1.5 rounded-xl hover:bg-gray-200">
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-4 text-xl">
              <a href="#" className="text-white hover:text-gray-400"><Facebook /></a>
              <a href="#" className="text-white hover:text-gray-400"><Twitter /></a>
              <a href="#" className="text-white hover:text-gray-400"><Youtube /></a>
              <a href="#" className="text-white hover:text-gray-400"><Instagram /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
