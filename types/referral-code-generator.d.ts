// referral-code-generator.d.ts
declare module "referral-code-generator" {
  export function custom(
    charset: string,
    length: number,
    count: number,
    seed: string
  ): string;
}
