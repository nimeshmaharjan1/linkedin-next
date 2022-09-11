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
      <div className="relative bg-[#FEF2Ef] dark:bg-black dark:text-white min-h-screen overflow-y-scroll md:space-y-6">
        <Header isHome={isHome} />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Page;
