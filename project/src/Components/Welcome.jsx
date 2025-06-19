import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="w-full z-10 px-6 py-14 text-center bg-linear-to-r from-cyan-500 to-blue-500 shadow-md">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Welcome to <span className="text-amber-300">Lumina</span> – Your Gateway
        to Knowledge
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Discover a transformative learning experience crafted to help you reach
        your academic and career goals. Join a vibrant community of learners and
        educators today.
      </p>

      <Link
        to="/login"
        className="cursor-pointer inline-block px-6 py-3 bg-amber-400 text-white font-semibold rounded-full shadow-lg hover:bg-amber-300 transform transition-transform duration-300 hover:scale-105"
      >
        Enroll Now
      </Link>
    </section>
  );
};

export default Welcome;
