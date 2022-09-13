import "../styles/globals.css";

import type { AppProps } from "next/app";

import { NextComponentType } from "next";
import { Session } from "next-auth";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

export interface CustomAppProps extends AppProps {
  Component: NextComponentType;
  pageProps: { session?: Session };
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
