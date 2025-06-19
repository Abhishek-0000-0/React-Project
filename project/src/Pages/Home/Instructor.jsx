import Card from "../../Components/Cards/Instructor";
import { Instructors } from "../../assets/Data/Instructor";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.title = "Instructors | Lumina";
  }, []);
  return (
    <div className="rounded-3xl mx-auto min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet Our Instructors
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Learn from industry experts with real-world experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Instructors.map((instructor, index) => (
            <Card key={index} instructor={instructor} />
          ))}
        </div>

        <div className="mt-16 text-center bg-white/90 rounded-2xl py-2.5">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to become an instructor?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our team of expert educators and share your knowledge with
            thousands of students worldwide.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
