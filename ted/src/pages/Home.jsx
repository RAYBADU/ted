import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import PricingCard1 from "../components/PricingCard1";
import PricingCard2 from "../components/PricingCard2";
import PricingCard3 from "../components/PricingCard3";
import StandardCard from "../components/StandardCard";
import VipCard from "../components/VipCard";

import { motion } from "framer-motion";

import tedtalks from "../assets/tedtalks.webp";
import discoverysessions2 from "../assets/discoverysessions2.webp";
import meals2 from "../assets/meals2.webp";
import networkingsessions2 from "../assets/Networkingsessions2.webp";
import brandedmerchandise from "../assets/Braandedmerchnadize.webp";
import memberofcommunity2 from "../assets/memberofcommunity2.webp";
import prioritySeating from "../assets/FirstseatReservation.webp";
import vipLounge from "../assets/Accesstoviplounge.webp";
import meetAndGreet from "../assets/meetandgreetsession.webp";
import fastTrack from "../assets/Fasttrackcheckin.webp";
import photosWithSpeakers from "../assets/photoswithspeakers.webp";
import supportsImpact from "../assets/supportsourimpacts.webp";

const Home = () => {
  const standartData = [
    {
      id: 1,
      image: tedtalks,
      title: "TEDx Talks",
      description:
        "Captivating talks from speakers with bold visions of creativity, connection, and innovation.",
    },
    {
      id: 2,
      image: discoverysessions2,
      title: "Discovery Sessions",
      description:
        "Expert-led workshops and immersive experiences designed to spark your curiosity.",
    },
    {
      id: 3,
      image: meals2,
      title: "Meals & Refreshments",
      description:
        "Delectable meals, snacks, and drinks available throughout the conference.",
    },
    {
      id: 4,
      image: networkingsessions2,
      title: "Networking Sessions",
      description:
        "Build meaningful connections with thinkers, creators, and changemakers.",
    },
    {
      id: 4,
      image: brandedmerchandise,
      title: "Branded Merchandise",
      description:
        "Take home exclusive items that reflect the spirit of ideas worth spreading.",
    },
    {
      id: 5,
      image: memberofcommunity2,
      title: "Member of Community",
      description:
        "Join a vibrant community that shares ideas, inspires growth, and celebrates impact.",
    },
  ];

  const vipData = [
    {
      id: 1,
      image: prioritySeating,
      title: "Priority Seating",
      description:
        "Enjoy reserved front-row seating and experience every moment up close.",
    },
    {
      id: 2,
      image: vipLounge,
      title: "VIP Lounge Access",
      description:
        "Premium access to a private space for relaxation and exclusive conversations.",
    },
    {
      id: 3,
      image: meetAndGreet,
      title: "Speaker Meet-and-Greet",
      description:
        "Engage with speakers and special guests in a memorable, personal experience.",
    },
    {
      id: 4,
      image: fastTrack,
      title: "Fast-Track Check-In",
      description:
        "Skip the wait with expedited entry for a seamless arrival experience.",
    },
   
    {
      id: 5,
      image: photosWithSpeakers,
      title: "Photos with Speakers",
      description:
        "Capture exclusive moments with speakers to celebrate the day's inspiration.",
    },
    {
      id: 6,
      image: supportsImpact,
      title: "Supports Our Impact",
      description:
        "Your VIP membership directly supports outreach, career development, and community impact.",
    },
  ];

  return (
    <section className=" py-4 min-h-screen flex flex-col justify-center items-center gap-10 bg-white">
      <Hero />
      <Info
        subtitle="Early Bird Pricing"
        title="Choose Your Experience"
        normal="Early Bird pricing ends soon — seats are filling fast"
      />
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <PricingCard1 />
          <PricingCard2 />
          <PricingCard3 />
        </div>
      </div>

      <Info subtitle="STANDARD & STUDENT" title="What You Will Get" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3">
        {standartData.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <StandardCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
      </div>

      <Info
        subtitle="VIP EXCLUSIVE"
        title="What's Included for VIP"
        normal="Plus all the Standard benefits above
"
      />


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3">
      {vipData.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.3,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <VipCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        </motion.div>
      ))}
      </div>
    </section>
  );
};

export default Home;
