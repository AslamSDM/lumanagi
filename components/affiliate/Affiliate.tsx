"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../navbar/Header";
import RewardsSection from "./RewardsSection";
import EarnRewardsSection from "./EarnRewardsSection";
import Footer from "../navbar/Footer";
import Onboarding from "./Onboarding";
import { useSession } from "next-auth/react";

function Affiliate() {
  const [mounted, setMounted] = useState(false);
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [referrerCode, setReferrerCode] = useState("");
  const { data: session, status } = useSession();

  useEffect(() => {
    setMounted(true);

    // Check if the referral cookie is set
    const referral = Cookies.get("referrerCode");
    if (referral) {
      setShowOnboardingModal(true);
      setReferrerCode(referral);

      // Optionally, remove the referral cookie after checking
      Cookies.remove("referrerCode");
    }
  }, []);

  useEffect(() => {
    // Set the referral code from the session data
    if (status === "authenticated" && session?.user?.db?.referralCode) {
      setReferralCode(session?.user?.db?.referralCode);
    } else {
      setReferralCode("");
    }
  }, [session, status]);

  if (!mounted) return <></>;

  if (showOnboardingModal) {
    return <Onboarding referrerCode={referrerCode} />;
  }

  return (
    <div className="flex flex-col items-center w-full pt-6">
      <Header />
      <main className="max-md:mt-10 max-md:max-w-full flex flex-row items-start w-full gap-10 pl-5 mt-16">
        <div className="flex flex-col items-center w-full gap-16">
          <RewardsSection />
          <EarnRewardsSection referralCode={referralCode} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Affiliate;
