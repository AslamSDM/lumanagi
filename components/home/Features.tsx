import Image from "next/image";
import React from "react";

function Features() {
  return (
    <section id="" className="max-h-full w-full py-14 bg-[#52569D]">
      <div className="container">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <Image
              src="/assets/images/landings/TTrading_Cryptocurrencies_-_Isometric_Vector_35.png"
              width={550}
              height={550}
              alt="Features"
              className="h-auto max-w-full"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          {/* Right Column - Text Content */}
          <div className="space-y-4">
            <h1
              className="text-4xl font-bold text-white animate-fadeInUp"
              data-animate="fadeInUp"
              data-delay=".3"
              style={{ animationDelay: "0.3s" }}
            >
              Features
            </h1>
            <p
              className="leading-8 text-white animate-fadeInUp"
              data-animate="fadeInUp"
            >
              The Lumanagi Trade Games is built on the Polygon network, which
              means that it is fast and cheap to use. Players can access the
              game using their Metamask wallet.
              <br />
              One of the unique features of the Lumanagi Trade Games is its
              XP-system. Players earn XP by participating in games, and the more
              XP they earn, the more LMNG tokens they can collect.
              <br />
              The game at the beginning features two major trading pairs,
              Bitcoin/USD and EUR/USD. Later we will add other major
              cryptocurrencies as well as lesser-known coins.
              <br />
              This allows players to trade in a variety of markets and take
              advantage of different trading strategies. On top of that, we will
              add various real-life events to our trading platform. You will be
              able to bet on different sports events, reality shows, talent
              shows, and even elections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
