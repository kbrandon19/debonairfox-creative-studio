import Image from "next/image";
import React from "react";

import screenShot from "../../assets/screenshot.png";
import jdaniel from "../../assets/jdaniel.png";
import Link from "next/link";

function page() {
  return (
    <div className="w-full h-screen bg-white my-20">
      <div className="w-5/6 h-auto mx-auto my-10">
      <div className="w-full h-auto flex flex-col gap-y-2 xl:gap-y-0  xl:justify-between content-center xl:items-center">
              
              <div className="max-w-96 ">
                <h1 className="text-titleSmd leading-[3.5rem] md:text-titleMd md:leading-[5rem] lg:text-titleLg lg:leading-[8rem] uppercase font-semibold opacity-75 text-accent-100 ">
                  Case Study<span className="text-tangerine">.</span>
                </h1>
              </div>
              
              <div className="font-light  w-full  md:w-1/2  text-l lg:text-xl opacity-75 text-black-text my-5">
                <p >
                At DFCS, we take pride in transforming our clients&apos; visions into reality. Our case studies showcase a range of projects where our innovative design and development solutions have made a significant difference. Explore how we’ve helped businesses elevate their digital presence, engage their audiences, and achieve their goals through our bespoke approach and creative expertise.
                </p>
              </div>
            </div>
      </div>

      <div className="w-full md:w-5/6 h-full  mx-auto flex flex-col md:flex-row md:gap-5">

        <div className="w-ful md:w-1/2 h-1/2  bg-gradient-to-tr from-fc-charcoal to-fc-plum flex flex-col-reverse justify-end items-center  drop-shadow-xl">
          {/* <h1 className="text-secTitle md:text-titleMid leading-[3rem] font-normal text-fc-charcoal">
            florece consulting
          </h1> */}
<div className="w-full h-full flex ">
    <Link href={"case-study/website"} className="flex justify-center items-center">
 
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

        <div className="w-ful md:w-1/2 h-1/2  bg-gradient-to-tr from-gray-300 to-black-main flex flex-col-reverse justify-end items-center  drop-shadow-xl">
          {/* <h1 className="text-secTitle md:text-titleMid leading-[3rem] font-normal text-fc-charcoal">
            j daniel
          </h1> */}
          <div className="w-full h-full flex  justify-center items-center">
            <Image
              src={jdaniel}
              width={0}
              height={0}
              alt="profile photo"
              style={{ objectFit: "contain", width: "90%", height: "90%" }}
              className="drop-shadow-xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default page;
