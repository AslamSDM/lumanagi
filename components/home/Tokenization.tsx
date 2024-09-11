import Image from "next/image";
import React from "react";

function Tokenization() {
  return (
    <section id="" className="max-h-full w-full bg-[#52569D] py-14 leading-7">
      <div className="container py-20">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* Left Column - Image */}
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
                POWER OF BLOCKCHAIN
              </h6>
            </div>

            <h2
              className="text-3xl font-bold text-white animate-fadeInUp"
              data-animate="fadeInUp"
              data-delay=".3"
              style={{ animationDelay: "0.3s" }}
            >
              Tokenization Benefits
            </h2>
            <p
              className="text-base leading-8 text-white animate-fadeInUp"
              data-animate="fadeInUp"
            >
              Pairing real-world assets to crypto tokens is the next step in the
              evolution of decentralized economies. Lumanagi’s aim is to help
              pioneer this process.
              <br />
              Our token is partially backed by an ever-growing stash of gold.
              <br />
              20% of all platform fees and profits will be redirected into a
              gold reserve which we’ll convert to physical gold every month. The
              equation is simple: fixed token supply + continuously increasing
              backing = value appreciation. No total defaults and „hodling until
              zero”.
              <br />
              Having our own token also enables us to provide users with
              features like DAO governance, treasury dividend payouts and more
              to come.
            </p>
          </div>
          {/* Right Column - Text Content */}
          <div className="flex justify-center ">
            {" "}
            {/* Container with max-width */}
            <Image
              src="/assets/images/landings/TTrading_Cryptocurrencies_-_Isometric_Vector_35.png"
              layout="responsive"
              width={50}
              height={50}
              alt="Trading Bitcoin"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenization;
