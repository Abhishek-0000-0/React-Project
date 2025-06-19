import React, { useEffect } from "react";
import { FiCalendar, FiMapPin, FiClock, FiUser } from "react-icons/fi";

const Page = () => {
  useEffect(() => {
      document.title = "Events | Lumina";
    }, []);
  const events = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "2023-06-15",
      time: "10:00 AM - 2:00 PM",
      location: "Online",
      speaker: "Jane Smith",
      description:
        "Learn modern web development techniques with hands-on exercises",
      image: "/Images/workshop.jpg",
      price: "Free",
    },
    {
      id: 2,
      title: "Data Science Conference",
      date: "2023-06-22",
      time: "9:00 AM - 5:00 PM",
      location: "Convention Center, New York",
      speaker: "Dr. John Doe",
      description:
        "Annual gathering of data science professionals and enthusiasts",
      image: "/Images/conference.jpg",
      price: "$99",
    },
    {
      id: 3,
      title: "Mobile App Hackathon",
      date: "2023-07-05",
      time: "8:00 AM - 8:00 PM",
      location: "Tech Hub, San Francisco",
      speaker: "Alex Johnson",
      description: "24-hour coding competition for mobile app developers",
      image: "/Images/hackathon.jpg",
      price: "$49",
    },
  ];

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Upcoming Events
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Join our community events to learn and network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-900">
                    {event.title}
                  </h2>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      event.price === "Free"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {event.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center">
                    <FiCalendar className="mr-2 text-gray-500" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-2 text-gray-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="mr-2 text-gray-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FiUser className="mr-2 text-gray-500" />
                    <span>Speaker: {event.speaker}</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Can't find what you're looking for?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Host Your Own Event
              </h3>
              <p className="text-gray-600 mb-4">
                Want to share your knowledge with our community? Apply to host a
                workshop or talk.
              </p>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md transition">
                Become a Speaker
              </button>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Get Event Updates
              </h3>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter to stay informed about upcoming
                events.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-r-md transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
