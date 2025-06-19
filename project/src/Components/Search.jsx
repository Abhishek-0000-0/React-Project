import { useState } from 'react';
import coursesRawData from '../assets/Data/Courses.json';
import { FiSearch, FiX } from 'react-icons/fi';
import Card from './Cards/Course_1';

const SearchModule = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const allCourses = coursesRawData.courses;

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (!term) {
      setSearchResults([]);
      return;
    }

    const results = allCourses.filter(course =>
      course.title.toLowerCase().includes(term) ||
      course.instructor.toLowerCase().includes(term) ||
      course.topic?.toLowerCase().includes(term)
    );

    setSearchResults(results);
  };

  const handleFocus = () => setIsFocused(true);
  const handleClose = () => {
    setIsFocused(false);
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <>
      {/* Compact Search Box inside Navbar */}
      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="Search..."
          onFocus={handleFocus}
          className="w-64 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Fullscreen Overlay Search */}
      {isFocused && (
        <div className="fixed inset-0 z-50 bg-white/95 overflow-y-auto p-6 md:p-10">
          <div className="max-w-5xl mx-auto">
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={handleClose}
                className="text-2xl text-gray-600 hover:text-red-500 transition"
              >
                <FiX />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative mb-8">
              <FiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                autoFocus
                placeholder="Search courses, instructors, topics..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-14 py-4 text-lg border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Search Results */}
            <div>
              {searchResults.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {searchResults.map((course) => (
                    <Card key={course.id} {...course} />
                  ))}
                </div>
              ) : searchTerm ? (
                <p className="text-center text-gray-500">No courses found for "{searchTerm}".</p>
              ) : (
                <p className="text-center text-gray-400">Start typing to search...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModule;
