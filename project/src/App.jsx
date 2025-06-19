import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Index from "./Pages/Main";
import About from "./Pages/Main/About";
import Contact from "./Pages/Main/Contact";
import Services from "./Pages/Main/Services";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Home from "./Pages/Home/Home";
import Main from "./Components/Layouts/Main";
import Auth from "./Components/Layouts/Auth";
import Layout from "./Components/Layouts/Home";
import FAQ from "./Pages/Main/FAQ";
import Blog from "./Pages/Home/Blog";
import Course from "./Pages/Home/Courses";
import Instructor from "./Pages/Home/Instructor";
import Pricing from "./Pages/Home/Price";
import Events from "./Pages/Home/Event";
import Profile from "./Pages/Home/Profile";

const router = createBrowserRouter(
  [
    {
      element: <Main />,
      children: [
        { path: "/", element: <Index /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/services", element: <Services /> },
        { path: "/faq", element: <FAQ /> },
      ],
    },
    {
      element: <Auth />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
    {
      element: <Layout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/blog", element: <Blog /> },
        { path: "/courses/:id", element: <Course />},
        { path: "/instructor", element: <Instructor />},
        { path: "/events", element: <Events />},
        { path: "/price", element: <Pricing />},
        { path: "/profile", element: <Profile />}
      ],
    },
    { path: "*", element: <NotFound /> },
  ],
  {
    future: { v7_startTransition: true }, // Required for useNavigation
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
