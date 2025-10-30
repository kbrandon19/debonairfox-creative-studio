

import React from "react";
import Image from "next/image";
import Link from "next/link";

// import profileImg2 from "../assets/IMG_3498-Edit.png";
import { Button } from "@/components/ui/button";
import BackgroundImage from "@/components/BackgroundImage/page";


function About() {
  return (
    <div id="about" className=" relative w-full h-auto  flex flex-col mb-40">
      {/* BackgroundImage */}

  <BackgroundImage/>


      <div className="w-full h-full flex flex-col md:flex-row items-center lg:mt-[80px] xl:mt-40">
        <div className="w-full mx-auto h-auto   flex flex-col">
          {/* Top Intro Text */}
          <div className="w-2/3 h-screen xl:h-auto mt-36 md:mt-10 pl-2 md:pl-0 flex align-content-end break-words">
            <h1 className="text-titleSmd leading-[3.5rem] md:text-titleMd md:leading-[5.5rem]  font-semibold  text-accent-default uppercase">
              Crafting unique digital creations that resonate and inspire
              <span className="text-tangerine">.</span>
            </h1>
          </div>

          {/* Bio Section */}
          <div className="h-auto w-full flex flex-col md:flex-row gap-y-10 md:gap-y-0 gap-x-5 justify-end">

            {/* Image */}
            <div className="md:w-2/3 flex justify-center">
              <Image
                src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1736807679/Debonair%20Fox%20Creative%20Studio/Images/IMG_3498-Edit_ssoooq.jpg"
                alt="profile photo"
                width={800}   // example
                height={1000} // example, maintain aspect ratio
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                  objectPosition: "top",
                }}
                priority
              />
            </div>


            <div className="flex flex-col content-center  flex-wrap w-full md:w-2/3 p-4">

              {/* Bio Paragraph */}
              <div className="w-auto h-full flex flex-col content-center justify-around">
                <div>
                <p className="bodyText text-Xl leading-[2rem] md:text-titleMid md:leading-[3.5rem] font-light pt-10 text-accent-default ">
                  <span className="bodyText capitalize italic font-bold text-titleMid ">
                    Hello!
                  </span>{" "}
                  I&apos;m Kenneth, the mind behind Debonair Fox Creative
                  Studio. I believe that every story deserves to be told with
                  elegance and creativity. <br /><br />
                  As a thoughtful creative, I&apos;m passionate about making
                  impactful first impressions and bringing my clients unique
                  narratives to life.
                  {/*With a background steeped in diverse
                   creative pursuits, I have honed a keen eye for intriguing
                  visuals and the subtleties of our environment.

                  This heightened awareness allows me to find beauty in the most
                unexpected places, transforming the ordinary into extraordinary. */}

                </p></div>
                <div className="w-auto h-auto ">
                  <p className="bodyText text-Xl leading-[2rem]">Ready to bring your vision to life? Let’s create something captivating—crafted with creativity, purpose, and style.</p>
                  <Button className="  text-background bg-accent-default text-lg tracking-widest rounded-none">
                <Link href="mailto:kbrandon319@gmail.com">Let&apos;s Work</Link>
              </Button>
                </div>
              </div>

            </div>
          </div>

          {/* remove Banner CTA */}
          {/* <div className="w-full h-auto mx-auto text-tangerine flex flex-col gap-y-10 justify-center align-center text-center bg-accent-default py-20 px-10 mt-40">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
