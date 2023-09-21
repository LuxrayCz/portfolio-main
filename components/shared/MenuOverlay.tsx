import React from "react";
import NavLink from "./NavLink";
interface Props {
  links: {
    title: string;
    path: string;
  }[];
}
const MenuOverlay = ({ links }: Props) => {
  return (
    <ul className="flex md:hidden flex-col py-4 items-center ">
      {links.map((link) => (
        <li key={link.title}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
