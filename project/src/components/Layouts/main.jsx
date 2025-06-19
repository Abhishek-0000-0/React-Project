import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Main";
import Footer from "../Footer/Main";

const Layout = () => {

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;