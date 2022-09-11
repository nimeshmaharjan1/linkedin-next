import React from "react";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center max-w-screen-lg mx-auto">
      <div className="left | space-y-6 xl:space-y-10">
        <h1 className="text-3xl md:text-5xl text-amber-800/60 max-w-xl !leading-snug pl-4 xl:pl-0">
          Welcome to your professional community
        </h1>
        <div className="space-y-4 px-4 sm:px-0 lg:mr-12">
          <div className="intent">
            <h2 className="text-xl">Search for a job</h2>
            <ArrowForwardIosRoundedIcon className="text-gray-700"></ArrowForwardIosRoundedIcon>
          </div>
          <div className="intent">
            <h2 className="text-xl">Find a person you know</h2>
            <ArrowForwardIosRoundedIcon className="text-gray-700"></ArrowForwardIosRoundedIcon>
          </div>
          <div className="intent">
            <h2 className="text-xl">Learn a new skill</h2>
            <ArrowForwardIosRoundedIcon className="text-gray-700"></ArrowForwardIosRoundedIcon>
          </div>
        </div>
      </div>
      <div className="right | relative lg:absolute w-80 h-80 lg:w-[650px] lg:h-[650px] top-14 right-5">
        <Image src="/images/hero/hero.svg" layout="fill" priority></Image>
      </div>
    </main>
  );
};

export default Hero;
