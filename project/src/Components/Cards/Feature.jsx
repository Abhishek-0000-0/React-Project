const Card = ({ icon, title, description }) => {
  return (
    <div className="relative p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-300 hover:scale-105 duration-300 overflow-hidden text-center flex flex-col items-center">
      <div className="absolute inset-0 bg-[url(/Images/bg.svg)] bg-cover bg-center opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="text-4xl text-white bg-blue-700 mb-5 p-4 rounded-full shadow-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Card;
