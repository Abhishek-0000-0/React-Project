import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | EduPath";
  }, []);
  return <div>Home</div>;
};

export default Home;
