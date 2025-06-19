import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiUser, FiArrowRight } from "react-icons/fi";

const Menu = ({ isOpen, setIsOpen, navLinks }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300">
      <div className="px-4 py-3 space-y-2">
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`block px-4 py-3 rounded-lg transition-colors ${
              isActive(path)
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}

        <div className="pt-2 border-t border-gray-100 space-y-2">
          <Link
            to="/login"
            className="flex items-center gap-2 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            <FiUser />
            <span>Sign In</span>
          </Link>
          <Link
            to="/signup"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            <span>Sign Up</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
