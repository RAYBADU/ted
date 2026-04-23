import React from "react";
import { motion } from "framer-motion";

const ValueCard = ({ title, subtitle, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white w-80 h-auto mx-auto rounded-xl shadow-md hover:shadow-lg border border-slate-100 transition-all duration-300 text-center py-8 px-4 space-y-5 "
    >
      {/* icon */}
      <div className="bg-red-600 grid place-items-center size-18 mx-auto rounded-full shadow-sm shadow-red-600">
        {icon}
      </div>

      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{subtitle}</p>
    </motion.div>
  );
};

export default ValueCard;
