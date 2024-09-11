import referralCodeGenerator from "referral-code-generator";
import { generate, Charset } from "referral-codes";

import crypto from "crypto";

/**
 * Generates a unique and consistent referral code based on a given seed.
 * The referral code will always be the same for the same seed.
 *
 * @param seed - The input seed, typically a wallet address.
 * @returns A 6-character referral code.
 */
export const generateReferralCodeFromSeed = (seed: string): string => {
  // Create a SHA-256 hash of the seed
  const hash = crypto.createHash("sha256").update(seed).digest("hex");

  // Convert the hash to a Base64 string
  const base64 = Buffer.from(hash, "hex").toString("base64");

  // Encode the Base64 string and truncate to 6 characters
  const referralCode = base64.replace(/[^A-Za-z0-9]/g, "").substring(0, 6);

  return referralCode;
};

export const generateReferralCodeFromLength = (len: number) => {
  const referralCode = generate({
    length: len,
    count: 1,
    charset: Charset.ALPHABETIC,
  })[0];

  return referralCode;
};
