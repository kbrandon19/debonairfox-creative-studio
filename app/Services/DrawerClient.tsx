"use client"

import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link'
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

const words = ["Web Design & Development.", "Content Creation."];

interface DrawerClientProps {
  data: Services;
}

const DrawerClient: React.FC<DrawerClientProps> = ({ data }) => {
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const [content, setContent] = useState<servArr | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (activeWord && data && Array.isArray(data.servicesDescription)) {
      const selectedContent = data.servicesDescription.find(
        (service) => service.serviceTitle === activeWord
      );
      setContent(selectedContent || null);
    }
  }, [activeWord, data]);

  const handleOpen = (word: string) => {
    setActiveWord(word);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="px-1 h-screen w-auto flex flex-col justify-start">
      {words.map((word, index) => (
        <div key={index} onClick={() => handleOpen(word)} className="cursor-pointer">
          <div className=" relative w-auto h-auto text-left font-semibold 
            text-titleSmd leading-[4rem]
            sm:text-titleMd sm:leading-[6rem]
            smd:text-titleLg smd:leading-[7rem]
            md:text-titleLg md:leading-[8rem] 
            lg:text-titleLg lg:leading-[10rem] 
            2xl:text-titleXl 2xl:leading-[11.75rem]
            opacity-75 text-accent-100 
            hover:opacity-100 hover:text-accent-default 
            duration-300 ease-in-out break-words">
            {word}
          </div>
        </div>
      ))}

      <Drawer open={open} onOpenChange={setOpen} >
        <DrawerContent className="focus:outline-none outline-none">
          {content && (
            <>
              <DrawerHeader>
                <DrawerTitle className="pl-4 opacity-5">
                  {content.serviceTitle}
                </DrawerTitle>
                <DrawerDescription className="md:h-screen flex">
                  <div className="md:basis-2/3 h-full flex flex-col md:flex-row p-4 justify-between gap-x-5">
                    <div className="w-auto mt-5">
                    <div className="flex md:basis-1/2 gap-4 flex-wrap my-5">
                        {content.servicesKeyword.map((keywordObj, idx) => (
                          <span key={idx} className="p-2 bg-gray-200 rounded">
                            {keywordObj.keyword}
                          </span>
                        ))}
                      </div>
                      <p className="text-l lg:text-xl 2xl:text-Xl text-black-text">
                        {content.serviceInfo}
                      </p>
                      <div className="w-max my-10 border-b-2 border-tangerine p-2">
                        <Link href={content.serviceLink} className="text-lg tracking-widest uppercase mb-4 text-accent-default ">View Work</Link>
                       
                      </div>
                      
                      


                    </div>
                  </div>
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose onClick={handleClose}>
                  <Button variant="outline">X</Button>
                </DrawerClose>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerClient;
