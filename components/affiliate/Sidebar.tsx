import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="flex gap-9 grow shrink">
      <div className="flex flex-col items-center self-start">
        <nav className="flex flex-col w-52 max-w-full h-[355px] font-bold text-gray-300 text-lg leading-none">
          <Link
            href="#"
            className="p-3.5 max-md:pr-5 rounded-lg w-full overflow-hidden"
          >
            MyPortfolio
          </Link>
          <Link
            href="#"
            className="mt-7 px-3.5 py-3.5 max-md:pr-5 rounded-lg w-full overflow-hidden"
          >
            NFT & Collections
          </Link>
          <Link
            href="#"
            className="mt-7 p-3.5 max-md:pr-5 rounded-lg w-full overflow-hidden"
          >
            My Watchlist
          </Link>
          <Link
            href="#"
            className="border-[1.125px] border-white bg-[linear-gradient(103deg,rgba(255,255,255,0.00_-9.33%,rgba(255,255,255,0.23)_119.91%))] backdrop-blur-[20.5px] mt-7 px-3.5 py-3.5 max-md:pr-5 border-solid border-opacity-60 rounded-lg w-full text-white overflow-hidden"
          >
            My Referrals
          </Link>
          <Link
            href="#"
            className="mt-7 p-3.5 max-md:pr-5 rounded-lg w-full text-gray-300 overflow-hidden"
          >
            Edit Profile
          </Link>
        </nav>
        <div className="flex flex-col border-neutral-400 bg-white mt-10 border border-solid w-[197px] max-w-full overflow-hidden">
          <div className="relative flex flex-col w-full aspect-[0.5]">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8849bc112191ab7ed5b3ab42d034d54394ffa4d6315c4aefb7c00b5b3ab3e8c7?placeholderIfAbsent=true&apiKey=bfcc11eef56549498492cadd419d3c17"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="relative flex flex-col justify-center items-center px-10 max-md:px-5 py-44 max-md:py-24 w-full aspect-[0.5]">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/86c5f705b46f064d9be571e374c5f06420db0fa2ab9027495a0cf46e112e2a1f?placeholderIfAbsent=true&apiKey=bfcc11eef56549498492cadd419d3c17"
                alt=""
                layout="fill" // Use "fill" to make the image cover the container
                objectFit="cover" // This matches the "object-cover" style in your original code
                loading="lazy" // Lazy loading is enabled by default with the Image component
                className="absolute inset-0" // Ensure the className is applied to the container div
              />
              <div className="relative flex flex-col justify-center items-center bg-white -mb-9 max-md:mb-2.5 p-1.5">
                <div className="flex justify-center items-center gap-1 font-bold text-black text-xs text-opacity-90 whitespace-nowrap">
                  <div className="text-right my-auto self-stretch">197</div>
                  <div className="my-auto text-center self-stretch">x</div>
                  <div className="my-auto self-stretch">394</div>
                </div>
                <div className="text-black text-center text-xs text-opacity-40">
                  Half Page
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-gray-200 border-solid border-opacity-40 w-0.5 h-[1300px] shrink-0" />
    </aside>
  );
};

export default Sidebar;
