import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import pexels1 from "../../../assets/pexels1.jpg";
import pexels2 from "../../../assets/pexels2.jpg";
import pexels3 from "../../../assets/pexels3.jpg";

const slides = [
  {
    image: pexels1,
    title: "Discover Local Clubs",
    subtitle:
      "Find photography, hiking, book, and tech clubs near you.",
  },
  {
    image: pexels2,
    title: "Create & Manage Events",
    subtitle:
      "Organize events and manage memberships with ease.",
  },
  {
    image: pexels3,
    title: "Grow Your Community",
    subtitle:
      "Build stronger connections and engage your members.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] w-full overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index].image}
          src={slides[index].image}
          alt=""
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">

        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {slides[index].title}
            </h1>
            <p className="text-lg md:text-xl">
              {slides[index].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Hero;