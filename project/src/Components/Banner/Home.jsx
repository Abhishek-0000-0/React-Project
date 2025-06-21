import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  AiOutlineLineChart,
  AiOutlineCode,
  AiOutlineRobot,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Master Artificial Intelligence",
      description:
        "Learn cutting-edge AI techniques with our comprehensive courses taught by industry experts",
      imageUrl: "/Images/ai.jpg",
      icon: <AiOutlineRobot className="text-5xl mb-4" />,
      link: "/courses/3",
    },
    {
      id: 2,
      title: "Data Science Specialization",
      description:
        "Become a data expert with Python, R, machine learning, and data visualization",
      imageUrl: "/Images/data.jpg",
      icon: <AiOutlineLineChart className="text-5xl mb-4" />,
      link: "/courses/2",
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      description:
        "Build modern web applications with React, Node.js, and MongoDB",
      imageUrl: "/Images/web.jpg",
      icon: <AiOutlineCode className="text-5xl mb-4" />,
      link: "/courses/1",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-md">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 relative h-[500px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-black bg-white/60 py-2 rounded-xl max-w-2xl px-4">
                  {slide.icon}
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl mb-6">{slide.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
                    <Link to={slide.link}>Enroll Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
        aria-label="Next slide"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
