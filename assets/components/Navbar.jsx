import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6">
        <nav className="py-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-amber-700 tracking-wide">
              Coders Coffee Café
            </h1>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8 text-gray-700 font-medium">
            <li
              className="hover:text-amber-600 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </li>
            <li
              className="hover:text-amber-600 cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <li
              className="hover:text-amber-600 cursor-pointer"
              onClick={() => scrollToSection("shop")}
            >
              Shop
            </li>
            <li
              className="hover:text-amber-600 cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
