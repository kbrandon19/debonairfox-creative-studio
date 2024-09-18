import React from "react";
import Image from "next/image";
import TextBackground from "../TextBackground/page";
import Transition from "@/lib/transitions/heroTran";
import HeroTextTransition from "@/lib/transitions/herotext";
import TextTransition from "@/lib/transitions/textBackgorund";

function Hero() {
  return (
    <>
      <div className="w-full h-screen relative break-words ">
        <div className="h-full w-full fixed -mt-16 -z-10">
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
        {/* this is the blob feature, it will be hidden when the screen is a the top and will be visible when the screen is scrolled down over the window pane */}
        {/* <div className=' w-full h-auto   fixed -z-10 top-0 bottom-0 flex justify-center items-center text-center'>
            <div className='blob fixed -z-10'>
                <Image
                    src='https://kbrandon19.github.io/assets/blob(1).svg'
                    width={600}
                    height={500}
                    // style={{width:'100%',height:'auto'}}
                    alt='blob'
                />
            </div>
            <p className='w-5/6 h-auto mx-auto text-titleSm lg:text-titleMd 2xl:text-titleLg  font-bold leading-tight uppercase text-accent-default drop-shadow-md'>
            Creating a digital presence doesn’t have to be hard.
            </p>
        </div> */}

        <HeroTextTransition>
          <div className="w-full h-auto mx-auto  fixed -z-10 bottom-10  text-left pl-2">
            
            <p className="h-auto mx-auto text-titleSmd smd:text-titleMd md:text-titleLg lg:text-titleLg 2xl:text-titleXl  font-bold uppercase text-accent-default drop-shadow-lg leading-[3.5rem] smd:leading-[5rem] md:leading-[7.5rem] 2xl:leading-[10rem]">
              Debonair Fox Creative Studio<span className="text-tangerine">.</span>
            </p>

          
            
          </div>
        </HeroTextTransition>
      </div>
    </>
  );
}

export default Hero;
