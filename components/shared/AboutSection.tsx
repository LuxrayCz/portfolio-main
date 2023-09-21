import Image from "next/image";
import React from "react";
import Tab from "./Tab";

const AboutSection = () => {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mb-20 md:mb-32">
      <div className="">
        <Image src="/about-image.png" alt="About image - computer" width={500} height={500} />
      </div>
      <div className="h-full mt-4 md:mt-0 text-left flex flex-col ">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus molestiae deleniti non sunt nobis culpa debitis? Commodi quidem
          modi nobis et veniam quam! Repellendus itaque enim quod ullam, illum recusandae quo est culpa doloribus aliquam provident commodi dolorum?
          Accusantium?
        </p>
        <Tab />
      </div>
    </section>
  );
};

export default AboutSection;
