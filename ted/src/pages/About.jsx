import React from "react";
import teamPhoto1 from "../assets/team-photo-1.webp";
import teamPhoto2 from "../assets/team-photo-2.webp";
import { motion } from "framer-motion";
import Info from "../components/Info";
import LiquidGlassCard from "../components/LiquidGlassCard";

import { FaEye } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import ValueCard from "../components/ValueCard";

import { RiTeamFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";

const About = () => {
  const stats = [
    {
      id: 1,
      number: "4B+",
      icon: <CiDollar className="text-4xl" />,
      desc: "Catalyzed for 49 projects by The Audacious Project.",
    },
    {
      id: 2,
      number: "180M",
      icon: <FaChartLine />,
      desc: "Monthly followers.",
    },
    {
      id: 3,
      number: "2.5B",
      icon: <FaEye />,
      desc: "Global views content shared 400M times in 2023..",
    },
    {
      id: 4,
      number: "1M+",
      icon: <FaGraduationCap />,
      desc: "Educators using TED Ed.",
    },
  ];

  const values = [
    {
      id: 1,
      title: "Community",
      subtitle:
        "We bring together diverse minds from across our campus and beyond to share and discuss ideas.",
      icon: <RiTeamFill className="text-white text-3xl" />,
    },
    {
      id: 2,
      title: "Passion",
      subtitle:
        "We are driven by a deep passion for learning, growth and making a positive impact.",
      icon: <FaHeart className="text-white text-3xl" />,
    },
    {
      id: 3,
      title: "Excellence",
      subtitle:
        "We strive for excellence in everything we do, from speaker selection to event production.",
      icon: <FiAward className="text-white text-3xl" />,
    },
    {
      id: 4,
      title: "Impact",
      subtitle:
        "We aim to create lasting impact through ideas that inspire action and change.",
      icon: <CiGlobe className="text-white text-4xl" />,
    },
  ];

  return (
    <section className="overflow-x-hidden">
      {/* header */}
      <motion.header
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-linear-to-l from-black/80 to-gray-900 py-4 px-4 h-60 md:h-80 text-center mt-18 flex flex-col justify-center w-full space-y-2"
      >
        <p className="text-sm font-semibold tracking-[0.25em] text-red-500">
          ABOUT US
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
          TEDxUniversityofCapeCoast
        </h1>
        <p className="text-gray-300 text-sm md:text-lg">
          Ideas Worth Spreading from Ghana's Intellectual Coast
        </p>
      </motion.header>

      {/* first section */}
      <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center gap-8 px-6 md:flex-row md:justify-center md:px-8">
        {/* text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-3xl"
        >
          <h3 className="text-xl font-semibold ">Introduction</h3>
          <p className="text-gray-600 py-6 leading-8">
            TEDxUniversityofCapeCoast is a vibrant community of students,
            graduates, and professors united by a shared passion for creativity,
            innovation, and the transformative power of ideas. Rooted in a
            strong youth initiative, we aim to connect people, spark
            collaboration, and inspire socio-economic growth through purposeful
            conversations and partnerships. <br /> <br />
            Over the years, we have evolved into one of Ghana's most anticipated
            thought-leadership experiences conceptualized, organized, and led by
            young minds shaping the future. Our platform has become a powerful
            space for visionaries, changemakers, entrepreneurs, academics, and
            students who believe in ideas worth spreading.
          </p>
        </motion.div>

        {/* image */}

        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          src={teamPhoto1}
          alt=""
          className="w-full max-w-lg rounded-lg object-cover"
        />
      </div>

      {/* ------------------------------------------------------------------- */}

      {/* second section */}
      <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center gap-8 px-6 md:flex-row md:justify-center md:px-8">
        {/* text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-3xl"
        >
          <p className="text-gray-600 py-6 leading-8">
            TEDxUniversityofCapeCoast captures the spirit of possibility that
            defines our nation's intellectual coast. The 2025 edition drew
            participants and partners from across Ghana, with remarkable
            representation from Accra and Kumasi. With over 500 in-person
            attendees and thousands engaging online alone this year, our total
            reach surpassed 3,000 participants! Marking a 60% increase in new
            attendees and a 40% overall growth in audience numbers.
          </p>
        </motion.div>

        {/* image */}

        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          src={teamPhoto2}
          alt=""
          className="w-full max-w-lg rounded-lg object-cover"
        />
      </div>
      {/* -------------------------2026 THEME------------------------------------------------------- */}

      <article className="mt-8 h-auto bg-linear-to-t from-black/80 to-gray-900 px-6 py-24 text-center leading-7 md:px-12 lg:px-28 xl:px-56">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-red-600 text-md font-semibold uppercase py-2"
        >
          2026 theme
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-amber-300 font-bold text-3xl md:text-5xl"
        >
          Kintsugi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-gray-100  italic mt-6"
        >
          A symbol of rebirth, resilience, and collective strength
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 text-gray-300 "
        >
          In 2026, under the theme "Kintsugi" — a symbol of rebirth, resilience,
          and collective strength — TEDxUniversityofCapeCoast will amplify its
          impact through immersive exhibitions, bold performances, innovation
          showcases, and youth dialogues that reimagine what's possible. <br />{" "}
          <br /> <br />
          For partners and sponsors, this is more than an event. It's an
          opportunity to align your purpose with the future of leadership,
          technology, sustainability, and creativity in Ghana and beyond.
          Together, we're not just hosting a conference; we're igniting a
          movement by transforming ideas from Cape Coast into a global force for
          progress.
        </motion.p>
      </article>

      {/* -------------ABOUT TED----------------------------------------- */}

      <div className="mt-12">
        <Info subtitle="2026" title="What is TED & TEDx?" />
      </div>

      <article className="mx-auto mt-10 flex w-full max-w-7xl flex-col justify-center gap-8 px-8 md:flex-row md:px-12 lg:px-18">
        {/* first set of text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className=""
        >
          <p className="mt-5 text-gray-600">
            TED, the acronym for "Technology, Entertainment and Design" is a
            global nonprofit organization devoted to{" "}
            <span className="font-semibold text-red-600">
              Ideas Changes Everything
            </span>{" "}
            headquartered in Vancouver, British Columbia, Canada. Started as a
            four-day conference in California 40 years ago (1984), TED has grown
            to support its mission with multiple initiatives.
            <br /> <br /> <br />
            The two annual TED Conferences invite the world's leading thinkers
            and doers to speak for 18 minutes or less. Many of these talks are
            given at TED's annual conference in Vancouver, British Columbia, and
            made available, free, on TED.com.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="mt-5 text-gray-600">
            TED, a platform for sharing ideas, crafted TEDx, a program that
            facilitates local and independent events that aspire to create
            TED-like experiences. Our event, TEDxUniversityofCapeCoast is a
            platform where TED Talks and live speakers inspire meaningful
            discussions and connections.
            <br /> <br /> <br />
            While the TED Conference provides general direction for the TEDx
            program, individual TEDx events, including ours, are self-organized.
            It's important to note that TEDx Organizers do not host events for
            political reasons, monetary gain, or personal profit. Rather, they
            believe in the potential of ideas to transform the world. TEDx
            events are community-driven, cooperative, and encourage innovation,
            thought leadership, and visionary insight.{" "}
            <span className="text-black font-semibold">
              It's worth mentioning that obtaining a TEDx license is free of
              cost.
            </span>
          </p>
        </motion.div>
      </article>

      {/* -----------------TED IMPACTs ----------------------- */}

      <article className="bg-red-600 py-12 px-4 h-auto text-center space-y-3 mt-14">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="uppercase text-lg font-semibold text-white tracking-wider"
        >
          ted impacts
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-2xl md:text-4xl font-semibold text-white"
        >
          Ideas That Create Riple Effects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-sm leading-8 text-white/80 md:px-16 lg:px-32"
        >
          In a world that can feel dark and overwhelming, these ideas have
          ripple effects of many magnitudes, pointing toward the possibility of
          a better future for people, communities and humanity at large.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((stat) => (
            <LiquidGlassCard
              key={stat.id}
              number={stat.number}
              icon={stat.icon}
              desc={stat.desc}
            />
          ))}
        </div>
      </article>

      {/* our values */}
      <div className="py-8">
      <Info subtitle="OUR VALUES" title="What Drives Us" />

      </div>

      <div className="py-24 px-8 bg-white flex flex-wrap items-center gap-8">
        {values.map((value) => (
          <ValueCard
            key={value.id}
            title={value.title}
            subtitle={value.subtitle}
            icon={value.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
