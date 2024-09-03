"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Services, servArr } from "@/lib/interface";
import Image from "next/image";
import BkgImage from "../assets/kelsey-curtis-sqdt0Gm613o-unsplash.jpg";


const words = ["Web Development.", "Email Templates.", "Content Creation."];

interface DrawerClientProps {
  data: Services;
}

const DrawerClient: React.FC<DrawerClientProps> = ({ data }) => {
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const [content, setContent] = useState<servArr | null>(null);

  useEffect(() => {
    console.log("Active Word:", activeWord);
    console.log("Data:", data);

    if (activeWord && data && Array.isArray(data.servicesDescription)) {
      const selectedContent = data.servicesDescription.find(
        (service) => service.serviceTitle === activeWord
      );
      setContent(selectedContent || null);
      console.log("Selected Content:", selectedContent);
    }
  }, [activeWord, data]);

  return (
    <div className="px-1  h-auto w-auto flex flex-col justify-center">
      {words.map((word, index) => (
        <Drawer key={index}>
          <DrawerTrigger onClick={(event) => {
                event.stopPropagation(); 

            setActiveWord(word)}} >
            <div
              className="w-auto h-auto text-left font-medium 
              text-titleMid leading-[4rem]
              sm:text-titleSmd
              smd:text-titleMd smd:leading-[6rem]
              md:text-titleLg md:leading-[8rem] 
              lg:text-titleLg lg:leading-[10rem] 
              2xl:text-titleXl 2xl:leading-[11rem]
              opacity-75 text-accent-200 
              hover:opacity-100  hover:text-accent-default  
               duration-300 ease-in-out"
            >
              {word}
            </div>
          </DrawerTrigger>
          <DrawerContent>
            {content && (
              <>
                <DrawerHeader className="">
                  <DrawerTitle className="pl-4 opacity-25">
                    {content.serviceTitle}
                  </DrawerTitle>
                  <DrawerDescription className="  md:h-screen flex">
                    <div className="md:basis-2/3 h-full flex flex-col md:flex-row p-4 justify-between gap-x-5">
                      <div className=" w-auto mt-5">
                        <p className="text-l lg:text-xl text-black-text">
                          {content.serviceInfo}
                        </p>
                        {/* KeyWords */}
                        <div className="flex md:basis-1/2 gap-4 flex-wrap mt-10">
                          {content.servicesKeyword.map((keywordObj, idx) => (
                            <span key={idx} className="p-2 bg-gray-200 rounded">
                              {keywordObj.keyword}
                            </span>
                          ))}
                        </div>

{/* View More Button */}
                        {/* <div className="mt-10">
                          <Button className="border-2 bg-accent-default text-background border-accent-default hover:bg-background hover:border-tangerine hover:text-accent-default hover:drop-shadow-lg transition duration-200 ease-in-out">
                            View Work
                          </Button>
                        </div> */}
                      </div>
                    </div>

                    {/* Right Div */}
                    <div className="md:basis-3/4 h-auto  justify-between gap-x-5"></div>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                  {/* <Button variant="outline">Close</Button> */}
                  </DrawerClose>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
};

export default DrawerClient;
