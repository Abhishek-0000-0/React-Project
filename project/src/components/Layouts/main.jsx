import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Loading from "../Loading";

const Main = () => {
  const navigation = useNavigation();

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      {navigation.state === "loading" && <Loading />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;