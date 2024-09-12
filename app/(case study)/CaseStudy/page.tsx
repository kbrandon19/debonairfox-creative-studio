import Image from "next/image";
import React from "react";

import screenShot from "../../assets/screenshot.png";
import jdaniel from "../../assets/jdaniel.png";
import Link from "next/link";

function page() {
  return (
    <div className="w-full h-screen bg-accent-default">
      <div className="w-5/6 h-full  mx-auto p-5 flex gap-5">
      
    <div className="w-1/2 h-1/2  bg-gradient-to-tr from-fc-charcoal to-fc-plum flex flex-col-reverse justify-end items-center p-10">
    <h1 className="text-secTitle md:text-titleMid leading-[3rem] font-normal text-fc-charcoal">florece consulting</h1>
    <div className="w-full h-full flex  justify-center items-center">
      <Image
              src={screenShot}
              width={0}
              height={0}
              alt="profile photo"
              style={{ objectFit: "contain", width: "75%", height: "75%" }}
              className="drop-shadow-xl"
      
            />
    </div>
    </div>




    <div className="w-1/2 h-1/2  bg-gradient-to-tr from-gray-300 to-black-main flex flex-col-reverse justify-end items-center p-10">
    <h1 className="text-secTitle md:text-titleMid leading-[3rem] font-normal text-fc-charcoal">j daniel</h1>
    <div className="w-full h-full flex  justify-center items-center">
      <Image
              src={jdaniel}
              width={0}
              height={0}
              alt="profile photo"
              style={{ objectFit: "contain", width: "75%", height: "75%" }}
              className="drop-shadow-xl"
      
            />
    </div>
    </div>



      </div>

    </div>
  );
}

export default page;
