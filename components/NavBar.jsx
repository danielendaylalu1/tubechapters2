'use client';
import React, { useState } from 'react';
import { RiMenuFill } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import LanguageSelection from './LanguageSelection';

const NavBar = () => {
  const { t: tNav } = useTranslation();
  const [showNav, setShowNav] = useState(false);
  const navItems = JSON.parse(
    tNav('nav-items').replace(/'/g, '"').replace(/،/g, ',')
  );
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-x-4 items-center">
        <a href="/" className="text-2xl font-bold">
          Tubechapters
        </a>
        <LanguageSelection />
      </div>
      {!showNav ? (
        <RiMenuFill
          size={26}
          className="cursor-pointer block md:hidden min-w-[40px]"
          onClick={() => {
            setShowNav(!showNav);
          }}
        />
      ) : (
        <MdClose
          size={26}
          className="cursor-pointer block md:hidden min-w-[40px]"
          onClick={() => {
            setShowNav(!showNav);
          }}
        />
      )}

      <div
        className={`navbar gap-8 flex flex-col justify-center items-center absolute ${
          showNav ? 'top-14' : 'top-[-100%]'
        } left-0 bg-[#121316]/90 w-[100%] h-[90vh] rounded-b-3xl z-10 md:flex-row md:bg-none md:w-auto md:h-auto md:relative md:top-0`}
      >
        {navItems.map((item) => {
          return (
            <a
              key={item}
              href="#"
              className="font-light text-sm border-b hover:border-b-violet-950"
              onClick={() => {
                setShowNav(false);
              }}
            >
              {item}
            </a>
          );
        })}
      </div>
      <div className="px-4 py-2 border border-[#483b68] rounded-2xl contact">
        <a href="#" className="text-sm">
          {tNav('contact-us')}
        </a>
      </div>
    </div>
  );
};

export default NavBar;
