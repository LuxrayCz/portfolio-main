import React from "react";

interface Props {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: Props) => {
  const className = isSelected
    ? "rounded-full border-2 border-primary-500 px-6 py-3 text-xl cursor-pointer"
    : "rounded-full text-[#ADB7BE] border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer";
  return (
    <button onClick={onClick} className={className}>
      {name}
    </button>
  );
};

export default ProjectTag;
