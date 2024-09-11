import { generateReferralCodeFromSeed } from "@/lib/referral";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { address } = await req.json();

    if (!address) {
      return NextResponse.json({ message: "Missing address" }, { status: 400 });
    }

    const referralCode = generateReferralCodeFromSeed(address);

    return NextResponse.json({
      success: true,
      referralCode,
    });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
