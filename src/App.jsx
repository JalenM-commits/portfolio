/*
App.jsx
Jalen Mendonca - 301098614
2024

portfolio_jm
*/

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './app.css'

import Navbar from "./components/NavBar/navbar";
import Home from "./pages/Home/home";
import AboutMe from "./pages/AboutMe/aboutme"
import Projects from "./pages/Projects/projects";
import Services from "./pages/Services/services";
import Contact from "./pages/Contact/contact";
import Footer from "./components/Footer/footer";
import NoPage from "./pages/NoPage/nopage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;