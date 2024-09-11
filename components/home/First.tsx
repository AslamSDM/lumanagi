"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { PiFiles } from "react-icons/pi";

function First() {
  return (
    <section className="max-h-full mx-auto my-24">
      {/* Main Content */}
      <div className="container py-24">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* Left SIde - Text and Buttons */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-snug">
              It&apos;s to start adding REAL VALUE to the cryptocurrency market.
            </h1>
            <p className="text-lg leading-relaxed text-gray-500">
              Introducing LUMANAGI, a digital asset exchange hub with
              continuously increasing gold-backing
            </p>
            <div className="space-y-4">
              <Link
                href="https://lumanagi.com/wp-content/uploads/2024/07/Lumanagi-Lite-Paper-ENG-v5-2024-July-1.pdf"
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md text-[#02066f] text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-[#02066F] mx-3 p-2 rounded-full text-sm">
                  <PiFiles className="text-white" />
                </div>
                Litepaper
              </Link>
            </div>
            <Button className="flex justify-center items-center bg-[#02066F] hover:bg-[#03066F] mx-auto px-6 py-3 border-transparent rounded-md font-semibold text-sm">
              SIGN UP & JOIN OUR PRE-SALE LIST
            </Button>
          </div>
          {/* Right Side - Image */}
          <div className="flex items-center justify-center pl-24">
            <Image
              src="/assets/images/landings/lumanagi-hero-picture_50-768x614.png"
              width={500}
              height={500}
              alt="Lumanagi Hero"
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;
