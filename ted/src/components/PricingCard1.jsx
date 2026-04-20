import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { motion } from "framer-motion";

const PricingCard1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className="h-full w-full max-w-sm mx-auto bg-red-600 rounded-2xl px-6 py-8 text-white font-[poppins]"
    >
      <div className="max-w-30 px-1 py-2 text-center bg-red-400/50 rounded-full uppercase text-sm tracking-wide font-semibold">
        <FaFire className="inline mr-2" /> Early Bird
      </div>
      <p className="tracking-widest uppercase mt-4 text-sm font-medium">
        Membership level
      </p>
      <p className="font-bold text-3xl mt-2">Student</p>
      <h2 className="text-2xl font-bold mt-2">
        GH₵ <span className="text-4xl">50</span>
      </h2>

      {/* benefits */}

      <p className="mt-2 text-white/90 text-sm">
        <IoIosCheckmark className="inline mr-2 " /> Access to all TEDx talks
      </p>
      <p className="mt-2 text-white/90 text-sm">
        <IoIosCheckmark className="inline mr-2" /> Exhibition & showcase access
      </p>
      <p className="mt-2 text-white/90 text-sm">
        <IoIosCheckmark className="inline mr-2" /> Meals & refreshments
      </p>
      <p className="mt-2 text-white/90 text-sm">
        <IoIosCheckmark className="inline mr-2" /> Digital QR ticket
      </p>

      {/* notice glass */}
      <div className="bg-white/20 backdrop-blur-2xl mx-auto w-auto h-auto mt-6 rounded-xl px-4 py-3 text-sm">
        <p className="font-bold">Please note:</p>
        <p className="mt-2">
          <LuDot className="inline mr-2" /> Student status verified at entry
          with a valid student ID.
        </p>
        <p className="mt-2">
          <LuDot className="inline mr-2" /> Open to students from any basic to
          tertiary institution.
        </p>
        <p className="mt-2">
          <LuDot className="inline mr-2" /> Limited availability — memberships
          will sell out.
        </p>
      </div>

      {/* button */}
      <div className="flex justify-center mt-6">
        <button className="bg-white text-red-600 hover:bg-gray-200 font-bold py-4 px-4 rounded-full w-full cursor-pointer transition duration-300">
          Reserve Seat <FaArrowRightLong className="inline ml-2" />
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard1;
