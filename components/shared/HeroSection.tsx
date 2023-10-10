"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section id="#" className="h-[85vh]  grid place-items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-9 gap-y-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 ">Hello, I am</span>
            <br className="mb-4" />

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Filip Šenk",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Programmer",
                1000,
                "Front end developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl">
            I have developed many types of applications. Both front-end and back-end. My main tools are Next.js 13.4 and Tailwind
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-200  hover:bg-slate-200 text-white font-[500]">
              Hire me
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center"
        >
          <div className="relative rounded-full bg-[#181818] w-[250px] lg:w-[350px] lg:h-[350px] h-[250px] ">
            <Image
              src="/hero-pic-try.jpeg"
              alt="Hero Image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
