"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Logo from "./Logo";
import WalletConnect from "../walletconnect/WalletConnect";

function Header() {
  return (
    <header className="flex items-center justify-between w-full h-20">
      <Link href="/" className="flex items-center self-stretch">
        <Image
          src="/assets/images/logos/Vector.png"
          alt="Vector"
          width={100}
          height={100}
          style={{ objectFit: "contain" }}
          className="my-auto w-[55px] aspect-square object-contain shrink-0"
        />
        <Image
          src="/assets/images/logos/lumanagi-logo2.png"
          width={300}
          height={300}
          alt="Company logo"
          style={{ objectFit: "contain" }}
          priority // Add priority for LCP image
          className="w-[267px] min-w-[240px] max-w-full object-contain"
        />
      </Link>
      <nav className="flex items-start max-w-full gap-5 my-auto text-base font-medium leading-7 text-center">
        <button className="border-white bg-[linear-gradient(103deg,rgba(255,255,255,0.00_-9.33%,rgba(255,255,255,0.23)_119.91%))] px-5 py-3 border border-solid border-opacity-60 rounded-xl min-w-fit text-white">
          Buy & Sell
        </button>

        <WalletConnect className="border-white bg-[linear-gradient(103deg,rgba(255,255,255,0.00_-9.33%,rgba(255,255,255,0.23)_119.91%))] px-5 py-3 border border-solid border-opacity-60 rounded-xl min-w-fit text-violet-400" />
      </nav>
    </header>
  );
}

export default Header;
