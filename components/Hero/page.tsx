import React from "react";
import Image from "next/image";
import HeroTextTransition from "@/lib/transitions/herotext";

function Hero() {
  return (
    <div className="w-full h-screen relative break-words ">
      <div className="h-full w-full fixed -mt-16 z-background ">
        <Image
          src={
            "https://res.cloudinary.com/dujkjy2e2/image/upload/v1710820177/Debonair%20Fox%20Creative%20Studio/Images/1920_x_banner_u5tgoc.png"
          }
          fill={true}
          quality={80}
          priority={true}
          alt="mobile-background"
          style={{ objectFit: "cover", opacity: ".5" }}
        />
      </div>

      <HeroTextTransition>
        <div className="w-full h-auto mx-auto fixed bottom-10 text-left pl-2 z-hero-text">
          <p className="h-auto mx-auto text-titleSmd smd:text-titleMd md:text-titleLg  2xl:text-titleXl font-bold uppercase text-accent-default drop-shadow-lg leading-[3.5rem] smd:leading-[5rem] md:leading-[7.5rem] 2xl:leading-[10rem]">
            Debonair Fox Creative Studio
            <span className="text-tangerine">.</span>
          </p>
        </div>
      </HeroTextTransition>
    </div>
  );
}

export default Hero;