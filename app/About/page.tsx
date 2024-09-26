import React from "react";
import Image from "next/image";
import profileImg from "../assets/IMG_1329.jpg";
import profileImg2 from "../assets/IMG_3498-Edit.png";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/lib/transitions/fadeIn";
import WindowPane from "@/components/WindowPane/windowpane01";
import AboutImg from '@/lib/transitions/aboutImg'

function About() {
  return (
    <div id="about" className=" relative w-full h-auto  flex flex-col ">
      <div className="h-full w-full fixed -mt-16 z-[1]">
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

      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center mt-[500px] lg:mt-[300px] lg:pl-10">
        <div className="max-w-3xl mx-auto h-auto md:px-5 gap-y-10 flex flex-col">
          <p className="text-titleSmd leading-[3.5rem] md:text-titleMd md:leading-[5rem] uppercase font-semibold opacity-85 text-neutral-default pl-2">
            Crafting Unique Digital Experiences.
          </p>
          <div className="w-auto h-full bg-white md:bg-transparent p-2">
            <p className="tracking-wide text-xl lg:text-secTitle text-accent-default font-normal uppercase ">
              <span className="bodyText capitalize italic font-bold">
                Hello!
              </span>{" "}
              I&apos;m Kenneth, the mind behind Debonair Fox Creative Studio. I
              believe that every story deserves to be told with elegance and
              creativity. With a background steeped in diverse creative
              pursuits, I have honed a keen eye for intriguing visuals and the
              subtleties of our environment.
            </p>
            <p className="tracking-wide text-xl lg:text-secTitle text-accent-default font-normal uppercase ">
              This heightened awareness allows me to find beauty in the most
              unexpected places, transforming the ordinary into extraordinary.
              As a thoughtful creative, I&apos;m passionate about making
              impactful first impressions and bringing my clients unique
              narratives to life.
            </p>
          </div>
        </div>

        {/* <div className="max-w-2xl h-full  flex justify-center items-center " > 
              <Image
              src={profileImg}
              width={0}
            height={0}
            alt="profile photo"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
              </div> */}
      </div>

      {/* Test fixed image */}
      <AboutImg>
      <div className="h-full w-full fixed mt-20 -z-10 left-0 bottom-0 flex justify-end ">
        <Image
          src={profileImg}
          width={0}
          height={0}
          alt="profile photo"
          priority={true}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            objectPosition: "left",
          }}
        />
      </div></AboutImg>

      <div className="w-full h-auto flex justify-center items-center bg-accent-default py-20">
        <div
          className="bodyText w-5/6 h-auto mx-auto 
      text-titleMid
      smd:text-titleSmd
      lg:text-titleSm 
 font-semibold leading-tight  text-white drop-shadow-md flex flex-wrap "
        >
          At DFSC, I don&apos;t just design; I craft bespoke digital experiences
          that resonate and inspire.
        </div>
      </div>
    </div>
  );
}

export default About;
