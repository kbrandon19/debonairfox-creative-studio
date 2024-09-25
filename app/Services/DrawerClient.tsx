"use client";

import React, { useState, useEffect, useRef } from "react";
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

const words = ["Web Development.", "Email Templates.", "Content Creation."];

interface DrawerClientProps {
  data: Services;
}

const DrawerClient: React.FC<DrawerClientProps> = ({ data }) => {
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const [content, setContent] = useState<servArr | null>(null);
  const [open, setOpen] = useState(false); // Manage drawer open/close state
  const scrollPositionRef = useRef(0); // Keep track of scroll position

  useEffect(() => {
    if (activeWord && data && Array.isArray(data.servicesDescription)) {
      const selectedContent = data.servicesDescription.find(
        (service) => service.serviceTitle === activeWord
      );
      setContent(selectedContent || null);
    }
  }, [activeWord, data]);

  const handleOpen = (word: string) => {
    scrollPositionRef.current = window.scrollY; // Save current scroll position
    setActiveWord(word);
    setOpen(true); // Open the drawer
  };

  const handleClose = () => {
    setOpen(false); // Close the drawer
    // Restore scroll position after drawer closes
    setTimeout(() => {
      window.scrollTo({ top: scrollPositionRef.current, behavior: "smooth" });
    }, 0);
  };

  return (
    <div className="px-1 h-auto w-auto flex flex-col justify-center">
      {words.map((word, index) => (
        <Drawer key={index} open={open} onOpenChange={setOpen} >
          <DrawerTrigger
            onClick={(event) => {
              event.stopPropagation();
              handleOpen(word);
            }}
          >
            <div
              className="relative w-auto h-auto text-left font-medium 
              text-titleSmd leading-[4rem]
              sm:text-titleMd sm:leading-[5rem] 
              smd:text-titleMd smd:leading-[6rem]
              md:text-titleLg md:leading-[8rem] 
              lg:text-titleLg lg:leading-[10rem] 
              2xl:text-titleXl 2xl:leading-[11rem]
              opacity-75 text-accent-200 
              hover:opacity-100 hover:text-accent-default  
              duration-300 ease-in-out cursor-pointer break-words"
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
                  <DrawerDescription className="md:h-screen flex">
                    <div className="md:basis-2/3 h-full flex flex-col md:flex-row p-4 justify-between gap-x-5">
                      <div className="w-auto mt-5">
                        <p className="text-l lg:text-xl text-black-text">
                          {content.serviceInfo}
                        </p>
                        <div className="flex md:basis-1/2 gap-4 flex-wrap mt-10">
                          {content.servicesKeyword.map((keywordObj, idx) => (
                            <span key={idx} className="p-2 bg-gray-200 rounded">
                              {keywordObj.keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:basis-3/4 h-auto justify-between gap-x-5"></div>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose onClick={handleClose}>
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
