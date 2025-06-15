import { FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { useEffect } from "react";
import Card from "../../components/Cards/Services";

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services | EduPath";
  }, []);
  const services = [
    {
      icon: <FaChalkboardTeacher className="text-blue-600 text-4xl" />,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals and academic experts with real-world experience.",
      features: [
        "Interactive video lectures",
        "Live Q&A sessions",
        "Personalized feedback",
      ],
    },
    {
      icon: <FaLaptopCode className="text-green-600 text-4xl" />,
      title: "Tech & Coding Programs",
      description: "Master in-demand tech skills with our comprehensive coding curriculum.",
      features: [
        "Web development",
        "Data science",
        "Mobile app development",
        "Cloud computing",
      ],
    },
    {
      icon: <MdScience className="text-purple-600 text-4xl" />,
      title: "STEM Education",
      description: "Engaging science, technology, engineering, and math programs for all ages.",
      features: [
        "Hands-on experiments",
        "Project-based learning",
        "Competition preparation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[url(/Images/services.jpg)] bg-cover bg-center w-full relative text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Educational Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover a world of learning opportunities tailored to your needs
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Comprehensive Learning Solutions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default ServicesPage;
