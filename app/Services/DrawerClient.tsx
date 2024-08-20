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
    <div className="px-1 break-words h-screen w-auto flex flex-col justify-center">
      {words.map((word, index) => (
        <Drawer key={index}>
          <DrawerTrigger onClick={() => setActiveWord(word)}>
            <div
              className="w-auto h-auto text-left text-accent-default font-medium 
              text-titleMid leading-[3rem]
              sm:text-titleSmd sm:leading-[4rem]
              smd:text-titleMd smd:leading-[5rem]
              md:text-titleLg md:leading-[7rem] 
              lg:text-titleLg lg:leading-[8rem] 
              2xl:text-titleXl 2xl:leading-[11rem] 
              opacity-20 hover:opacity-100     transition duration-300 ease-in-out"
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

                        <div className="mt-10">
                          <Button className="border-2 bg-accent-default text-background border-accent-default hover:bg-background hover:border-tangerine hover:text-accent-default hover:drop-shadow-lg transition duration-200 ease-in-out">
                            View Work
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Right Div */}
                    <div className="md:basis-3/4 h-auto  justify-between gap-x-5"></div>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose className="hidden lg:block"></DrawerClose>
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
