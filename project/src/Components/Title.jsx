const Title = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] bg-[url('/Images/studnet.jpg')] bg-cover bg-center rounded-2xl flex items-center">
      <div className="absolute inset-0 bg-opacity-40 rounded-2xl"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-10 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 text-black">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 w-full">
              Unlock Your Potential Through Learning
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              EduPath connects students with world-class education opportunities
              to help you gain the skills needed for tomorrow's job market.
            </p>

            <div className="md:w-1/2 flex justify-start md:justify-end">
              <button className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition duration-300">
                Explore Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
