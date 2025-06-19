import React from "react";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-cyan-200 w-full my-4 sm:my-6 md:my-7 py-12 sm:py-16 md:py-20 rounded-xl md:rounded-2xl px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
          Unlock Your Potential with Quality Education
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
          Explore a wide range of courses, tutorials, and learning paths to build your future. Learn anything, anytime, anywhere.
        </p>

        <div className="flex flex-col sm:flex-row w-full max-w-xl gap-3 sm:gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search for courses, topics..."
              className="w-full p-2 sm:p-3 rounded-lg border-2 border-amber-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 sm:hidden" />
          </div>
          <button className="flex items-center justify-center gap-2 sm:gap-3 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <FaSearch className="hidden sm:block" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner; 