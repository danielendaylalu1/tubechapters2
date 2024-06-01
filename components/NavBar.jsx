import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <a href="/" className="text-xl font-bold">
        Tubechapters
      </a>
      <div className="flex gap-x-8">
        <a
          href="#"
          className="font-light text-sm border-b hover:border-b-violet-950"
        >
          How it works
        </a>
        <a
          href="#"
          className="font-light text-sm border-b hover:border-b-violet-950"
        >
          Pricing
        </a>
        <a
          href="#"
          className="font-light text-sm border-b hover:border-b-violet-950"
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
