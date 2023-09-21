"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_CONTENT = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js 13</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Gymnázium Jana Blahoslava</li>
      </ul>
    ),
  },
];

const Tab = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id: string) => {
    startTransition(() => {
      setActiveTab(id);
    });
  };

  return (
    <>
      <div className="flex mt-8">
        <TabButton selectTab={() => handleTabChange("skills")} active={activeTab === "skills"}>
          Skills
        </TabButton>
        <TabButton selectTab={() => handleTabChange("education")} active={activeTab === "education"}>
          Education
        </TabButton>
        {/* TODO LATER */}
        {/* <TabButton selectTab={() => handleTabChange("experience")} active={activeTab === "experience"}>
          Experience
        </TabButton> */}
      </div>
      <div className="mt-8">{TAB_CONTENT.find((tab) => tab.id === activeTab)?.content}</div>
    </>
  );
};

export default Tab;
