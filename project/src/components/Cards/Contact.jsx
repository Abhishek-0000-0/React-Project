const Card = ({ icon, title, info, description, link, linkText }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <div className="p-8 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="mr-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-2 font-medium">{info}</p>
      <p className="text-gray-500 mb-6 flex-grow">{description}</p>
      <a
        href={link}
        className="mt-auto inline-block text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
      >
        {linkText} →
      </a>
    </div>
  </div>
);

export default Card;