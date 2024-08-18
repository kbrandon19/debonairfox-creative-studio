import React from "react";
import Image from "next/image";
import TextBackground from "../TextBackground/page";
import Transition from '@/lib/transitions/heroTran';

function Hero() {
  return (
    <>
      {/* Option 1 */}
      {/* <div className='w-full h-screen relative '>
        <div className=' w-full h-auto   fixed -z-10 top-0 bottom-0 flex justify-center items-center text-center'>
            <div className='blob fixed -z-10'>
                <Image
                    src='https://kbrandon19.github.io/assets/blob(1).svg'
                    width={600}
                    height={500}
                    // style={{width:'100%',height:'auto'}}
                    alt='blob'
                />

             
            </div>
            <p className='w-5/6 h-auto mx-auto text-titleSm lg:text-titleMd 2xl:text-titleLg  font-bold leading-tight uppercase text-primary-default drop-shadow-md'>
            Creating a digital presence doesn’t have to be hard.
            </p>
        </div>
    </div> */}

      {/* Option 2 */}
      <div className="w-full h-screen relative">
        <Transition>
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
        </Transition>

{/* 
        <div className='w-5/6 h-full mx-auto flex justify-center items-center italic font-semibold tracking-wide'>
        Get ready to embark on a creative journey with our upcoming creative studio, where innovation thrives. As a thoughtful creative, I&apos;m passionate about making impactful first impressions and bringing my clients unique narratives to life. At DF Creatice Studio, I dont just design; I craft bespoke digital experiences that resonate and inspire.
        </div> */}
        
        <div className="w-full h-auto mx-auto  fixed -z-10 bottom-5 flex justify-center items-center text-left">
          <p className="h-auto mx-auto text-titleSm md:text-titleMd lg:text-titleLg 2xl:text-titleXl  font-bold uppercase text-accent-default drop-shadow-md leading-[4rem] md:leading-[5rem] lg:leading-[8rem] 2xl:leading-[10rem]">
            Debonair Fox Creative Studio
          </p>
        </div>
        
      </div>
    </>
  );
}

export default Hero;
