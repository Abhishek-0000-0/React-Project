import React from "react";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-cyan-200 w-300 my-7 py-20 rounded-2xl px-8 md:px-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Unlock Your Potential with Quality Education
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore a wide range of courses, tutorials, and learning paths to build your future. Learn anything, anytime, anywhere.
        </p>

        <div className="flex w-full max-w-xl gap-6">
          <input
            type="text"
            placeholder="Search for courses, topics..."
            className="flex-1 p-3 rounded-l-lg border-amber-300 border-2 rounded-2xl focus:outline-none"
          />
          <button className="flex items-center gap-4 bg-blue-600  text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            <FaSearch />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
