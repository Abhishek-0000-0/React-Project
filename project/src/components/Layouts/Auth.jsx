// src/layouts/AuthLayout.jsx
import {
  FaGraduationCap,
  FaLightbulb,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Column - Information */}
      <div className="bg-[url(/Images/auth-2.jpg)] bg-cover bg-center hidden lg:block w-1/2 p-12 text-gray-100">
        <div className="flex items-center justify-center mb-8">
          <FaGraduationCap className="text-3xl mr-3" />
          <span className="text-4xl font-bold">EduPath</span>
        </div>

        <div className="max-w-md mx-auto h-[500px] flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to EduPath</h2>
          <p className="text-lg mb-10">
            Join thousands of students who are transforming their lives through
            education.
          </p>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 px-6 sm:px-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center lg:hidden mb-8">
            <div className="flex items-center">
              <FaGraduationCap className="text-blue-600 text-3xl mr-3" />
              <span className="text-2xl font-bold text-gray-800">EduPath</span>
            </div>
          </div>

          <div className="bg-white lg:bg-transparent py-8 px-4 shadow-lg lg:shadow-none sm:rounded-xl sm:px-10">
            <Outlet />
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} EduPath. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
