import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-4 sm:text-3xl ml-2">BRAND.</h1>
          <ul className="hidden md:flex">
            <li className="text-lg">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="text-lg">
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li className="text-lg">
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li className="text-lg">
              <Link to="platforms" smooth={true} offset={-100} duration={500}>
                Platform
              </Link>
            </li>
            <li className="text-lg">
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4 text-lg">
            {" "}
            Sign In
          </button>
          <button className="px-8 py-3 text-lg"> Sign Up</button>
        </div>

        <div className="md:hidden pr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-7 " /> : <XIcon className="w-7" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full text-lg">
          <Link onClick={() => setNav(!nav)} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full text-lg">
          <Link onClick={() => setNav(!nav)} to="about" smooth={true} offset={-200} duration={500}>
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full text-lg">
          <Link onClick={() => setNav(!nav)} to="support" smooth={true} offset={-50} duration={500}>
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full text-lg">
          <Link onClick={() => setNav(!nav)} to="platforms" smooth={true} offset={-100} duration={500}>
            Platform
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full text-lg">
          <Link onClick={() => setNav(!nav)} to="pricing" smooth={true} offset={-50} duration={500}>
            Pricing
          </Link>
        </li>
       
        <div className="flex flex-col my-4">
          <button className="text-lg bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="text-lg px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
