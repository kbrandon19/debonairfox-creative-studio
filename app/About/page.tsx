import React from "react";
import Image from "next/image";
import profileImg from "../assets/Group 57.png";
import profileImg2 from "../assets/IMG_3498-Edit.png";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <div id="about" className="w-auto h-auto bg-white py-36  flex flex-col gap-y-20">
      {/* First Line */}
      {/* <div className="w-full  lg:w-5/6 mx-auto h-auto flex flex-col md:flex-row px-5">
      <div className="h-auto basis-1/2 flex justify-center items-center ">
          <Image
            src={profileImg}
            width={516}
            height={556}
            alt="profile photo"
          />
        </div>
        <div className="basis-1/2  flex gap-y-32 flex-col">
          <div className="relative">
            <p className="text-titleMid leading-[3rem] md:text-titleMd md:leading-[5rem] uppercase font-semibold opacity-75 text-accent-100 ">
              Crafting Unique Digital Experiences
              <div className="flex flex-col gap-2 -ml-10 absolute bottom-20 -z-10">
                <div className="h-16 w-16 bg-accent-default rounded-full">{" "}</div>
                <div className="h-16 w-16 bg-tangerine rounded-full">{" "}</div>
                <div className="h-16 w-16 bg-background rounded-full">{" "}</div>
              </div>
            </p>
          </div>
          <p className="bodyText font-regular text-l md:text-xl opacity-75 text-accent-100">
            At Debonair Fox Creative Studio, we believe that every story
            deserves to be told with elegance and creativity. With a background
            steeped in diverse creative pursuits, we’ve honed a keen eye for
            intriguing visuals and the subtleties of our environment. This
            heightened awareness allows us to find beauty in the most unexpected
            places, transforming the ordinary into extraordinary. As thoughtful
            creatives, were passionate about making impactful first impressions
            and bringing our clients unique narratives to life. At Debonair Fox,
            we dont just design; we craft bespoke digital experiences that
            resonate and inspire.
          </p>
        </div>
        
      </div> */}

      <div className="w-full  lg:w-4/6 mx-auto h-auto p-4">
        <div className=" h-full grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-4 gap-2">
          <div className="relative order-1 col-start-1 xlg:col-start-2 content-end">
            <p className="text-titleMid leading-[3rem] md:text-titleMd md:leading-[5rem] uppercase font-semibold opacity-75 text-accent-100 ">
              Crafting Unique Digital Experiences
            </p>
            <div className="flex flex-col gap-2 -ml-10 absolute bottom-18">
              <div className="h-16 w-16 bg-accent-default rounded-full drop-shadow-md opacity-35 md:opacity-100">
                {" "}
              </div>
              <div className="h-16 w-16 bg-tangerine rounded-full drop-shadow-md opacity-35 md:opacity-100">
                {" "}
              </div>
              <div className="h-16 w-16 bg-background rounded-full drop-shadow-md opacity-35 md:opacity-100">
                {" "}
              </div>
            </div>
          </div>
          <div className="order-2 col-start-1 md:row-span-3 md:row-start-2  justify-self-center md:justify-self-end mt-10 md:pr-5">
            <Image
              src={profileImg}
              width={516}
              height={556}
              alt="profile photo"
            />
          </div>
          <div className="order-3 row-span-2 row-start-2 md:pt-20 mt-5 md:border-l-4 md:border-tangerine md:pl-4">
            <p className=" font-thin tracking-wide text-l md:text-xl opacity-75 text-accent-100 ">
              I&apos;m Kenneth the mind behind Debonair Fox Creative Studio. I
              believe that every story deserves to be told with elegance and
              creativity. With a background steeped in diverse creative
              pursuits, I have honed a keen eye for intriguing visuals and the
              subtleties of our environment. This heightened awareness allows us
              to find beauty in the most unexpected places, transforming the
              ordinary into extraordinary. As a thoughtful creative, I&apos;m
              passionate about making impactful first impressions and bringing
              my clients unique narratives to life. At DFSC, I don&apos;t just
              design; I craft bespoke digital experiences that resonate and
              inspire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
