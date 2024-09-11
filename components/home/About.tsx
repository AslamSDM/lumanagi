import Image from "next/image";
import React from "react";

function About() {
  return (
    <section
      id="about"
      className="max-h-full w-full bg-[#414593] py-56 leading-7"
    >
      <div className="container">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <Image
              src="/assets/images/landings/Trading_Bitcoin_Cryptocurrencies_16.png"
              width={550}
              height={550}
              alt="Trading Bitcoin"
              className="h-auto max-w-full"
              priority
            />
          </div>
          {/* Right Column - Text Content */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-[#02066f]">
              <div className="bg-[#02066f] w-20 h-0.5"></div>
              {/* Long Dash */}
              <h6
                className="text-sm font-semibold animate-fadeInUp"
                data-animate="fadeInUp"
                data-delay=".2"
                style={{ animationDelay: "0.2s" }}
              >
                All In One Decentralized Exchange
              </h6>
            </div>

            <h2
              className="text-3xl font-bold text-white animate-fadeInUp"
              data-animate="fadeInUp"
              data-delay=".3"
              style={{ animationDelay: "0.3s" }}
            >
              Trade Without Any Hassle
            </h2>
            <p className="text-white animate-fadeInUp" data-animate="fadeInUp">
              Lumanagi is a decentralized exchange that allows anyone to pool,
              list and trade digital and synthetic assets. Underlying blockchain
              technology enables anyone to participate in shared market making
              processes. No need to register, call brokers or present any
              identity verification whatsoever.
              <br />
              Our goal is to facilitate secure, cheap, and frictionless exchange
              of value. Thus, when designing the product, we’ve considered the
              following factors to make sure anybody can take part:
            </p>
            <ul className="pl-5 space-y-2 text-white list-disc animate-fadeInUp">
              <li>Barrier of entry (how easy it is to enter the market)</li>
              <li>
                Technological focus (how many FinTech functions are available)
              </li>
              <li>Economic system focus (economic fundamentals respected)</li>
              <li>Economic focus (tokenomics sustainability)</li>
              <li>Community focus (Fair Launch style distribution)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
