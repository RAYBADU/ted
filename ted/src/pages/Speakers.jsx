import React from "react";
import kintsugiLogo from "../assets/kintsugi-wordmark.webp";
import SpeakerCards from "../components/SpeakerCards";
import shaunn from "../assets/shaunn.webp";
import abanga from "../assets/abanga.webp";
import chef from "../assets/chef.webp";
import katya from "../assets/katya.webp";
import kobe from "../assets/kobe.webp";
import enil from "../assets/enil.webp";
import angelos from "../assets/angelos.webp";
import naa from "../assets/naa.webp";
import {motion} from "framer-motion"
const Speakers = () => {
  const speakers = [
    {
      id: 1,
      image: shaunn,
      name: "Shaunn Armah",
      role: "Creative Lead, @shaunnarmah",
      bio: "Shaunn Armah is a Ghana-based storyteller and content creator who uses video to make complex ideas clear and...",
    },
    {
      id: 2,
      image: abanga,
      name: "Abanga  Prosper",
      role: "Co-Founder, Northern Renaissance",
      bio: "Abanga  Prosper is a graduate of UPSA and co-founder of the Northern Renaissance, an organization in Tamale ...",
    },
    {
      id: 3,
      image: chef,
      name: "Chef Abbys",
      role: "Culinary Creator",
      bio: "Chef Abbys is a Ghanaian culinary creator and cultural storyteller known for using food to explore memory, identity, and heritage ...",
    },
    {
      id: 4,
      image: enil,
      name: "ENIL ART (Israel Derrick Aprti)",
      role: "Artist",
      bio: "Enil Art is the creative identity of Israel Derrick Apeti, a Ghanaian visual artist known for transforming everyday human stories into...",
    },
    {
      id: 5,
      image: katya,
      name: "Katya The Destroyer (Katia Osei)",
      role: "Head of Environmental Justice",
      bio: "Katia Osei, known as Katya the Destroyer, is a Ghanaian engineer, researcher, and storyteller who studied bioengineering at Harvard University...",
    },
    {
      id: 6,
      image: kobe,
      name: "Kobe Boujee",
      role: "Digital Storyteller",
      bio: "Kobe Boujee is a Ghanaian digital storyteller and content creator known for redefining African narratives through engaging and thought-provoking ...",
    },
    {
      id: 7,
      image: angelos,
      name: "Angelos Y. Pomevo",
      role: "Dyslexia Advocate",
      bio: "Angelos Y. Pomevo is a polyglot professional speaker with over 8 years of FinTech experience across West Africa and founder of LangTech Academy. ...",
    },
    {
      id: 8,
      image: naa,
      name: "Naa Adzoa Adzeley Boi-Dsane",
      role: "Medical Doctor",
      bio: "Naa Adzoa Adzeley Boi-Dsane is a medical doctor, writer, and passionate advocate for the Deaf community. She created ...",
    },
  ];

  return (
    <motion.section
     initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    
    className=" py-20">
      <header className="text-center py-8 px-8">
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
      <div className="bg-black w-full h-20 flex items-center justify-center space-x-8 px-4 py-4 mt-24">
        <img src={kintsugiLogo} alt="" className="w-40" />
        <p className="uppercase text-slate-300 text-sm">beauty in perfection</p>
      </div>

      {/* speakers profile */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden gap-6 px-4 place-items-center justify-items-center ">
        {speakers.map((speaker) => (
          <SpeakerCards
            key={speaker.id}
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
