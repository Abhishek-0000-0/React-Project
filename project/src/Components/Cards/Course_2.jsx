import React from "react";
import { FiPlay, FiExternalLink } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";

const Card = ({
  title,
  subtitle,
  duration,
  image,
  youtubeUrl,
  views,
  level = "Beginner",
  category,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg w-80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
          onClick={() => window.open(youtubeUrl, "_blank")}
          aria-label={`Play ${title}`}
        >
          <FiPlay className="text-xl text-blue-600" />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1">
        {category && (
          <span className="text-xs font-medium text-blue-600 mb-1">
            {category}
          </span>
        )}

        <h3 className="font-semibold text-gray-800 text-lg mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{subtitle}</p>

        <div className="flex items-center justify-between mt-auto text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <IoTimeOutline className="mr-1" />
              <span>{duration}</span>
            </div>
            {views && (
              <div>
                <span>{views} views</span>
              </div>
            )}
          </div>

          {level && (
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                level === "Beginner"
                  ? "bg-green-100 text-green-800"
                  : level === "Intermediate"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {level}
            </span>
          )}
        </div>

        {youtubeUrl && (
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 font-medium text-sm py-2 px-4 border border-blue-200 rounded-md hover:bg-blue-50 transition-colors"
          >
            <span>Start Learning</span>
            <FiExternalLink className="text-sm" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
