import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What courses do you offer?",
      answer: "We offer a wide range of courses including Mathematics, Science, Literature, Computer Programming, and Foreign Languages. Our curriculum is designed to cater to students from elementary to advanced levels."
    },
    {
      question: "How do I enroll in a course?",
      answer: "You can enroll in our courses by visiting our enrollment page, selecting your desired course, and completing the registration process. Payment can be made online through our secure payment gateway."
    },
    {
      question: "Are there any prerequisites for advanced courses?",
      answer: "Yes, some of our advanced courses require completion of beginner or intermediate level courses first. Specific prerequisites are listed on each course description page."
    },
    {
      question: "Can I get a refund if I'm not satisfied with the course?",
      answer: "We offer a 14-day money-back guarantee for all our courses. If you're not satisfied with your purchase within the first two weeks, you can request a full refund through your account dashboard."
    }
  ];

  return (
    <div className="max-w-3xl px-4 py-8 text-left">

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all"
          >
            <button
              className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors duration-200 ${activeIndex === index ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'}`}
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-lg font-medium text-gray-800">{item.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`px-6 bg-white transition-all duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
              }`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
