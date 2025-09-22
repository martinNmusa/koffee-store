import React from "react";

const About = () => {
  return (
    <section id="about"className="bg-gradient-to-r from-amber-50 via-white to-amber-50 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          About <span className="text-amber-600">Coders Coffee Café</span>
        </h2>

        {/* Decorative Line */}
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 rounded-full"></div>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to <span className="font-semibold">Coders Coffee Café</span> —
          where code meets caffeine! We are passionate about serving freshly
          brewed coffee that fuels productivity, creativity, and collaboration.
          Whether you are a developer working late nights or a casual coffee
          lover, we have a drink crafted just for you.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our menu is designed to satisfy every taste — from smooth lattes and
          bold espressos to indulgent cappuccinos. We believe in using
          <span className="font-semibold"> ethically sourced coffee beans</span>{" "}
          and maintaining a cozy, welcoming atmosphere that inspires
          conversations, ideas, and connections.
        </p>

        {/* Highlight Box */}
        <div className="bg-amber-100 shadow-md rounded-xl p-6 mt-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-amber-700 mb-3">
            Our Mission ☕
          </h3>
          <p className="text-gray-800">
            To bring together passionate people, great conversations, and
            premium coffee under one roof — turning every cup into a spark of
            inspiration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
