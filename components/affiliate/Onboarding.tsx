"use client";

import React, { useEffect, useState } from "react";
import WalletConnect from "../walletconnect/WalletConnect";
import axios from "axios";
import { toast, useToast } from "../ui/use-toast";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface OnboardingProps {
  referrerCode: string;
}

const Onboarding: React.FC<OnboardingProps> = ({ referrerCode }) => {
  const [referrer, setReferrer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { address, isConnected } = useAccount();
  const { data: session, status } = useSession();
  const router = useRouter();
  const { toast } = useToast();

  // Fetch referrer information when the component mounts
  useEffect(() => {
    if (!referrerCode) {
      setError("Missing referral code.");
      setLoading(false);
      return;
    }

    const fetchReferrer = async () => {
      try {
        setLoading(true);
        // Fetch referrer information from the API
        const response = await axios.get(`/api/affiliate/${referrerCode}`);

        if (response.status === 200 && response.data.success) {
          setReferrer(response.data.referrer.address); // Store referrer address
          setError(null);
        } else {
          setError("Invalid referral link.");
        }
      } catch (err: any) {
        setError("Failed to fetch referrer information.");
      } finally {
        setLoading(false);
      }
    };

    fetchReferrer();
  }, [referrerCode]);

  useEffect(() => {
    // Only proceed if the session is authenticated and the wallet is connected
    if (status === "authenticated" && isConnected && address && referrer) {
      // Compare referrer's address with connected wallet address
      if (referrer.toLowerCase() === address.toLowerCase()) {
        toast({
          title: "Invalid Referral",
          description:
            "You cannot refer yourself. Redirecting to your dashboard...",
          variant: "destructive",
        });

        setError("You cannot refer yourself. Redirecting to your dashboard...");

        // Use window.location.href to force the redirect
        setTimeout(() => {
          window.location.href = "/affiliate"; // Force page reload and navigation
        }, 2000); // 2-second delay for the toast to display
      } else {
        // If referrer is valid and addresses don't match, register the referral
        axios
          .post("/api/affiliate/referredById", {
            address: address,
            referrerAddress: referrer,
          })
          .then((response) => {
            if (response.status === 200 && response.data.success) {
              toast({ title: "Referral registered successfully!" });
              window.location.href = "/prediction/BTC";
            } else {
              toast({
                title: "Faied to register referral",
                description: response.data.message || "An error occured",
                variant: "destructive",
              });
            }
          })
          .catch((err) => {
            console.error("API error:", err);
            toast({
              title: "Failed to register referral",
              description: "An error occured while processing the referral.",
              variant: "destructive",
            });
          });
      }
    }
  }, [referrer, isConnected, address, session, status]);

  // Display errors as toast notifications
  useEffect(() => {
    if (error) {
      toast({ title: error });
    }
  }, [error]);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="flex flex-col items-center text-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 mb-6 text-white border-4 rounded-full"
            style={{ borderTopColor: "transparent" }}
          ></div>
          <p className="animate-pulse text-lg">
            Fetching referrer information...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-0 m-0 text-white">
      <div className="rounded-xl sm:p-12 w-full max-w-lg p-8 text-center text-gray-800 bg-white shadow-lg">
        {/* Header */}
        <h1 className="mb-6 text-4xl font-bold text-gray-900">
          Join the Future Today!
        </h1>
        <p className="mb-8 text-lg text-gray-500">
          Get started with exclusive benefits by connecting your wallet.
        </p>

        {/* Referrer info if available */}
        {referrer && (
          <p className="mb-6 text-lg font-medium">
            Referred by:
            <br />
            <span className="text-indigo-600 break-all">{referrer}</span>
          </p>
        )}

        {/* WalletConnect Button - Center the content */}
        <div className="flex justify-center">
          <WalletConnect className="hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 sm:w-auto w-full px-6 py-3 mx-auto font-bold text-white transition duration-300 ease-in-out transform bg-indigo-600 rounded-full" />
        </div>

        {/* Error Message */}
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
      </div>

      {/* Footer */}
      <div className="mt-6 text-sm text-white">
        <p>
          Need help?{" "}
          <a href="#" className="underline">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
