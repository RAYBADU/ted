import React from "react";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Event from "./pages/Event";
import Speakers from "./pages/Speakers";
import Footer from "./components/Footer";
import SpeakerBio from "./components/SpeakerBio";
import ScrollToTop from "./components/ScrollToTop";
import TicketModal from "./components/TicketModal";
import { useState } from "react";
const App = () => {

const [isTicketModalOpen, setTicketModalOpen] = useState(false)


  return (
    <div className="bg-white">
      <Nav setTicketModalOpen={setTicketModalOpen} />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home setTicketModalOpen={setTicketModalOpen}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/speakers/:id" element = {<SpeakerBio/>}/>
      </Routes>

      <div className="">
      <Footer/>

      </div>
      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={() => setTicketModalOpen(false)}
      />
    </div>
  );
};

export default App;


// wanna implement some toast when a user submits the email
