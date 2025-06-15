import { Outlet } from "react-router-dom";

const Layout = () => {
  return <main className="text-3xl"><Outlet /></main>;
};

export default Layout;