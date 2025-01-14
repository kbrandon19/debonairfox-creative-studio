import Image from "next/image";
import React from "react";

import screenShot from "../../assets/screenshot.png";
import jdaniel from "../../assets/jdaniel.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <div className="w-full h-auto xl:h-screen bg-white my-20 2xl:my-0 pt-20 xl:pt-0">
      <div className="w-5/6 h-auto mx-auto my-10">
      <div className="w-full h-auto flex flex-col gap-y-2 xl:gap-y-0  xl:justify-between content-center xl:items-center">
              
              <div className="max-w-96 ">
                <h1 className="text-titleSmd leading-[3.5rem] md:text-titleMd md:leading-[5rem] lg:text-titleLg lg:leading-[8rem] uppercase font-semibold  text-accent-default ">
                  Content Creation<span className="text-tangerine">.</span>
                </h1>
              </div>
              
              <div className="font-light  w-full  md:w-1/2  text-l lg:text-xl opacity-75 text-black-text my-5">
                <p >
                Our content creation services spotlight projects where our visual storytelling has elevated social media presence, engaged audiences, and brought brand visions to life. Explore how we’ve helped businesses connect with their followers, amplify their message, and create meaningful impact through our tailored approach and creative expertise.
                </p>
              </div>
            </div>
      </div>

      <div className="w-full md:w-5/6 h-auto  mx-auto flex flex-col  md:flex-row md:gap-5 md:justify-center">

{/* Case Study 1 */}
        
          <div className="w-full md:w-1/2 h-1/2  bg-gradient-to-tr from-fc-charcoal to-fc-plum flex flex-col-reverse justify-end items-center  drop-shadow-xl py-10 md:rounded-lg">
   
          <div className="w-full h-full flex ">
              <Link href={"case-study/florece"} className="flex justify-center items-center">
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

          <div className="w-full md:w-1/2 h-1/2  bg-gradient-to-tr from-fc-charcoal to-fc-plum flex flex-col-reverse justify-end items-center  drop-shadow-xl py-10 md:rounded-lg">
   
          <div className="w-full h-full flex ">
              <Link href={"case-study/florece"} className="flex justify-center items-center">
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

          
     


        
        



      </div>
    </div>
  );
}

export default page;
