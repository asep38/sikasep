import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/navbars/Navbars";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import DetailGame from "./pages/detail/dGame/DetailGame";
import Footer from "./components/footer/Footer";
import DetailLandingPage from "./pages/detail/dLandingPage/DetailLandingPage";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbars />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/game/:id" element={<DetailGame />} />
        <Route path="/lp/:id" element={<DetailLandingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
