import React, { useEffect } from "react";
import Banner from "../../Components/Banner";
import Features from "../../Components/Cards/Features";
import Welcome from "../../Components/Welcome";

const Index = () => {
  useEffect(() => {
    document.title = "Welcome | EduPath";
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Welcome />
      <Banner />
      <Features />
    </div>
  );
};
 
export default Index;
