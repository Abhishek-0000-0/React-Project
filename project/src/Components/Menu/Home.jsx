import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Menu = ({
  navLinks,
  courseCategories,
  showDropdown,
  setShowDropdown,
  mobileDropdownOpen,
  toggleMobileDropdown,
  setIsOpen,
  setMobileDropdownOpen,
}) => {
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef, setShowDropdown]);

  return (
    <nav className="md:flex justify-center items-center gap-6 py-2 bg-white">
      {navLinks.map(({ path, label }) =>
        label === "Courses" ? (
          <div
            key={path}
            className="relative group"
            ref={dropdownRef}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="hidden md:block">
              <button
                className={`flex items-center gap-1 px-2 py-1 text-sm ${
                  location.pathname.startsWith("/courses")
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                } transition-colors`}
              >
                {label}
                {showDropdown ? (
                  <FiChevronUp className="mt-[2px]" />
                ) : (
                  <FiChevronDown className="mt-[2px]" />
                )}
              </button>
              <div
                className={`absolute left-0 top-full mt-1 w-64 bg-cyan-100 border border-gray-200 rounded-md shadow-lg transition-all duration-200 z-50 ${
                  showDropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {courseCategories.map(({ label, path }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 ${
                      location.pathname === path
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : ""
                    } transition-colors`}
                    onClick={() => setShowDropdown(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMobileDropdown}
                className={`flex items-center justify-between w-full px-2 py-3 text-sm ${
                  location.pathname.startsWith("/courses")
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                <span>{label}</span>
                {mobileDropdownOpen ? (
                  <FiChevronUp className="ml-1" />
                ) : (
                  <FiChevronDown className="ml-1" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  mobileDropdownOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="pl-4 py-2 space-y-2">
                  {courseCategories.map(({ label, path }) => (
                    <Link
                      key={path}
                      to={path}
                      className={`block px-2 py-2 text-sm rounded ${
                        location.pathname === path
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => {
                        setMobileDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Link
            key={path}
            to={path}
            className={`block px-2 py-1 md:py-2 text-sm ${
              location.pathname === path
                ? "text-blue-600 font-semibold md:border-b-2 md:border-blue-600"
                : "text-gray-700 hover:text-blue-600"
            } transition-colors`}
          >
            {label}
          </Link>
        )
      )}
    </nav>
  );
};

export default Menu;
