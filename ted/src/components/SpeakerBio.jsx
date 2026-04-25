import React from "react";
import { useParams, Link } from "react-router-dom";
import { speakers } from "../data/speakers";
import Speakers from "../pages/Speakers";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import kintsugiLogo from "../assets/kintsugi-wordmark.webp";
import flowerPot from "../assets/flowerPot.webp";

const SpeakerBio = () => {
  const { id } = useParams();

  const speaker = speakers.find((s) => s.id === parseInt(id));

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      className="mt-12 py-10"
    >
      <div className="ml-10 my-5 text-gray-800 hover:font-semibold hover:text-red-600 transition-all duration-300 ">
        <Link to="/speakers">
          <BsArrowLeft className="inline " /> Back
        </Link>
      </div>

      {/* flex container for image and text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center  px-4">
        {/* image */}
        <div className="size-80 md:size-100 border-3 shadow-sm shadow-red-600/30 border-red-600 rounded-full items-center justify-center mx-auto md:mx-0">
          <img
            src={speaker.image}
            alt=""
            className="rounded-full w-full h-full object-cover mx-auto p-1"
          />
        </div>
        {/* name and role */}
        <div className="text-center mt-4">
          <p className="text-red-600 uppercase tracking-widest font-semibold text-sm md:text-left">
            speaker
          </p>
          <h1 className="font-bold text-2xl md:text-4xl mt-5 md:text-left">
            {speaker.name}
          </h1>
          <h3 className="text-red-600 font-medium md:text-left">
            {speaker.role}
          </h3>
          <hr className="w-10 mx-auto mt-4 border-2 md:ml-0 border-red-600 " />
          <p className="mt-16 text-gray-600 italic md:text-left leading-7 line-clamp-4">
            {speaker.bio}
          </p>
        </div>
      </div>

      {/* kintsugi wordwrap */}
      <div className="bg-black w-full h-10 flex items-center justify-center space-x-10 px-4 py-4 mt-24">
        <img src={kintsugiLogo} alt="" className="w-30 " />
        <p className="uppercase text-slate-300 text-xs">beauty in perfection</p>
      </div>

      <div className="px-3 mt-8 flex flex-col md:flex-row items-center justify-center">
        <div className="px-8">
          <h3 className="text-red-600 font-semibold tracking-widest text-sm uppercase ">
            about
          </h3>
          <h1 className="mt-4 text-xl md:text-3xl font-bold">{speaker.name}</h1>
          <p className="mt-4 text-gray-600 leading-10 md:w-[80%]">
            {speaker.bio}
          </p>
        </div>

        <img
          src={flowerPot}
          alt=""
          className="w-80 opacity-20 hidden md:block"
        />
      </div>

      

    </motion.section>
  );
};

export default SpeakerBio;
