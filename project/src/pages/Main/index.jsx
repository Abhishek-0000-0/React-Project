import React, { useEffect } from "react";
import Banner from "../../Components/Banner";

const Index = () => {
  useEffect(() => {
    document.title = "Welcome | EduPath";
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-50">
      <section className="w-full max-w-6xl px-6 py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-amber-500">Lumina</span> - Your
          Gateway to Knowledge
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Discover a transformative learning experience designed to help you
          achieve your academic and professional goals. Join our community of
          passionate learners and expert educators.
        </p>
      </section>
      <Banner />
    </div>
  );
};

export default Index;
