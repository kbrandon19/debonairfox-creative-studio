

import React from "react";
import Image from "next/image";
import Link from "next/link";

import profileImg2 from "../assets/IMG_3498-Edit.png";
import { Button } from "@/components/ui/button";


function About() {
  return (
    <div id="about" className=" relative w-full h-auto  flex flex-col mb-40">
      {/* BackgroundImage */}
      <div className="h-full w-full fixed -mt-16 -z-10">
        <Image
          src={
            "https://res.cloudinary.com/dujkjy2e2/image/upload/v1710820177/Debonair%20Fox%20Creative%20Studio/Images/1920_x_banner_u5tgoc.png"
          }
          fill={true}
          quality={80}
          priority={true}
          alt="mobile-background"
          style={{ objectFit: "cover", opacity: ".3" }}
        />
      </div>

      <div className="w-full h-full flex flex-col md:flex-row items-center lg:mt-28 xl:mt-40">
        <div className="w-full mx-auto h-auto   flex flex-col">
          {/* Top Intro Text */}
          <div className="w-5/6 h-screen xl:h-auto mt-36 md:mt-10 pl-2 md:pl-0 flex align-center break-words">
            <h1 className="text-titleSmd leading-[3.5rem] md:text-titleMd md:leading-[5.5rem]  2xl:text-titleLg 2xl:leading-[8rem] font-semibold  text-accent-default uppercase">
              Crafting unique digital creations that resonate and inspire
              <span className="text-tangerine">.</span>
            </h1>
          </div>

          {/* Bio Section */}
          <div className="h-auto w-full flex flex-col md:flex-row gap-y-10 md:gap-y-0 gap-x-5 justify-end">
            <div className="md:w-2/3 flex justify-center">
              <div className="w-auto h-full md:w-3/4 md:h-3/4  
              md:[clip-path:polygon(0_0%,75%_0%,100%_100%,25%_100%)] 
              2xl:[clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)]">
                <Image
                  src={profileImg2}
                  width={0}
                  height={0}
                  alt="profile photo"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    objectPosition: "top",
                  }}
                  priority
                />{" "}
              </div>
            </div>

            <div className="flex flex-col content-center flex-wrap w-full md:w-2/3 p-4">
              <div>
                <p className="bodyText text-Xl leading-[2re] md:text-titleMid md:leading-[3.5rem] font-light pt-10 text-accent-default ">
                  <span className="bodyText capitalize italic font-bold text-titleMid ">
                    Hello!
                  </span>{" "}
                  I&apos;m Kenneth, the mind behind Debonair Fox Creative
                  Studio. I believe that every story deserves to be told with
                  elegance and creativity. With a background steeped in diverse
                  creative pursuits, I have honed a keen eye for intriguing
                  visuals and the subtleties of our environment.
                </p>
               
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="w-full h-auto flex p-4">
            <div className="md:w-1/2 ">
              <p className="bodyText text-Xl leading-[2re] md:text-titleMid md:leading-[3.5rem] font-light text-accent-default ">
                This heightened awareness allows me to find beauty in the most
                unexpected places, transforming the ordinary into extraordinary.
                As a thoughtful creative, I&apos;m passionate about making
                impactful first impressions and bringing my clients unique
                narratives to life.
              </p>

            </div>
          </div>

          {/* Three */}
          <div className="w-full h-auto mx-auto text-tangerine flex flex-col gap-y-10 justify-center align-center text-center bg-accent-default py-20 px-10 mt-40">
            <h1 className="text-titleSmd leading-[4rem] font-semibold">
              Looking for a Unique Creative Partner?
            </h1>
            <p className="text-xl md:text-Xl w-full md:w-2/3 mx-auto text-background">
              Let us craft visually stunning designs that make your brand stand
              out. Get in touch today and bring your vision to life with a
              creative touch like no other!
            </p>
            <div className="w-auto mt-10 ">
              <Button className="  text-background bg-accent-default hover:bg-tangerine text-lg tracking-widest rounded-none border-solid border-tangerine border-2 hover:text-accent-default hover:border-tangerine">
                <Link href={"/Contact"}>Let&apos;s Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
