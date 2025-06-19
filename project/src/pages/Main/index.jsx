import React, { useEffect } from "react";
import Banner from "../../Components/Banner/Main";
import Features from "../../Components/Feature";
import Welcome from "../../Components/Welcome";

const Page = () => {
  useEffect(() => {
    document.title = "Welcome | Lumina";
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Welcome />
      <Banner />
      <Features />
    </div>
  );
};
 
export default Page;
