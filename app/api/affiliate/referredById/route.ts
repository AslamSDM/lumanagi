import { db } from "@/database/db";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { address, referrerAddress } = await req.json();

    console.log("[address]", address);
    console.log("[referrerAddress]", referrerAddress);

    if (!address || !referrerAddress) {
      return NextResponse.json(
        { success: false, message: "Missing parameters" },
        { status: 400 }
      );
    }

    // Check if the referred user exists in the database
    // const referredUser = await db
    //   .select()
    //   .from(users)
    //   .where(eq(users.address, address))
    //   .limit(1)
    //   .execute();

    // if (!referredUser.length) {
    //   return NextResponse.json(
    //     { success: false, message: "Referred user not found." },
    //     { status: 404 }
    //   );
    // }

    // Find the referrer by referrerAddress
    const referrer = await db
      .select()
      .from(users)
      .where(eq(users.address, referrerAddress))
      .limit(1)
      .execute();

    if (!referrer.length) {
      return NextResponse.json(
        { success: false, message: "Referrer not found." },
        { status: 404 }
      );
    }

    const referrerId = referrer[0].id;

    // Update the new user with the referredById (referrer's id)
    const updateResult = await db
      .update(users)
      .set({ referredById: referrerId })
      .where(eq(users.address, address))
      .execute();

    console.log("[updateResult]", updateResult);

    return NextResponse.json(
      {
        success: true,
        message: "Referral registered successfully",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error("Error registering referral:", err);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
