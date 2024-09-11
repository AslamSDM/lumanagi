import { ethers } from "ethers";
import { contractInfo } from "./info";

// export const provider = new ethers.providers.JsonRpcProvider(
//   process.env.NEXT_PUBLIC_TESTNET_RPC
// );

export function getAffiliateContract() {
  return {
    address: contractInfo.affiliateContract.testnet.address,
    abi: contractInfo.affiliateContract.testnet.abi,
  };
}

export function getPredictionContract() {
  return {
    addres: contractInfo.predictionContract.testnet.address,
    abi: contractInfo.predictionContract.testnet.abi,
  };
}

export const affiliateContract = new ethers.Contract(
  getAffiliateContract().address!,
  getAffiliateContract().abi
);
