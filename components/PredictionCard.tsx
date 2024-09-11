"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useReadContract, useWriteContract } from "wagmi";
import { useAccount } from "wagmi";
import { formatEther, formatUnits, parseEther } from "viem";
import Image from "next/image";
import LumanagiPredictionsV3BTCABI from "@/lib/LumanagiPredictionV3.json";
import WalletConnect from "./walletconnect/WalletConnect";

export default function PredictionCard({
  epoch,
  address,
}: {
  epoch: string;
  address: `0x${string}`;
}) {
  const [betAmount, setBetAmount] = useState(0.01);
  const [oracleCalled, setOracleCalled] = useState(false);
  const { isConnected } = useAccount();
  const { writeContract: betBull, error: bullerror } = useWriteContract();
  const { writeContract: betBear, error: bearerror } = useWriteContract();

  const currentEpoch: any = useReadContract({
    address: address,
    abi: LumanagiPredictionsV3BTCABI.abi,
    functionName: "currentEpoch",
    args: [],
  });

  const roundData: any = useReadContract({
    address: address,
    abi: LumanagiPredictionsV3BTCABI.abi,
    functionName: "rounds",
    args: [BigInt(epoch)], // Fetching round data based on epoch
  });

  // console.log(epoch, roundData.data);

  useEffect(() => {
    if (roundData.data) {
      const lockdate = new Date(parseInt(roundData.data[3]) * 1000);
      if (Number(epoch) === parseInt(currentEpoch.data) - 1) {
        setOracleCalled(true);
      }

      if (roundData.data[13]) {
        setOracleCalled(roundData.data[13]);
      }
    }
  }, [roundData]);
  const handlebetBear = async () => {
    await betBear({
      address: address,
      abi: LumanagiPredictionsV3BTCABI.abi,
      functionName: "betBear",
      args: [BigInt(epoch)],
      value: parseEther(String(betAmount)),
    });
    console.log(bearerror);
  };
  const handlebetBull = async () => {
    try {
      const tx = await betBull({
        address: address,
        abi: LumanagiPredictionsV3BTCABI.abi,
        functionName: "betBull",
        args: [BigInt(epoch)],
        value: parseEther(String(betAmount)),
      });
      console.log("Bet Bull transaction sent:", tx);
    } catch (error) {
      console.error("Bet Bull Error:", error); // This will show which error is happening
    }
  };
  return (
    <div className="bg-blue-900 p-6 h-[500px] rounded-xl border w-80 text-white font-sans flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <span className="text-red-500 font-bold text-sm">
          {currentEpoch?.data == BigInt(epoch) ? "LIVE" : "NEXT"}
        </span>
        <span className="text-gray-300 text-sm">#{epoch}</span>
      </div>

      <div className="relative flex flex-col justify-between flex-grow">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 absolute top-0 left-0 right-0 h-1"></div>
        <div className="w-full relative">
          <div className="absolute inset-0 mt-3 flex flex-col items-center justify-center">
            <h4 className="text-white font-bold text-sm">UP</h4>
            <h4 className="text-white text-sm">4.125x Payout</h4>
          </div>
          <Image
            className=" w-full h-[70px]"
            src="/Polygon 1.png"
            width={1000}
            height={1000}
            alt="Polygon 1"
          />
        </div>
        <div className="bg-blue-900 border border-[#3D8DFF] rounded-sm p-6 flex-grow flex flex-col gap-4 ">
          {isConnected && !oracleCalled ? (
            <>
              <div className=" flex justify-between">
                <h4 className="">Prize Pool :</h4>
                <h4>
                  {formatEther(roundData?.data ? roundData?.data[12] : 0)} POL
                </h4>
              </div>
              <div className="flex flex-col w-full items-center justify-center gap-4">
                <button
                  className="bg-[#59C397] w-full text-white px-3 py-2 rounded mb-4"
                  onClick={handlebetBull}
                >
                  Bull
                </button>
                <button
                  className="bg-[#C35986] w-full text-white px-3 py-2 rounded"
                  onClick={handlebetBear}
                >
                  Bear
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">Last Price</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div className="text-2xl font-bold ">
                    $
                    {Number(
                      formatUnits(roundData?.data ? roundData.data[5] : 0, 8)
                    ).toFixed(2)}
                  </div>
                  <div className="bg-blue-700 text-blue-300 px-3 py-2 rounded flex items-center">
                    <ArrowUp size={20} />
                    <span className="ml-2 text-sm">{betAmount}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3 text-sm">
                  <span className="text-gray-400">Locked Price</span>
                  <span>
                    $
                    {Number(
                      formatUnits(roundData.data ? roundData.data[4] : 0, 8)
                    ).toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Prize Pool:</span>
                  <span>
                    {formatUnits(roundData.data ? roundData.data[12] : 0, 18)}{" "}
                    POL
                  </span>
                </div>
              </div>
            </>
          )}
          {!isConnected && (
            <>
              <div className="flex flex-col w-full">
                <WalletConnect />
              </div>
            </>
          )}
        </div>
        <div className="w-full relative">
          <div className="absolute inset-0  flex flex-col items-center justify-center">
            <h4 className="text-white text-sm">1.25x Payout</h4>
            <h4 className="text-white font-bold text-sm">DOWN</h4>
          </div>
          <Image
            className=" w-full h-[70px]"
            src="/Polygon 2.png"
            width={1000}
            height={1000}
            alt="Polygon 2"
          />
        </div>
      </div>
    </div>
  );
}
