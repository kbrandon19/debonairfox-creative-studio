import React from "react";
import Image from "next/image";
import HeroTextTransition from "@/lib/transitions/herotext";
import HeroTran from "@/lib/transitions/heroTran";
import BackgroundImage from "../BackgroundImage/page";

function Hero() {
  return (
    <div className="w-full h-screen relative break-words ">
      
    <BackgroundImage/>

      <HeroTextTransition>
        <HeroTran>

        <div className="w-full h-auto mx-auto fixed bottom-10 text-left pl-2 z-hero-text">
          <p className="h-auto mx-auto text-titleSmd smd:text-titleMd md:text-titleLg  2xl:text-titleXl font-bold uppercase text-accent-default drop-shadow-lg leading-[3.5rem] smd:leading-[5rem] md:leading-[7.5rem] 2xl:leading-[10rem]">
            Debonair Fox Creative Studio
            <span className="text-tangerine">.</span>
          </p>
        </div>
        </HeroTran>
      </HeroTextTransition>
    </div>
  );
}

export default Hero;