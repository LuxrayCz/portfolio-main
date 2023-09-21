"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  return (
    <nav className="fix top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 relative">
      <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-4 ">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold bg-gradient-to-r from-primary-400 to-secondary-600 rounded-md">
          <Image src="/logo.png" alt="logo" width={160} height={40} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarIsOpen ? (
            <button
              onClick={() => setNavbarIsOpen(false)}
              className="text-slate-200 flex items-center px-3 py-2 z-10 border rounded border-slate-200 hover:border-white hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarIsOpen(true)}
              className="text-slate-200 flex items-center px-3 py-2 z-10 border rounded border-slate-200 hover:border-white hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu md:block hidden md:w-auto " id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row flex-col md:space-x-8">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarIsOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
