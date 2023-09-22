"use client";
import { useState, useRef } from "react";
import ProjectCard from "../cards/ProjectCard";
import ProjectTag from "../cards/ProjectTag";
import { useInView, motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Threads clone",
    description: "Next.js 13.4 full stack app",
    image: "/projects/threads.png",
    tag: ["All", "Next.js"],
    gitUrl: "https://github.com/LuxrayCz/thread-clone",
    previewUrl: "https://thread-clone-beige-three.vercel.app/",
  },
  {
    id: 2,
    title: "Breadit - reddit clone",
    description: "Next.js 13.4 full stack app",
    image: "/projects/breadit.png",
    tag: ["All", "Next.js"],
    gitUrl: "https://github.com/LuxrayCz/thread-clone",
    previewUrl: "https://reddit-clone-two-iota.vercel.app/",
  },
  {
    id: 3,
    title: "Chat app",
    description: "Next.js 13.4 full stack app with sockets",
    image: "/projects/chatapp.png",
    tag: ["All", "Next.js"],
    gitUrl: "https://github.com/LuxrayCz/chat-app-",
    previewUrl: "https://chat-app-flax-ten-74.vercel.app/",
  },
  {
    id: 4,
    title: "Front end for bank",
    description: "React and tailwind project",
    image: "/projects/bankApp.png",
    tag: ["All", "React"],
    gitUrl: "/",
    previewUrl: "https://remarkable-marzipan-cbccc4.netlify.app/",
  },
  {
    id: 5,
    title: "Front end Dashboard",
    description: "React and tailwind project",
    image: "/projects/Dashboard.png",
    tag: ["All", "React"],
    gitUrl: "/",
    previewUrl: "https://cool-gelato-55d770.netlify.app/dashboard",
  },
];
type tags = "All" | "Next.js" | "React";

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [tag, setTag] = useState<tags>("All");

  const handleTab = (newTag: tags) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((p) => p.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  console.log(isInView);
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center item-center gap-2 py-6">
        <ProjectTag isSelected={tag === "All"} name="All" onClick={() => setTag("All")} />
        <ProjectTag isSelected={tag === "Next.js"} name="Next.js" onClick={() => setTag("Next.js")} />
        <ProjectTag isSelected={tag === "React"} name="React" onClick={() => setTag("React")} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((p, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="inital"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: 0.2 * index }}
          >
            <ProjectCard key={p.id} title={p.title} imgUrl={p.image} description={p.description} gitUrl={p.gitUrl} previewUrl={p.previewUrl} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
