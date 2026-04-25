import React from "react";
import TedxLogo from "../assets/logo-dark.png";
import Kintsugi from "../assets/kintsugi-wordmark.webp";
import flower from "../assets/flower.webp";
import flowerPot from "../assets/flowerPot.webp";
import { LuMoveRight } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import Timer from "./Timer";


const Hero = ({ setTicketModalOpen }) => {
  


  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative w-full max-w-4xl bg-white px-4 py-24 text-center font-[inter] sm:px-6 md:py-28"
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

        <div className=" shadow-sm mt-8 max-w-96 py-3 mx-auto rounded-full bg-red-50 flex justify-center items-center ">
          <p className="px-4 text-center text-xs font-bold text-red-600 font-[poppins] sm:text-sm">
            <GoDotFill className="inline-block mr-2" />
            EARLY BIRD TICKETS- LIMITED AVAILABILITY
          </p>
        </div>

        {/* button */}

        <button onClick={()=> setTicketModalOpen(true)} className="mt-8 inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-4 text-white transition-colors duration-300 hover:bg-red-700 cursor-pointer sm:min-w-52">
          Get Ticket
          <LuMoveRight className="inline-block ml-2 font-extrabold" />
        </button>
      </motion.section>

      {/* date , info and venue */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 bg-red-600 px-4 py-4 text-center text-[11px] font-bold text-white sm:text-xs md:text-lg"
      >
        <p>7 MAY 2026 </p>
        <p className="text-white/60">|</p>
        <p>8:00AM - 4:00PM </p>
        <p className="text-white/60">|</p>
        <p>SMS AUDITORIUM, UCC</p>
      </motion.div>

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        src={flower}
        alt=""
        className="pointer-events-none absolute left-0 top-12 w-24 sm:w-28 md:w-40 lg:w-60"
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        src={flowerPot}
        alt=""
        className="pointer-events-none absolute bottom-8 right-0 w-28 sm:w-36 md:top-1/2 md:w-56 lg:w-72"
      />

      <motion.p
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.5, delay:0.4}}
      className="text-center px-6 text-slate-600  md:max-w-4xl mt-12">
        Your{" "}
        <span className="text-red-600 font-semibold">
          TEDxUniversityofCapeCoast Membership
        </span>{" "}
        puts you in the room where our collective future unfolds. It helps
        powerful ideas reach the world and makes our non-profit mission
        possible.
      </motion.p>


{/* <h1 className="uppercase font-semibold tracking-wider text-red-600 text-2xl md:text-4xl mt-8 font-[arial]">the countdown is on...</h1> */}


<Timer/>

    </>
  );
};

export default Hero;
