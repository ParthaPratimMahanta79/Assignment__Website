import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Skills from "./pages/Skills";  
import Weather from "./pages/Weather";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Education"element={<Education/>}/>
        <Route path="/Skills"element={<Skills/>}/>
        <Route path="/Weather" element={<Weather />} />
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;