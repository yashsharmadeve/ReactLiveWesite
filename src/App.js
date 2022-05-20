
import Footer from "./components/Footer";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
     
      <Navigation/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="contacts" element={<Contacts/>} />
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
