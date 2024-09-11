import Image from "next/image";
import React from "react";

function Benefits() {
  return (
    <section
      id="tradegames"
      className="max-h-full w-full py-14 leading-7 bg-[#52569D]"
    >
      <div className="container py-20">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* Left Column - Image */}
          <div className="space-y-4">
            <h1
              className="text-4xl font-bold text-white animate-fadeInUp"
              data-animate="fadeInUp"
              data-delay=".3"
              style={{ animationDelay: "0.3s" }}
            >
              Benefits
            </h1>
            <p
              className="text-base leading-8 text-white animate-fadeInUp"
              data-animate="fadeInUp"
            >
              One of the main benefits of the Lumanagi Trade Games is that it
              allows players to earn LMNG tokens while playing and rewards
              skilled players even more. On top of that every month, we give
              away LMNG tokens to the top 5 players with the highest earnings.
              <br />
              Another benefit is that our bettors can profit from minimal market
              movements (6 decimal point displacement) as the automated betting
              system registers any price change, regardless of how much it has
              moved.
              <br />
              We also provide our players with a chat system to make the game
              more fun and interactive. We don’t just want our players to make a
              profit while playing; we also want them to have a good time with
              their friends and to enable them to form new communities.
              <br />
              In addition, the game is designed to be easy to use, even for
              beginners. The interface is intuitive and user-friendly, and there
              are plenty of tutorials and resources available to help players
              get started. So feel free to try it even if you are new to trading
              games.
              <br />
              With its simple interface, unique earning system, social
              experience, low fees and user-friendly design, the Lumanagi Trade
              Games is a great choice for both beginner and experienced traders.
            </p>
          </div>
          {/* Right Column - Text Content */}
          <div className="flex justify-center">
            <Image
              src="/assets/images/landings/Bitcoin-Cryptocurrency-Isometric-Vector-2048x1233.png"
              width={600}
              height={600}
              style={{ objectFit: "contain" }}
              alt="Benefits"
              className="h-auto max-w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
