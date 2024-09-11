"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "../ui/badge";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { toast } from "../ui/use-toast";
import { affiliateContract } from "@/lib/contracts/config";

// Define reward item interface
interface RewardItem {
  address: string;
  avatar: string;
  level: number;
  statusColor: string;
  registrationDate: string;
  earned: string;
}

const RewardsSection: React.FC = () => {
  const { address, isConnected } = useAccount(); // Get the connected account
  const [rewardItems, setRewardItems] = useState<RewardItem[]>([]);
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimError, setClaimError] = useState<string | null>(null);

  // Fetch referral data using the current user's signer
  const fetchReferrals = async () => {
    if (!address) return;

    try {
      // Call the getReferredBy function from the contract
      const [referrers, levels, earnings, registrationDates] =
        await affiliateContract.getReferredBy(address);

      // Format the fetched data for display
      const rewards = referrers.map((referrer: string, index: number) => ({
        address: referrer,
        avatar: "/assets/images/avatars/Avatar.png", // Static avatar for now
        level: levels[index],
        statusColor: levels[index] <= 2 ? "bg-lime-300" : "bg-gray-300",
        registrationDate: new Date(
          registrationDates[index] * 1000
        ).toLocaleString(),
        earned: `$${parseFloat(
          ethers.utils.formatEther(earnings[index])
        ).toFixed(2)}`,
      }));

      setRewardItems(rewards);
    } catch (err) {
      console.error("Error fetching referrals:", err);
    }
  };

  // Function to claim rewards using the contract and the current user's signer
  const handleClaimRewards = async () => {
    if (!address) return;

    setIsClaiming(true);
    setClaimError(null);

    try {
      // Create the contract instance using the current user's signer

      // Call the claimRewards function from the contract
      const tx = await affiliateContract.claimRewards();
      await tx.wait();

      // Show success message or update UI
      toast({
        title: "Success!",
        description: "Rewards claimed successfully!",
      });
    } catch (error) {
      console.error("Error claiming rewards:", error);
      setClaimError("Failed to claim rewards.");
    } finally {
      setIsClaiming(false);
    }
  };

  useEffect(() => {
    if (isConnected && address) {
      fetchReferrals();
    }
  }, [isConnected, address]);

  // Calculate total earnings
  const totalEarned = rewardItems
    .reduce((acc, item) => acc + parseFloat(item.earned.replace("$", "")), 0)
    .toFixed(2);

  return (
    <section className="w-full mx-auto">
      <h2 className="mb-4 text-2xl font-medium text-white">My rewards</h2>

      <div className="bg-gradient-to-r from-white/0 to-white/15 backdrop-blur-md border-opacity-80 rounded-2xl border border-white">
        <div className="flex flex-row justify-between text-white">
          <div className="p-8 text-white">
            <h1 className="text-opacity-80 text-sm font-medium leading-6 text-white">
              Total Earned
            </h1>
            <h2 className="text-4xl font-semibold leading-tight text-white">
              ${totalEarned}
            </h2>
          </div>
          <div className="flex items-center p-0 mr-8">
            <button
              className="rounded-2xl text-white-200 flex items-center justify-center w-full px-4 py-2 text-2xl font-bold border border-white"
              onClick={handleClaimRewards}
              disabled={!isConnected || isClaiming}
            >
              {isClaiming ? "Claiming..." : "Claim"}
            </button>
          </div>
        </div>

        <Table className="text-white">
          <TableHeader className="h-14">
            <TableRow className="border-t">
              <TableHead className="text-opacity-70 px-24 text-white">
                Address
              </TableHead>
              <TableHead className="text-opacity-70 px-8 text-right text-white">
                Level
              </TableHead>
              <TableHead className="text-opacity-70 px-8 text-right text-white">
                Date & Time
              </TableHead>
              <TableHead className="text-opacity-70 px-8 text-right text-white">
                Earned
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rewardItems.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="py-8 text-center">
                  <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-lg text-white">There is no data...</h1>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              rewardItems.map((item) => (
                <TableRow key={item.address}>
                  <TableCell className="px-8">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={item.avatar} alt={item.address} />
                        <AvatarFallback>
                          {item.address.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {item.address}
                    </div>
                  </TableCell>
                  <TableCell className="px-8 text-right">
                    <Badge
                      variant="outline"
                      className={`px-3 py-0.5 text-sm ${item.statusColor}`}
                    >
                      Level {item.level}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-8 text-right">
                    {item.registrationDate}
                  </TableCell>
                  <TableCell className="px-8 text-right">
                    {item.earned}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      {claimError && <p>{claimError}</p>}
    </section>
  );
};

export default RewardsSection;
