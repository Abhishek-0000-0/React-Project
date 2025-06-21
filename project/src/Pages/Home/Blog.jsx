import React, { useEffect } from "react";
import Banner from "../../Components/Banner/Blog";

const articles = [
  {
    id: 1,
    image: "/Images/code.jpg",
    title: "Master Frontend with React",
    description:
      "Step-by-step guide to becoming proficient in React.js and UI design.",
    tag: "Development",
  },
  {
    id: 2,
    image: "/Images/exam.jpg",
    title: "Ace Your Exams with Smart Techniques",
    description:
      "Learn study methods that actually work, backed by science and experience.",
    tag: "Productivity",
  },
  {
    id: 3,
    image: "/Images/teacher.jpg",
    title: "Learn from Industry Experts",
    description:
      "Get insights from professional instructors and real-world mentors.",
    tag: "Mentorship",
  },
];

const Page = () => {
  useEffect(() => {
    document.title = "Blog | Lumina";
  }, []);
  return (
    <div className="flex flex-col justify-start items-center gap-4 w-full">
      <Banner />
      <Sect_1 />
    </div>
  );
};

export default Page;

const Sect_1 = () => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center md:text-left">
          <span className="text-blue-600 text-xs sm:text-sm font-medium uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Popular Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <div className="group cursor-pointer w-full">
            <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl w-full">
              <img
                src="/Images/students.jpg"
                alt="Student learning"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-6 text-gray-900 group-hover:text-blue-600 transition-colors">
              Empowering Students Through Quality Education
            </h3>
            <span className="inline-block mt-2 sm:mt-3 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Education
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
            {articles.map(({ id, image, title, description, tag }) => (
              <div
                key={id}
                className="flex xs:flex-row gap-3 sm:gap-4 items-start rounded-lg sm:rounded-xl shadow-sm sm:shadow-md bg-white p-3 sm:p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-100 hover:border-blue-100 w-full"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-md sm:rounded-lg"
                />
                <div className="w-full xs:flex-1">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2">
                    {description}
                  </p>
                  <span className="inline-block mt-2 bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};