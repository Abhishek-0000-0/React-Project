import { FaCertificate, FaInfinity, FaHeadset, FaMobileAlt } from "react-icons/fa";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="relative p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-300 hover:scale-105 duration-300 overflow-hidden text-center flex flex-col items-center">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 bg-[url(/Images/Feature.jpg)] bg-cover bg-center opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-4xl text-white bg-blue-700 mb-5 p-4 rounded-full shadow-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};


const FeaturesSection = () => {
  const features = [
    {
      icon: <FaCertificate />,
      title: "Get Certificate",
      description:
        "Complete your course and receive a verified certificate to showcase your skills online."
    },
    {
      icon: <FaInfinity />,
      title: "Lifetime Access",
      description:
        "Enjoy unlimited lifetime access to your courses, lessons, and learning resources anytime."
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description:
        "Reach out anytime through live chat or email. Our expert team is always here to help."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Friendly",
      description:
        "Access your courses on any device, whether phone, tablet, or laptop, with full features."
    }
  ];

  return (
    <section className="py-16 px-10 bg-gradient-to-b from-gray-300 via-blue-300 to-red-200 w-full">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
