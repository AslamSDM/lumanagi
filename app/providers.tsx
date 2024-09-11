"use client";
import React, { useEffect, useState } from "react";
import ThemeProvider from "./theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "../contexts/wagmi";
import {
  darkTheme,
  Locale,
  midnightTheme,
  RainbowKitAuthenticationProvider,
  RainbowKitProvider,
  Theme,
} from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import "@rainbow-me/rainbowkit/styles.css";
import { myCustomTheme } from "@/contexts/myCustomTheme";
import { authenticationAdapter } from "@/contexts/authentication";
import {
  GetSiweMessageOptions,
  RainbowKitSiweNextAuthProvider,
} from "@rainbow-me/rainbowkit-siwe-next-auth";
import { getSession, SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import type { Session } from "next-auth";

// import merge from "lodash.merge";

// const myTheme = merge(darkTheme(), {
//   colors: {
//     accentColor: "white",
//   },
// } as Theme);

const queryClient = new QueryClient();

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: "Sign in to my RainbowKit app",
});

function Providers({ children }: { children: React.ReactNode }) {
  // const { locale } = useRouter() as { locale: Locale };

  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    async function fetchSession() {
      const session = await getSession();
      setSession(session);
    }
    fetchSession();
  }, []);

  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <WagmiProvider config={config}>
          <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
              <RainbowKitSiweNextAuthProvider
                getSiweMessageOptions={getSiweMessageOptions}
              >
                <RainbowKitProvider
                  modalSize="compact"
                  showRecentTransactions={true}
                  theme={myCustomTheme}
                >
                  {children}
                </RainbowKitProvider>
              </RainbowKitSiweNextAuthProvider>
            </QueryClientProvider>
          </SessionProvider>
        </WagmiProvider>
      </ThemeProvider>
    </>
  );
}

export default Providers;
