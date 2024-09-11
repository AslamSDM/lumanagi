import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string; // Make sure id is of type string as you are using `createId()`
    address: string; // Add the address field to the User object
    referralCode: string; // Store the referralCode in the User object
  }

  /**
   * Returned by `useSession`, `getSession`, and received as a prop on the `SessionProvider`
   */
  interface Session {
    user: {
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
    } & DefaultSession["user"];
  }
}
