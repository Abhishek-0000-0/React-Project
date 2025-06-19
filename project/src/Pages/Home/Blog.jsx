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
    <div className="flex flex-col justify-start items-center gap-4">
      <Banner />
      <Sect_1 />
    </div>
  );
};

export default Page;

const Sect_1 = () => {
  return (
    <section className="px-6 py-16 md:px-20 rounded-2xl mx-8 w-fit">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-blue-600 text-sm font-medium uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Popular Articles
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Feature Card */}
          <div className="group cursor-pointer">
            <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl">
              <img
                src="/Images/students.jpg"
                alt="Student learning"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-6 text-gray-900 group-hover:text-blue-600 transition-colors">
              Empowering Students Through Quality Education
            </h3>
            <span className="inline-block mt-3 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Education
            </span>
          </div>

          {/* Right Article Cards */}
          <div className="flex flex-col gap-6">
            {articles.map(({ id, image, title, description, tag }) => (
              <div
                key={id}
                className="flex gap-5 items-center rounded-xl shadow-md bg-white p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-100 hover:border-blue-100"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {description}
                  </p>
                  <span className="inline-block mt-2 bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
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
