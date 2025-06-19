import React from "react";
import { FiYoutube, FiLinkedin, FiTwitter } from "react-icons/fi";

const Card = ({ instructor }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="relative pb-[75%] overflow-hidden">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            {instructor.name}
          </h2>
          <p className="text-blue-600 font-medium">{instructor.title}</p>
          <p className="text-gray-600 mt-3 text-sm line-clamp-3">
            {instructor.bio}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex space-x-3 mb-4">
            {instructor.youtubeUrl && (
              <a
                href={instructor.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-600 transition"
                aria-label="YouTube"
              >
                <FiYoutube size={18} />
              </a>
            )}
            {instructor.linkedinUrl && (
              <a
                href={instructor.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700 transition"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            )}
            {instructor.twitterUrl && (
              <a
                href={instructor.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition"
                aria-label="Twitter"
              >
                <FiTwitter size={18} />
              </a>
            )}
          </div>

          <a
            href={instructor.youtubeUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition duration-300"
          >
            View Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
