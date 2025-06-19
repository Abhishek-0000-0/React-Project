import { useEffect } from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBookOpen,
  FaUsers,
} from "react-icons/fa";
import Card from "../../Components/Cards/About";
import { Link } from "react-router-dom";

const Page = () => {
  useEffect(() => {
    document.title = "About | EduPath";
  }, []);
  const stats = [
    {
      icon: <FaGraduationCap size={32} />,
      number: "50,000+",
      text: "Active Students",
    },
    {
      icon: <FaChalkboardTeacher size={32} />,
      number: "1,200+",
      text: "Expert Instructors",
    },
    {
      icon: <FaBookOpen size={32} />,
      number: "500+",
      text: "Courses Available",
    },
    {
      icon: <FaUsers size={32} />,
      number: "30+",
      text: "Countries Reached",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="group overflow-hidden w-full relative text-black py-20">
        <div className="absolute inset-0 bg-[url('/Images/about.jpg')] bg-cover bg-center transform transition-transform duration-500 ease-in-out group-hover:scale-105"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Our Educational Platform
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering learners worldwide with accessible, high-quality
            education for all ages.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 bg-url(">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              We believe education should be engaging, accessible, and
              transformative. Our platform breaks down barriers to learning by
              providing world-class resources to anyone, anywhere.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Whether you're a student looking to excel, a professional seeking
              new skills, or a lifelong learner pursuing knowledge, we're here
              to support your journey.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              <Link to={"/signup"}>Join Our Community</Link>
            </button>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <Card
                    key={idx}
                    icon={stat.icon}
                    number={stat.number}
                    text={stat.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
