"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { animate } from "framer-motion";
import { Button } from "../ui/button";
import Logo from "./Logo";

function Navbar() {
  const smoothScroll = (target: any) => {
    const element = document.querySelector(target);
    if (element) {
      const offset = element.offsetTop;
      const duration = 0.6; // Adjust the duration as needed
      const startPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      animate(startPosition, offset, {
        duration: duration,
        onUpdate: (value) => {
          window.scrollTo(0, value);
        },
      });
    }
  };

  // State to determine if the navabar is sticky
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY >= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`py-4 text-white sticky top-0 z-50 transition-shadow w-full h-20 	 bg-[#202479] text-foreground${
        isSticky ? "shadow-sm  bg-[#202479]" : ""
      }`}
    >
      <div className="container flex items-center justify-center mx-auto">
        {/* Logo Section */}

        <Link
          href="/"
          className="flex items-center mr-40 cursor-pointer"
          style={{ width: "180px", height: "auto" }}
        >
          <Logo />
        </Link>
        <nav className="flex items-center space-x-6 text-[13px]">
          <Link
            href="#home"
            className="hover:text-[#02066F]"
            onClick={() => smoothScroll("#home")}
          >
            Home
          </Link>
          <Link
            href="#tradegames"
            className="hover:text-[#02066F]"
            onClick={() => smoothScroll("#tradegames")}
          >
            Trade Games
          </Link>
          <Link
            href="#about"
            className="hover:text-[#02066F]"
            onClick={() => smoothScroll("#about")}
          >
            About
          </Link>
          <Link
            href="#roadmap"
            className="hover:text-[#02066F]"
            onClick={() => smoothScroll("#roadmap")}
          >
            Roadmap
          </Link>
          <Link
            href="#team"
            className="hover:text-[#02066F]"
            onClick={() => smoothScroll("#team")}
          >
            Team
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#02066F]"
            onClick={() => smoothScroll("#contact")}
          >
            Contact
          </Link>
          {/* <Link href="/affiliate" className="hover:text-[#02066F]">
            Affiliate
          </Link> */}

          {/* Buttons and Language Swicher */}

          <Button
            variant="outline"
            className={`border-[#02066F] border-2  hover:bg-[#02066F] text-white hover:text-white uppercase transition-colors duration-2001 ${
              isSticky ? "bg-[#1d1175]" : "bg-[#362995]"
            }`}
          >
            <Link href="/affiliate">AFFILIATE</Link>
          </Button>
          <Button
            variant="outline"
            className={`border-[#02066F] border-2  hover:bg-[#02066F] text-white hover:text-white uppercase transition-colors duration-2001 ${
              isSticky ? "bg-[#1d1175]" : "bg-[#362995]"
            }`}
          >
            <Link href="/prediction/BTC">PLAY HERE</Link>
          </Button>
          <div className="flex items-center text-white">
            <Button
              variant="ghost"
              className="hover:bg-inherit hover:text-ellipsis p-0 m-0 text-sm text-white cursor-pointer"
            >
              EN
            </Button>
            <span className="mx-1">|</span>
            <Button
              variant="ghost"
              className="hover:bg-inherit hover:text-ellipsis p-0 m-0 text-sm text-red-500 cursor-pointer"
            >
              HU
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
