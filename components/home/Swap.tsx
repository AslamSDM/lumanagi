import Image from "next/image";
import React from "react";

function Swap() {
  return (
    <section id="" className="max-h-full w-full bg-[#52569D] py-14 leading-7">
      <div className="container">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <Image
              src="/assets/images/landings/Trading_Bitcoin_Cryptocurrencies_16.png"
              width={500}
              height={500}
              alt="Trading Bitcoin"
              className="h-auto max-w-full"
              style={{ objectFit: "contain" }}
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
                AN ENVOLVING SWAP PLATFORM
              </h6>
            </div>

            <h2
              className="text-3xl font-bold text-white animate-fadeInUp"
              data-animate="fadeInUp"
              data-delay=".3"
              style={{ animationDelay: "0.3s" }}
            >
              Onboarding new users
            </h2>
            <p
              className="leading-8 text-white animate-fadeInUp"
              data-animate="fadeInUp"
            >
              Although 14 years have passed since the mining of the BitCoin
              genesis block, it is still not child’s play to enter the crypto
              space. To lower the barrier of entry, we’ve set out to build a
              community ecosystem where educators are rewarded for providing
              other users with their knowledge and insights.
              <br />
              Although 14 years have passed since the mining of the BitCoin
              genesis block, it is still not child’s play to enter the crypto
              space. To lower the barrier of entry, we’ve set out to build a
              community ecosystem where educators are rewarded for providing
              other users with their knowledge and insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Swap;
