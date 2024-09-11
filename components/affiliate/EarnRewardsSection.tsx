"use client";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Buffer } from "buffer";
import CopyToClipboard from "react-copy-to-clipboard";
import { useToast } from "../ui/use-toast";
import { MdContentCopy } from "react-icons/md";
import { Input } from "../ui/input";
import { useSession } from "next-auth/react";

interface EarnRewardsSectionProps {
  referralCode: string;
}

const EarnRewardsSection: React.FC<EarnRewardsSectionProps> = ({
  referralCode,
}) => {
  const { toast } = useToast();
  const { address, isConnected } = useAccount();
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  console.log("[referralCode]", referralCode);

  return (
    <section className=" flex flex-col w-full mt-10">
      <h2 className="font-inter mb-6 text-2xl font-medium text-white">
        Earn rewards
      </h2>
      <div className="backdrop-blur-lg rounded-2xl flex flex-col w-full overflow-hidden bg-transparent border border-white">
        <div className="bg-gradient-to-r from-white/0 to-white/15 backdrop-blur-md border-opacity-60 rounded-2xl flex flex-col w-full">
          {/* Invite a Friend Section */}
          <div className="md:flex-row flex flex-col w-full p-16">
            <div className="flex flex-col w-full">
              <h3 className="md:text-left poppins mb-8 text-5xl font-semibold leading-tight text-center text-white">
                Invite a friend
              </h3>
              <p className="text-opacity-70 md:text-left mb-8 text-xl font-medium leading-8 text-center text-white">
                Invite your friends to the party and you&apos;ll earn a
                commission every time they make a trade.
              </p>
              <form className="md:flex-row flex flex-col items-start w-full gap-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="placeholder:text-white/70 flex-1 px-4 py-2 text-base text-white bg-transparent border border-white rounded-lg"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="bg-teal-500 min-w-fit px-4 py-2.5 rounded-lg text-white text-base hover:bg-teal-600 transition"
                >
                  Send invite
                </button>
              </form>
            </div>

            {/* Placeholder Icon Section */}
            <div className="md:pr-0 relative flex items-center justify-end w-full pr-8">
              <div className="bg-amber-500 absolute w-32 h-32 rounded-full"></div>
              <h1 className="-top-0 right-24 md:right-16 p-text-white text-9xl poppins absolute font-extrabold text-white">
                + 1
              </h1>
            </div>
          </div>

          {/* Divider */}
          <div className="border-white/20 w-full border-t" />

          {/* Referral Code and Shareable Link Section */}
          <div className="flex flex-col w-full p-16 text-white">
            <div className="md:flex-row flex flex-col gap-8">
              {/* Referral Code Section */}
              <div className="md:w-1/3 flex flex-col w-1/5">
                <h4 className="md:text-left text-xl font-medium leading-relaxed text-center">
                  Your referral code
                </h4>
                <div className="border-opacity-10 rounded-xl flex items-center px-4 py-2 mt-4 bg-transparent border border-white">
                  <span className="md:text-left flex-1 text-center">
                    {referralCode}
                  </span>
                  <CopyToClipboard
                    onCopy={() => {
                      toast({ title: "✅ Copied!" });
                    }}
                    text={referralCode}
                  >
                    <button
                      onMouseEnter={() => setHover1(true)}
                      onMouseLeave={() => setHover1(false)}
                      className="p-1"
                    >
                      <MdContentCopy
                        fontSize={20}
                        color={hover1 ? "#ffffff" : "#c1c1c1"}
                      />
                    </button>
                  </CopyToClipboard>
                </div>
              </div>

              {/* Shareable Link Section */}
              <div className="md:w-2/3 flex flex-col w-4/5">
                <h4 className="md:text-left text-xl font-medium leading-relaxed text-center">
                  Shareable referral link
                </h4>
                <div className="border-opacity-10 rounded-xl flex items-center px-4 py-2 mt-4 bg-transparent border border-white">
                  <span className="text-ellipsis md:text-left flex-1 overflow-hidden text-center">
                    {`${process.env.NEXT_PUBLIC_DOMAIN}/affiliate?ref=${referralCode}`}
                  </span>
                  <CopyToClipboard
                    onCopy={() => {
                      toast({ title: "✅ Copied!" });
                    }}
                    text={`${process.env.NEXT_PUBLIC_DOMAIN}/affiliate?ref=${referralCode}`}
                  >
                    <button
                      onMouseEnter={() => setHover2(true)}
                      onMouseLeave={() => setHover2(false)}
                      className="p-1"
                    >
                      <MdContentCopy
                        fontSize={20}
                        color={hover2 ? "#ffffff" : "#c1c1c1"}
                      />
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnRewardsSection;
