"use client";
import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full">
      <a href="/" className="text-xl font-bold">
        Tubechapters
      </a>
      {!showNav ? (
        <RiMenuFill
          size={26}
          className="cursor-pointer block md:hidden"
          onClick={() => {
            setShowNav(!showNav);
          }}
        />
      ) : (
        <MdClose
          size={26}
          className="cursor-pointer block md:hidden"
          onClick={() => {
            setShowNav(!showNav);
          }}
        />
      )}

      <div
        className={`navbar gap-8 flex flex-col justify-center items-center absolute ${
          showNav ? "top-14" : "top-[-100%]"
        } left-0 bg-[#121316]/90 w-[100%] h-[70vh] z-10 md:flex-row md:bg-none md:w-auto md:h-auto md:relative md:top-0`}
      >
        <a
          href="#"
          className="font-light text-sm border-b hover:border-b-violet-950"
          onClick={() => {
            setShowNav(false);
          }}
        >
          How it works
        </a>
        <a
          href="#"
          className="font-light text-sm border-b hover:border-b-violet-950"
          onClick={() => {
            setShowNav(false);
          }}
        >
          Pricing
        </a>
        <a
          href="#"
          className="font-light text-sm border-b hover:border-b-violet-950"
          onClick={() => {
            setShowNav(false);
          }}
        >
          About us
        </a>
      </div>
      <div className="px-4 py-2 border border-[#483b68] rounded-2xl contact">
        <a href="#" className="text-sm">
          contact us
        </a>
      </div>
    </div>
  );
};

export default NavBar;
