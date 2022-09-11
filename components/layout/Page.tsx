import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  isHome?: boolean;
}

const Page: NextPage<Props> = ({
  children,
  title,
  description,
  isHome = false,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-10 relative">
        <Header isHome={isHome} />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Page;
