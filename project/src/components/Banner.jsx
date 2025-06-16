import { Link } from "react-router-dom";
import Welcome from "./Welcome";

const Banner = () => {
  return (
    <section className="bg-[url(/Images/ban-2.jpg)] bg-cover bg-center min-h-[70vh] w-full flex items-center">
      <div className="bg-opacity-60 w-full h-full absolute top-0 left-0 z-0"></div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unlock Your Learning Potential
          </h1>
          <p className="text-lg mb-6 text-gray-700">
            Join thousands of students gaining knowledge and building careers
            with EduSmart.
          </p>
          <div className="flex-2 justify-end items-center space-x-6">
            <Link
              to="/signup"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
            >
              Join Us
            </Link>
            <Link
              to="/about"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
