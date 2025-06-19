import {
  FaStar,
  FaRegStar,
  FaUserGraduate,
  FaCrown,
  FaMedal,
} from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const Card = ({
  title,
  instructor,
  rating = 0,
  students = 0,
  price,
  originalPrice,
  image,
  duration,
  isPremium = false,
  isBestseller = false,
  youtubeUrl = "https://www.youtube.com",
}) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400 text-xs" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <FaRegStar className="text-yellow-400 text-xs" />
            <div className="absolute left-0 top-0 w-1/2 overflow-hidden">
              <FaStar className="text-yellow-400 text-xs" />
            </div>
          </div>
        );
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 text-xs" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-w-60 my-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col mx-5">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
        />
        {isPremium && (
          <span className="absolute top-2 left-2 flex items-center bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            <FaCrown className="mr-1" /> Premium
          </span>
        )}
        {isBestseller && (
          <span className="absolute top-2 right-2 flex items-center bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
            <FaMedal className="mr-1" /> Bestseller
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1 hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mb-2">By {instructor}</p>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="flex mr-1">{renderStars()}</div>
            <span className="text-xs font-medium text-gray-700 ml-1">
              {rating.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center text-gray-500 text-xs">
            <FaUserGraduate className="mr-1" />
            <span>{students.toLocaleString()}</span>
          </div>
        </div>

        {duration && (
          <div className="flex items-center text-gray-500 text-xs mb-3">
            <IoMdTime className="mr-1" />
            <span>{duration}</span>
          </div>
        )}

        <div className="mt-auto">
          <div className="mb-3">
            <span className="text-base font-bold text-gray-900">{price}</span>
            {originalPrice && (
              <span className="text-xs line-through text-gray-400 ml-2">
                {originalPrice}
              </span>
            )}
          </div>

          <a href={`${youtubeUrl}`} target="_blank">
            <button
              className={`w-full py-2 px-4 rounded-md font-medium text-sm transition-colors ${
                isPremium
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Enroll Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
