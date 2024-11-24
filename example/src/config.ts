import { QueryClient } from "@tanstack/react-query";
import { http, createConfig } from "wagmi";
// import { odysseyTestnet } from 'wagmi/chains'
import { defineChain } from "viem";

export const queryClient = new QueryClient();
export const odysseyTestnet = defineChain({
  id: 889907,
  name: "odysseyTestnet",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://odyssey-rpc.jibl2.com/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://odyssey.jibl2.com/",
    },
  },
});
export const wagmiConfig = createConfig({
  chains: [odysseyTestnet],
  pollingInterval: 1000,
  transports: {
    [odysseyTestnet.id]: http(),
  },
});

export const client = wagmiConfig.getClient();
export type Client = typeof client;
