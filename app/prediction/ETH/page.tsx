"use client";
import Footer from "@/components/navbar/Footer";
import Header from "@/components/navbar/Header";
import PredictionCard from "@/components/PredictionCard";
import React, { useEffect, useRef } from "react";
import { useAccount, useReadContract } from "wagmi";
import LumanagiPredictionsV3ETHABI from "@/lib/LumanagiPredictionV3.json";
import { LumanagiPredictionsV3ETH } from "@/lib/constant";

function Page() {
  const { isConnected } = useAccount();
  const [remainingTime, setRemainingTime] = React.useState<string>("00:00:00");
  const [epochs, setEpochs] = React.useState<number[]>([]);
  const currentEpochRef = useRef<HTMLDivElement | null>(null);

  const currentEpoch: any = useReadContract({
    address: LumanagiPredictionsV3ETH,
    abi: LumanagiPredictionsV3ETHABI.abi,
    functionName: "currentEpoch",
    args: [],
  });
  useEffect(() => {
    if (currentEpoch.data) {
      const currentEpochNumber = parseInt(currentEpoch.data);
      const newEpochs = Array.from(
        { length: currentEpochNumber + 2 },
        (_, index) => index + 1
      );
      setEpochs(newEpochs);
    }
  }, [currentEpoch.data]);
  const roundData: any = useReadContract({
    address: LumanagiPredictionsV3ETH,
    abi: LumanagiPredictionsV3ETHABI.abi,
    functionName: "rounds",
    args: [currentEpoch.data], // Fetching round data based on epoch
  });

  useEffect(() => {
    const updateTimer = () => {
      if (!roundData.data) return;
      const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
      const timeLeft = parseInt(roundData.data[2]) - currentTime;
      if (timeLeft > 0) {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        setRemainingTime(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      } else {
        setRemainingTime("00:00:00");
      }
    };

    const interval = setInterval(updateTimer, 1000); // Update every second

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [roundData.data, currentEpoch.data]);
  useEffect(() => {
    if (currentEpochRef.current) {
      currentEpochRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [epochs]);
  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-800 bg-blend-hard-light flex items-start justify-center overflow-hidden">
      <div className="flex flex-col items-center w-full pt-6">
        <Header />
        <div className="w-full mt-10 flex justify-end mr-10 ">
          <div className="p-2 bg-slate-500 w-32 items-center justify-center rounded-full">
            <h3 className="text-center">{remainingTime}</h3>
          </div>
        </div>
        <main className="pt-20 w-full flex flex-col items-center justify-center overflow-x-auto h-full text-white">
          <div className="w-full mt-10 flex  gap-4 ml-40">
            {epochs.map((i) => (
              <div
                className="flex  px-2 items-center justify-center"
                key={i}
                ref={i === parseInt(currentEpoch.data) ? currentEpochRef : null}
              >
                <PredictionCard
                  epoch={i.toString()}
                  address={LumanagiPredictionsV3ETH}
                />
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Page;
