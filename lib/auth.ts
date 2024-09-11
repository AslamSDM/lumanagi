import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { SiweMessage } from "siwe";
import { generateReferralCodeFromSeed } from "./referral";
import { db } from "@/database/db";
import { createId } from "@paralleldrive/cuid2";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

export interface ISession {
  address: string;
  db: {
    id: string;
    address: string;
    referralCode: string;
    referredById?: string;
    referred: {
      id: string;
      address: string;
      referralCode: string;
    } | null;
  };
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt", // Store session in JWT
  },
  pages: {
    signIn: "/auth", // Custom sign-in page
    error: "/error", // Custom error page
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        message: { type: "string" },
        signature: { type: "string" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const { message, signature } = credentials;

        try {
          const msg = JSON.parse(message);
          const { address } = msg;
          const siweMessage = new SiweMessage(msg);
          const { success } = await siweMessage.verify({ signature });
          if (!success) {
            console.error("SIWE message verification failed");
            return null;
          }

          // Generate referral code from address
          const refCode = generateReferralCodeFromSeed(siweMessage.address);

          // Insert user into the database using Drizzle ORM
          const result = await db
            .insert(users)
            .values({
              id: createId(),
              address: siweMessage.address,
              referralCode: refCode,
            })
            .onConflictDoNothing({ target: users.address }); // Avoid duplicates

          console.log("Database insert result:", result);

          // Return necessary data for JWT
          return {
            id: address,
            address: address,
            referralCode: refCode, // Pass the referral code as well
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    // JWT callback: populate token with address and referralCode
    async jwt({ token, user }) {
      if (user) {
        token.address = user.address;
        token.referralCode = user.referralCode; // Store referralCode in the JWT
      }
      return token;
    },

    // Session callback: attach database user data (including referralCode) to the session
    async session({ session, token }: { session: ISession | any; token: any }) {
      // Ensure the token has the address
      if (!token.sub) {
        throw new Error("Token subject is undefined");
      }

      // Query the user by the address (from token.sub)
      const mainUser = await db.query.users.findFirst({
        where: eq(users.address, token.sub),
        with: {
          referred: {
            columns: {
              id: true,
              address: true,
              referralCode: true,
            },
          },
        },
      });

      if (mainUser) {
        session.user = {
          address: token.sub as string,
          db: mainUser, // Attach main user info including referralCode
        };
        return session;
      } else {
        console.error("User not found in the database");
        return null;
      }
    },
  },
};
