import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card1 from "../../Components/Cards/Course_1";
import {
  WEB,
  DATASCIENCE,
  MOBILE,
  GAME,
  DATABASE,
} from "../../assets/Data/Courses";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const courseCategories = {
  1: { name: "Web Development", data: WEB },
  2: { name: "Data Science", data: DATASCIENCE },
  3: { name: "Mobile Development", data: MOBILE },
  4: { name: "Game Development", data: GAME },
  5: { name: "Database Design", data: DATABASE },
};

export default function Page() {
  const { id } = useParams();
  const category = courseCategories[parseInt(id)];

  useEffect(() => {
    document.title = ` Courses | ${category.name}`;
  }, [category]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {category?.name || "Unknown Category"}
        </h1>
        <Link
          to="/home"
          className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
        >
          <FiArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          {category
            ? `${category.data.length} courses available`
            : "No courses found"}
        </p>
      </div>

      {category ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.data.map((course, index) => (
            <Card1
              key={index}
              {...course}
              className="h-full"
              category={category.name}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium text-gray-700 mb-4">
            No courses found for this category
          </h2>
          <Link
            to="/courses"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Browse All Courses
          </Link>
        </div>
      )}
    </div>
  );
}
