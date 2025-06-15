const Card = ({ icon, title, description, features }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col">
    <div className="p-6 flex-grow">
      <div className="flex items-center mb-4">
        <div className="mr-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
      <button className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300">
        Learn More →
      </button>
    </div>
  </div>
);

export default Card;