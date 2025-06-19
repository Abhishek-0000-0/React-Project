import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Home";
import Footer from "../Footer/Home";

export default function Layout() {
  return (
    <div className="flex flex-col bg-[url('/Images/bg-2.svg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen">
      <Navbar />
      <main className="flex-1 w-full px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
