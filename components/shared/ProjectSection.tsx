"use client";
import { useState, useRef } from "react";
import ProjectCard from "../cards/ProjectCard";
import ProjectTag from "../cards/ProjectTag";
import { useInView, motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
type tags = "All" | "Web" | "Mobile";

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
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center item-center gap-2 py-6">
        <ProjectTag isSelected={tag === "All"} name="All" onClick={() => setTag("All")} />
        <ProjectTag isSelected={tag === "Web"} name="Web" onClick={() => setTag("Web")} />
        <ProjectTag isSelected={tag === "Mobile"} name="Mobile" onClick={() => setTag("Mobile")} />
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
