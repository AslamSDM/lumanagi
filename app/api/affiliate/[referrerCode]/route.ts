import { db } from "@/database/db";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { referrerCode: string } },
  res: NextResponse
) {
  const { referrerCode } = params;

  console.log("[ref]", referrerCode);

  try {
    // Fetch referrer from the database using the referralCode
    const referrer = await db
      .select()
      .from(users)
      .where(eq(users.referralCode, referrerCode))
      .limit(1)
      .execute();

    console.log("[referrer]: ", referrer);

    if (referrer.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Referrer not found.",
        },
        { status: 404 }
      );
    }

    // Return the referrer data
    return NextResponse.json(
      { success: true, referrer: referrer[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching referrer data:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error fetching referrer data.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
