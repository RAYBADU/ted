import React from "react";
import TedxLogo from "../assets/logo-dark.png";
import Kintsugi from "../assets/kintsugi-wordmark.webp";
import flower from "../assets/flower.webp";
import flowerPot from "../assets/flowerPot.webp";
import { LuMoveRight } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="  max-w-4xl text-center py-30 relative font-[inter] px-6 bg-white"
      >
        <img
          src={TedxLogo}
          alt="Logo"
          className="w-50 md:w-70 lg:w-90 mx-auto pb-5"
        />
        <img
          src={Kintsugi}
          alt="Kintsugi"
          className="w-40 md:w-60 lg:w-80 mx-auto pb-4"
        />
        <h1 className="text-lg md:text-xl font-semibold tracking-widest">
          Beauty In Imperfection
        </h1>
        <h1 className="text-3xl md:text-4xl  mt-4 font-semibold tracking-wide text-center">
          Reserve your seat for{" "}
          <span className="text-red-600 font-bold">TEDxUCC 2026</span>
        </h1>
        <p className="text-gray-500 mt-4 text-center">
          Be in the room where bold ideas meet meaningful connections
        </p>
        <p className="text-gray-500 mt-2 text-center">
          Secure your Early Bird ticket before they're gone
        </p>

        {/* alert box */}

        <div className="border border-red-300 shadow-md mt-8 max-w-96 py-3 mx-auto rounded-full bg-red-100 flex justify-center items-center ">
          <p className="text-center text-sm font-bold text-red-600  font-[poppins]">
            <GoDotFill className="inline-block mr-2" />
            EARLY BIRD TICKETS- LIMITED AVAILABILITY
          </p>
        </div>

        {/* button */}

        <button className="bg-red-600 font-semibold hover:font-bold cursor-pointer hover:bg-red-700 transition-colors duration-300 text-white px-8 py-4 rounded-full mt-8 my-20 max-md:w-50 z-5 absolute -translate-x-1/2 ">
          Get Tickets{" "}
          <LuMoveRight className="inline-block ml-2 font-extrabold" />
        </button>
      </motion.section>

      {/* date , info and venue */}
      <div className="bg-red-600 w-full h-16 text-center text-white font-bold flex justify-center items-center text-xs md:text-lg  space-x-4">
        <p>7 MAY 2026 </p>
        <p className="text-white/60">|</p>
        <p>8:00AM - 4:00PM </p>
        <p className="text-white/60">|</p>
        <p>SMS AUDITORIUM, UCC</p>
      </div>

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        src={flower}
        alt=""
        className="w-30 md:w-40 lg:w-60 absolute top-5 left-0"
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}

        src={flowerPot}
        alt=""
        className="w-40 md:w-65 lg:w-80 absolute right-0 bottom-12 md:top-1/2"
      />

      <p className="text-center px-6 text-slate-600  md:max-w-4xl mt-12">
        Your{" "}
        <span className="text-red-600 font-semibold">
          TEDxUniversityofCapeCoast Membership
        </span>{" "}
        puts you in the room where our collective future unfolds. It helps
        powerful ideas reach the world and makes our non-profit mission
        possible.
      </p>
    </>
  );
};

export default Hero;
