import React from "react";
import { motion } from "framer-motion";

const LiquidGlassCard = ({ icon, number, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="mt-8 flex min-h-62 w-full max-w-70 items-center justify-center rounded-2xl border border-white/25 bg-white/12 px-5 py-4 text-white backdrop-blur-3xl transition-all duration-300 hover:border-white/30 hover:bg-white/18 hover:scale-[1.05]"
    >
      {/* inner text */}
      <div className="space-y-5">
        <div className="mx-auto size-15 rounded-full bg-white/14 my-5 text-3xl flex items-center justify-center">
          {icon}
        </div>

        <h1 className="text-4xl font-bold">{number}</h1>
        <p className="text-white/80 text-sm">{desc}</p>
      </div>
    </motion.div>
  );
};

export default LiquidGlassCard;
