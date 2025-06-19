import React from "react";
import { FiCheck, FiZap, FiAward, FiGlobe } from "react-icons/fi";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    document.title = "Plans | Lumina";
  }, []);
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "per month",
      features: [
        "Access to basic courses",
        "Community support",
        "Limited downloads",
        "1 project submission/month",
      ],
      popular: false,
      icon: <FiZap className="text-blue-500" />,
    },
    {
      name: "Pro",
      price: "$29.99",
      period: "per month",
      features: [
        "All basic features",
        "Access to pro courses",
        "Priority support",
        "5 project submissions/month",
        "Certificate of completion",
      ],
      popular: true,
      icon: <FiAward className="text-purple-500" />,
    },
    {
      name: "Enterprise",
      price: "$99.99",
      period: "per month",
      features: [
        "All pro features",
        "Unlimited submissions",
        "1-on-1 mentoring",
        "Live Q&A sessions",
        "Custom learning paths",
        "Organization analytics",
      ],
      popular: false,
      icon: <FiGlobe className="text-green-500" />,
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Plan
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Flexible pricing designed to help you grow at every stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? "ring-purple-500" : "border border-gray-200"
              } bg-white`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 transform">
                  POPULAR
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{plan.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h2>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 px-6 rounded-md font-medium relative bottom-0 ${
                    plan.popular
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  } transition`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
