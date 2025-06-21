import Quesion from "../../Components/Questions";
import { useEffect } from "react";
const Page = () => {
  useEffect(() => {
    document.title = "FAQ | Lumina";
  }, []);
  return (
    <>
      <div className="flex flex-col sm:min-h-223 lg:min-h-100 bg-[url('/Images/FAQ.jpg')] bg-cover bg-center">
        <h2 className="text-4xl ml-5 mt-6 font-bold text-blue-800 mb-8">
          Frequently Asked Questions
        </h2>
        <Quesion />
      </div>
    </>
  );
};

export default Page;
