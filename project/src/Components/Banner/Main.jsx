import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-[url(/Images/ban-2.jpg)] bg-cover bg-center min-h-[70vh] w-full flex items-center">
      <div className="bg-opacity-60 w-full h-full absolute top-0 left-0 z-0"></div>

      <div className="container mx-auto px-6 z-10 relative ">
        <div className="max-w-xl text-black  bg-white/20 p-3 rounded-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unlock Your Learning Potential
          </h1>
          <p className="text-lg mb-6 text-gray-800">
            Join thousands of students gaining knowledge and building careers
            with EduSmart.
          </p>
          <div className="flex-2 justify-end items-center space-x-6">
            <Link
              to="/signup"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
            >
              Join Us
            </Link>
            <Link
              to="/about"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
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
