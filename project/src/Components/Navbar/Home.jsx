import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiLogOut, FiSearch } from "react-icons/fi";
import Menu from "../Menu/Home";
import { FaUser } from "react-icons/fa";
import SearchModule from "../Search";

const Navbar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    setMobileDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/courses", label: "Courses" },
    { path: "/instructor", label: "Instructor" },
    { path: "/events", label: "Events" },
    { path: "/price", label: "Subscription" },
    { path: "/profile", label: "Profile" },
    { path: "/blog", label: "Blog" },
  ];

  const courseCategories = [
    { label: "Web Development", path: "/courses/1" },
    { label: "Data Science", path: "/courses/2" },
    { label: "Mobile Development", path: "/courses/3" },
    { label: "Game Development", path: "/courses/4" },
    {
      label: "Database Design & Development",
      path: "/courses/5",
    },
  ];

  return (
    <header
      className={`sticky w-full top-0 z-50 bg-white transition-all duration-300 shadow-md ${
        scrolled ? "shadow-md" : "border-b border-gray-200"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3">
          <Link
            to="/home"
            className="flex items-center gap-2 font-bold text-xl text-gray-800 hover:text-blue-600"
          >
            <img src="/logo.svg" alt="Edu-Web Logo" className="h-8 w-auto" />
            <h1 className="text-3xl text-amber-300 hover:text-red-400">
              Lumina
            </h1>
          </Link>

         <SearchModule />

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/profile"
              className="text-gray-600 hover:text-blue-600 text-xl transition duration-300 p-2 rounded-full hover:bg-gray-100"
            >
              <FaUser />
            </Link>
            <Link
              to={"/"}
              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-800 rounded-md hover:text-blue-600 hover:border-blue-600"
            >
              <FiLogOut /> Logout
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <hr className="mx-4 sm:mx-8 md:mx-16 my-4 border-t border-gray-300" />

        {/* Menu component */}
        {isOpen || window.innerWidth >= 768 ? (
          <Menu
            navLinks={navLinks}
            courseCategories={courseCategories}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            mobileDropdownOpen={mobileDropdownOpen}
            toggleMobileDropdown={() =>
              setMobileDropdownOpen(!mobileDropdownOpen)
            }
            setIsOpen={setIsOpen}
            setMobileDropdownOpen={setMobileDropdownOpen}
          />
        ) : null}

        {isOpen && (
          <>
            <form className="md:hidden flex items-center bg-gray-100 px-4 py-2 rounded-full border border-gray-300 my-3 mx-2">
              <FiSearch className="text-gray-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="ml-2 bg-transparent outline-none w-full text-sm"
              />
            </form>

            <div className="md:hidden flex flex-col gap-3 px-2 py-4 border-t border-gray-200">
              <button className="w-full cursor-pointer flex items-center justify-center gap-2 px-4 py-2 text-sm border border-gray-800 rounded-md hover:text-blue-600 hover:border-blue-600">
                <Link to={"/"}>
                  <FiLogOut /> Logout
                </Link>
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
