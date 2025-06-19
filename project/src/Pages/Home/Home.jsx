import { Link } from "react-router-dom";
import { useEffect } from "react";
import Banner from "../../Components/Banner/Home";
import Title from "../../Components/Title";
import {
  Topics,
  Recommend,
  Learn,
} from "../../assets/Data/Home";
import Card1 from "../../Components/Cards/Course_1";
import Card2 from "../../Components/Cards/Course_2";

const Page = () => {
  useEffect(() => {
    document.title = "Home | Lumina";
  }, []);
  return (
    <section className="flex flex-col items-center w-full">
      <Banner />

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <Title />
      </div>
      <Section_1 />
      <Section_2 />
      <Last />
    </section>
  );
};

export default Page;

const Section_1 = () => {
  return (
    <section className="w-full max-w-6xl px-6 py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Let's start learning
        </h2>
        <a
          href="/mylearning"
          className="text-purple-700 font-medium hover:underline"
        ></a>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {Learn.map((item, index) => (
          <Card2 key={index} {...item} buttonText="Start now" />
        ))}
      </div>
    </section>
  );
};

const Section_2 = () => {
  return (
    <div className="w-full">
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Highly recommended for you
        </h2>
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6">
            {Recommend.map((course) => (
              <Card1
                key={course.id}
                {...course}
                overrideTitle="Highly Recommended"
                id={course.id}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Last = () => {
  return (
    <section className="w-full max-w-6xl px-6 py-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Topics recommended for you
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Topics.map((topic, index) => (
          <button
            key={index}
            className="bg-white shadow-sm border border-gray-200 rounded-lg p-4 text-center font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-800 transition"
          >
            {topic}
          </button>
        ))}
      </div>
    </section>
  );
};
