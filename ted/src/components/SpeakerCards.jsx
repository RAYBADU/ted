import React from "react";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const SpeakerCards = ({ image, name, role, bio }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeInOut }}
      viewport={{ once: true, amount: 0.2 }}
      className="mt-20 mx-auto w-full h-auto border border-gray-100 shadow-md rounded-2xl bg-white overflow-hidden font-[sans-serif]"
    >
      <div className="relative group overflow-hidden cursor-pointer">
        <img
          src={image}
          alt={name}
          className="h-100 w-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
        />

        {/* red circle */}
        <div
          className="size-80 absolute  rounded-full border-2 border-red-600
                        top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2F
                        opacity-0 scale-75
                        group-hover:opacity-100 group-hover:scale-100
                        transition duration-300"
        ></div>

        <div className="bg-black/5 absolute inset-0 rounded-t-2xl"></div>
      </div>

      {/* names and bio */}
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-red-600 font-semibold text-sm mt-2">{role}</p>
        <p className="text-gray-600 text-sm mt-3 leading-6">{bio}</p>
        <div className="mt-4 text-black font-semibold text-sm">
          <Link to={"/"}>
            View Profle <FaArrowRightLong className="inline-block ml-2 " />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SpeakerCards;
