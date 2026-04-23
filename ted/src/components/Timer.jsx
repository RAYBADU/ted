import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Timer = () => {
  const targetDate = new Date("May 7, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert time
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      viewport={{ once: true, amount: 0.4 }}
      className="bg-red-600 shadow-md shadow-black/30 size-80 md:size-120 lg:size-150 rounded-full grid place-items-center text-white font-[calibri]"
    >
      <h1 className=" text-3xl md:text-6xl lg:text-7xl text-center font-bold">
        {days}d {hours}h {minutes}m {seconds}s
      </h1>
    </motion.div>
  );
};

export default Timer;
