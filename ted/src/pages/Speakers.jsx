import React from "react";
import kintsugiLogo from "../assets/kintsugi-wordmark.webp";
import SpeakerCards from "../components/SpeakerCards";

import { BsArrowDown } from "react-icons/bs";
import { speakers } from "../data/speakers";

import { motion } from "framer-motion";
const Speakers = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className=" py-20"
    >
      <header className="text-center py-8 px-8 mt-5">
        <h5 className="font-semibold text-red-600 uppercase tracking-widest text-sm">
          tedxucc 2026
        </h5>
        <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold mt-8">
          Meet Our <span className="font-bold text-red-600 ">Speakers</span>
        </h1>
        <p className="mt-4 text-gray-500">
          Visionaries, creators, and changemakers who embody the spirit of
          Kintsugi — <br /> turning life's cracks into golden seams of wisdom.
        </p>

        <hr className="w-20 border-2 border-red-600 mx-auto mt-8" />
      </header>

      {/* kintsugi wordwrap */}
           <div className="bg-black w-full h-14 flex items-center justify-center space-x-10 px-4 py-4 mt-24">
             <img src={kintsugiLogo} alt="" className="w-30 " />
             <p className="uppercase text-slate-300 text-xs">beauty in perfection</p>
           </div>

      <motion.div
        initial={{ opacity: 1, y: 20 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <BsArrowDown className="mx-auto mt-8 text-6xl text-red-600" />
      </motion.div>

      {/* speakers profile */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden gap-6 px-4 place-items-center justify-items-center ">
        {speakers.map((speaker) => (
          <SpeakerCards
            key={speaker.id}
            id={speaker.id}
            image={speaker.image}
            name={speaker.name}
            role={speaker.role}
            bio={speaker.bio}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Speakers;
