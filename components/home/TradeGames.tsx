import Image from "next/image";
import React from "react";

function Trade() {
  return (
    <section
      id="tradegames"
      className="max-h-full w-full bg-[#52569D] py-14 leading-7"
    >
      <div className="container py-20">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* Left Column - Image */}
          <div className="space-y-4">
            <h1
              className="text-4xl font-semibold animate-fadeInUp"
              data-animate="fadeInUp"
              data-delay=".2"
              style={{ animationDelay: "0.2s" }}
            >
              Trade Games
            </h1>
            <div className="bg-white w-96 h-0.5"></div>
            {/* Long Dash */}

            <h2
              className="text-3xl font-bold text-white animate-fadeInUp"
              data-animate="fadeInUp"
              data-delay=".3"
              style={{ animationDelay: "0.3s" }}
            >
              Introduction
            </h2>
            <p
              className="text-base leading-8 text-white animate-fadeInUp"
              data-animate="fadeInUp"
            >
              Lumanagi Trade Games is a new blockchain-based trading game with
              an innovative earning system. It features a dynamic XP system that
              allows players to earn LMNG tokens while playing.
              <br />
              The game is built on the Polygon network, formerly known as the
              Matic network.
              <br />
              You can place your bets using the MATIC coin. This document aims
              to provide an overview of Lumanagi Trade Games, its features, and
              how players can benefit from it more than any other platform.
            </p>
          </div>
          {/* Right Column - Text Content */}
          <div className="flex justify-center">
            <Image
              src="/assets/images/landings/Value-Of-Bitcoin-Currency-Isometric-Vector-2048x1440.png"
              width={550}
              height={550}
              alt="Trading Bitcoin"
              className="object-contain w-full h-auto"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trade;
