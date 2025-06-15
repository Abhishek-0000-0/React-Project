import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Main";
import About from "./pages/Main/About";
import Contact from "./pages/Main/Contact";
import Services from "./pages/Main/Services";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Main from "./components/Layouts/main";
import Auth from "./components/Layouts/Auth";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>
        <Route element={<Auth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}
