import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../assets/IMG_1329.jpg";
import profileImg2 from "../assets/IMG_3498-Edit.png";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/lib/transitions/fadeIn";
import WindowPane from "@/components/WindowPane/windowpane01";
import AboutImg from "@/lib/transitions/aboutImg";
import TradeCoffee from "../assets/tradecoffee.png";
import YoMartez from "../assets/yoMartez.png";
import Bottomless from "../assets/bottomless.png";
import Hims from "../assets/hims1685.jpg";

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
        <div className="w-full mx-auto h-auto  gap-y-10 flex flex-col">
          {/* Top Intro Text */}
          <div className="w-3/4 h-screen xl:h-auto mt-36 md:mt-10 lg:mt-0 pl-2 md:pl-0 flex align-center">
            <h1 className="text-titleSmd leading-[3.5rem] md:text-titleMd md:leading-[5.5rem]  2xl:text-titleLg 2xl:leading-[8rem] font-semibold  text-accent-default uppercase ">
              Creating unique digital experiences that resonate and inspire
              <span className="text-tangerine">.</span>
            </h1>
          </div>
          {/* Bio */}
          <div className="h-auto w-full flex flex-col md:flex-row gap-x-5 justify-between p-4 mb-40">
            <div className="w-full md:w-2/3">
              <h3 className=" uppercase text-xl font-semibold text-accent-default leading-5 md:leading-0">
                Bio<span className="text-tangerine">.</span>
              </h3>
            </div>

            <div className="flex flex-col flex-wrap w-full md:w-2/3">
              <div>
                <p className="text-secTitle leading-[3rem] font-light text-accent-default">
                  <span className="bodyText capitalize italic font-bold ">
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
          <div className="w-full h-auto flex flex-col md:flex-row p-4 ">
            <div className="md:w-1/2 flex flex-col gap-y-16 ">
              <p className="bodyText text-titleSmd leading-[3.5rem] 2xl:text-titleSm 2xl:leading-[5.5rem] font-light text-accent-default">
                This heightened awareness allows me to find beauty in the most
                unexpected places, transforming the ordinary into extraordinary.
                As a thoughtful creative, I&apos;m passionate about making
                impactful first impressions and bringing my clients unique
                narratives to life.
              </p>

              {/* <div className="w-auto ml-40">
                <Button className="border-b-2  rounded-none text-black-text hover:text-background  hover:bg-tangerine transition-colors ease-in-out ">
                  <Link href={"/Contact"}>Let work together</Link>
                </Button>
              </div> */}
            </div>
            <div className="md:w-1/2 h-auto mx-auto flex justify-center items-start">
              <div className="max-w-2xl h-auto  flex justify-center items-center ">
                <Image
                  src={profileImg2}
                  width={0}
                  height={0}
                  alt="profile photo"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Three */}
          <div className="w-auto h-auto mx-auto bg-tangerine flex flex-col justify-center align-center text-center text-accent-default py-20 mt-40">
<h1 className="text-titleSmd font-semibold">Looking for a Unique Creative Partner?</h1>
<p className="text-Xl w-2/3 mx-auto text-background">Let us craft visually stunning designs that make your brand stand out. Get in touch today and bring your vision to life with a creative touch like no other!</p>
<div className="w-auto mt-10">
                <Button className=" bg-background text-black-text">
                  <Link href={"/Contact"}>Let work together</Link>
                </Button>
              </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default About;
