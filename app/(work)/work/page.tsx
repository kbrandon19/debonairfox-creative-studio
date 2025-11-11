import Image from "next/image";
import React from "react";

import screenShot from "../../assets/screenshot.png";
import Link from "next/link";
// import { Button } from "@/components/ui/button";

function page() {
  return (
    <div className="w-full h-auto xl:h-screen bg-white my-20 2xl:my-0 pt-10 xl:pt-0 ">

      {/* start of grid */}
      <div className="w-5/6 mx-auto h-auto my-10 grid grid-cols-1 md:grid-cols-2">

        {/* work intro text */}
        <div className="">
          <h1 className="text-titleSmd leading-[3.5rem] md:text-titleMd md:leading-[5rem] lg:text-titleLg lg:leading-[8rem] uppercase font-semibold  text-accent-default ">
            Work<span className="text-tangerine">.</span>
          </h1>
          <div className="font-light  w-full  text-l lg:text-xl opacity-75 text-black-text my-5">
            <p className="px-2">
              At DFCS, we take pride in transforming our clients&apos; visions into reality. Our case studies showcase a range of projects where our innovative design and development solutions have made a significant difference. Explore how we’ve helped businesses elevate their digital presence, engage their audiences, and achieve their goals through our bespoke approach and creative expertise.
            </p>
          </div>
        </div>
        {/* Featured project */}
        <div className="w-full bg-gradient-to-tr from-fc-charcoal to-fc-plum flex flex-col-reverse justify-end items-center  drop-shadow-xl">
          <div className="w-full h-full flex justify-center items-center">
            <Link href={"work/florece"} className="flex justify-center items-center">
              <Image
                src={screenShot}
                width={0}
                height={0}
                alt="Profile photo"
                style={{ objectFit: "contain", width: "90%", height: "90%" }}
                className="drop-shadow-xl block"
              />

            </Link>
          </div>
        </div>

        {/* Remaining projects */}
        {/* <div className="">
          <div className="w-full h-full flex justify-center">
            <Link href={"work/florece"} className="flex justify-center items-center">
              <Image
                src={screenShot}
                width={0}
                height={0}
                alt="Profile photo"
                style={{ objectFit: "contain", width: "90%", height: "90%" }}
                className="drop-shadow-xl block"
              />

            </Link>
          </div>
        </div>

        <div className="">
          <div className="w-full h-full flex justify-center">
            <Link href={"work/florece"} className="flex justify-center items-center">
              <Image
                src={screenShot}
                width={0}
                height={0}
                alt="Profile photo"
                style={{ objectFit: "contain", width: "90%", height: "90%" }}
                className="drop-shadow-xl block"
              />

            </Link>
          </div>
        </div> */}

      </div>

      {/*end of grid*/}




    </div>
  );
}

export default page;
