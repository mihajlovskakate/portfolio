import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects"
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact/Contact"
import ThankYou from "./components/Contact/ThankYou"
import { Routes, Route } from "react-router-dom";




function App() {

   return (
   <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />  
      <Route path="/contact" element={<Contact />} />   
      <Route path="/thankyou" element={<ThankYou />} /> 
    </Routes>
    <Footer />
    </>
  );
}

export default App;
