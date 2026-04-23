import React from "react";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Event from "./pages/Event";
import Speakers from "./pages/Speakers";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="bg-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/speakers" element={<Speakers />} />
      </Routes>

      <div className="">
      <Footer/>

      </div>
    </div>
  );
};

export default App;


// wanna implement some toast when a user submits the email