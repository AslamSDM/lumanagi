import React from "react";

function Roadmap() {
  return (
    <section className="py-14 bg-[#52569D] w-full">
      <div className="container">
        <div className="flex items-center space-x-4 text-[#02066f]">
          <div className="w-20 h-0.5 bg-[#02066f]"></div>
          <h6 className="font-semibold text-sm animate-fadeInUp">TIMELINE</h6>
        </div>
        <h1>Road Map</h1>
        <h2>Our team is working hard to make our plans happen on time.</h2>

        <div className="flex items-center space-x-4 text-[#02066f]">
          <div className="w-20 h-0.5 bg-[#02066f]"></div>
          <h6 className="font-semibold text-sm animate-fadeInUp">TOKEN</h6>
        </div>
        <h1>Tokenomics</h1>
        <p>
          The token plan is ready and considers a particular mechanism. LMNG has
          a maximum supply of 400,000,000
          <br />
          These allocations are made in order to ensure Lumanagi&apos;s long-tem
          growth and development.
        </p>
      </div>
    </section>
  );
}

export default Roadmap;
