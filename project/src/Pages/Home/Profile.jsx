import React, { useEffect } from "react";
import {
  FaUserGraduate,
  FaBookOpen,
  FaCertificate,
  FaUserAstronaut,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaRegStar,
  FaRegCalendarAlt,
  FaChartLine,
} from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";

const object = [
  {
    icon: <FaBookOpen className="text-xl text-blue-600" />,
    bg: "bg-blue-100",
    value: 12,
    valueClass: "text-blue-600",
    label: "Courses Enrolled",
  },
  {
    icon: <FaBookOpen className="text-xl text-green-600" />,
    bg: "bg-green-100",
    value: 8,
    valueClass: "text-green-600",
    label: "Courses Completed",
  },
  {
    icon: <FaCertificate className="text-xl text-purple-600" />,
    bg: "bg-purple-100",
    value: 5,
    valueClass: "text-purple-600",
    label: "Certificates",
  },
  {
    icon: <FaRegStar className="text-xl text-amber-600" />,
    bg: "bg-amber-100",
    value: 4.8,
    valueClass: "text-amber-600",
    label: "Average Rating",
  },
];

const Page = () => {
  useEffect(() => {
      document.title = "Profile | Lumina";
    }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-300 to-sky-300 mx-7 opacity-90 rounded-3xl px-4 py-8 md:px-12 lg:px-20">
      <div className="bg-white rounded-xl shadow-lg p-6 md:flex gap-8 items-center transition-all hover:shadow-xl">
        <div className="w-32 h-32 mb-6 md:mb-0 flex items-center justify-center bg-blue-100 rounded-full">
          <FaUserAstronaut className="text-6xl text-blue-600" />
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Abhishek Chauhan
              </h2>
              <p className="text-gray-600 mt-1 flex items-center gap-2">
                <FaUserGraduate className="text-blue-500" />
                <span>Frontend Developer • Lifelong Learner</span>
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-sky-400 hover:text-sky-600 transition"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          <p className="text-gray-600 mt-4 max-w-2xl">
            Passionate about web technologies, design systems, and creating
            interactive learning experiences. Currently mastering React
            ecosystem and modern CSS techniques.
          </p>

          <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            <IoMdRocket />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
        {object.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-5 text-center transition hover:shadow-lg hover:-translate-y-1"
          >
            <div
              className={`w-12 h-12 mx-auto ${stat.bg} rounded-full flex items-center justify-center mb-3`}
            >
              {stat.icon}
            </div>
            <h4 className={`text-2xl font-bold ${stat.valueClass}`}>
              {stat.value}
            </h4>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaRegCalendarAlt className="text-blue-500" />
            <span>Recent Activity</span>
          </h3>
          <div className="space-y-4">
            {[
              "Completed React Fundamentals course",
              "Earned JavaScript Mastery certificate",
              "Started Advanced CSS course",
              "Joined Frontend Developers community",
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <p className="text-gray-700">{activity}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaChartLine className="text-green-500" />
            <span>Learning Progress</span>
          </h3>
          <div className="space-y-4">
            {[
              { skill: "React", progress: 85 },
              { skill: "JavaScript", progress: 90 },
              { skill: "CSS", progress: 75 },
              { skill: "TypeScript", progress: 60 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.skill}</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
