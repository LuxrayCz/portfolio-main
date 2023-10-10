import Image from "next/image";
import React from "react";
import Tab from "./Tab";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white items-center py-8 px-4 xl:gap-16 sm:py-16 md:mt-0 mt-16 xl:px-16 mb-20 md:mb-32"
    >
      <div className="">
        <Image src="/about-image.png" alt="About image - computer" width={500} height={500} />
      </div>
      <div className="h-full mt-4 md:mt-0 text-left flex flex-col ">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base md:text-lg">
          I am an 18-year-old student from the Czech Republic. I develop full-stack applications daily. My main goal is to get at least 1% better
          every day. In my amateur career I have come across a lot of different technologies, these are that stuck up with me:
        </p>
        <Tab />
      </div>
    </section>
  );
};

export default AboutSection;
