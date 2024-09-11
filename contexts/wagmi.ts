import { connectorsForWallets, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { metaMaskWallet, rainbowWallet } from "@rainbow-me/rainbowkit/wallets";
import { createConfig, http } from "wagmi";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  polygonAmoy,
  polygonMumbai,
  sepolia,
} from "wagmi/chains";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommened",
      wallets: [metaMaskWallet],
    },
  ],
  {
    appName: "RainbowKit demo",
    projectId: "97694e211d184a164607ecba013290c7",
  }
);

// export const config = createConfig({
//   connectors,
//   chains: [mainnet],
// });

export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "97694e211d184a164607ecba013290c7",
  chains: [
    mainnet,
    polygon,
    polygonMumbai,
    polygonAmoy,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  transports: {
    [polygonAmoy.id]: http("https://rpc.ankr.com/polygon_amoy	"),
  },
});
