import React from "react";
import { FaWhatsapp, FaPhone, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-6 mt-10" id="contact">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Coders Coffee Café</h2>
          <p className="text-sm">Brewing joy, one cup at a time ☕</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 my-4 md:my-0">
          <a href="https://wa.me/254740237965" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl hover:text-green-500 transition duration-300" />
          </a>
          <a href="tel:+254740237965">
            <FaPhone className="text-2xl hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500 transition duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-500 transition duration-300" />
          </a>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full transition duration-300"
        >
          <FaArrowUp /> Back to Top
        </button>
      </div>

      <p className="text-center text-xs mt-4 text-gray-400">
        © {new Date().getFullYear()} Coders Coffee Café. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
