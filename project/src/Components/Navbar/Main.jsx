import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiArrowRight } from "react-icons/fi";
import Menu from "../Menu/Main";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setIsOpen(false), [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 bg-white backdrop-blur-sm bg-opacity-90 transition-all shadow-md ${
        scrolled ? "shadow-sm py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-3 group justify-center">
          <img
            src="/logo.svg"
            alt="Edu-Web Logo"
            className="w-11 h-11 group-hover:rotate-6 transition-transform duration-300"
          />
          <span className="text-3xl font-bold text-amber-400 hidden sm:inline-block group-hover:text-red-400 transition-colors">
            Lumina
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-2xl">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`relative px-1 py-2 text-gray-600 hover:text-blue-600 transition-colors ${
                isActive(path)
                  ? "font-medium text-blue-600 border-b-2 border-blue-600"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-black border border-black hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer">
              <FiUser className="text-lg" />
              <span>Sign In</span>
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 cursor-pointer">
              <span>Sign Up</span>
              <FiArrowRight />
            </button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="text-xl" />
          ) : (
            <FiMenu className="text-xl" />
          )}
        </button>
      </div>

      <Menu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
    </header>
  );
};

export default Navbar;
