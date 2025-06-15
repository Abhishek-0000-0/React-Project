import { FaLightbulb } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side Image Panel (Large Screens Only) */}
      <div className="bg-[url(/Images/auth-2.jpg)] bg-cover bg-center hidden lg:block w-1/2 p-12 text-white">
        <div className="flex items-center justify-center mb-8">
          <FaLightbulb className="text-3xl mr-3 text-amber-300" />
          <span className="text-4xl font-bold text-orange-500">Lumina</span>
        </div>

        <div className="max-w-md mx-auto h-[500px] flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to Lumina</h2>
          <p className="text-lg mb-10">
            Join thousands of students who are transforming their lives through
            education.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative flex flex-col justify-center py-12 px-6 sm:px-12">
        <div className="absolute inset-0 bg-[url(/Images/auth-1.jpg)] bg-cover bg-center lg:bg-none"></div>
        <div className="absolute inset-0 bg-white/30 lg:bg-transparent"></div>

        <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center lg:hidden mb-8">
            <div className="flex items-center">
              <FaLightbulb className="text-amber-300 text-3xl mr-3" />
              <span className="text-2xl font-bold text-orange-500 text-center">
                Lumina
              </span>
            </div>
          </div>

          <div className="py-8 px-4 shadow-lg lg:shadow-none sm:rounded-xl sm:px-10 bg-white/60 lg:bg-transparent">
            <Outlet />
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} EduPath. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
