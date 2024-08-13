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
import { RichTextComponents } from "@/components/RichTextComponents";
import { PortableText } from "@portabletext/react";

const words = [
  "UI Design.",
  "Web Development.",
  "Email Templates.",
  "Product Pages.",
  "Content Creation.",
];

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
    <div className="w-auto text-wrap">
      {words.map((word, index) => (
        <Drawer key={index}>
          <DrawerTrigger onClick={() => setActiveWord(word)}>
            {/* <Button
              variant="ghost"
              className="whitespace-normal"
            >
              {word}
            </Button> */}
            <div className="w-auto h-auto text-titleMid leading-[3rem] md:text-titleMid md:leading-[5rem] lg:text-titleLg lg:leading-[8rem] 2xl:text-titleXl font-medium xl:leading-[10rem]  hover:text-primary-100">
          
              {word}
            </div>
          </DrawerTrigger>
          <DrawerContent>
            {content && (
              <>
                <DrawerHeader>
                  <DrawerTitle className="pl-4 opacity-25">{content.serviceTitle}</DrawerTitle>
                  <DrawerDescription>
                    <div className=" w-auto h-auto flex flex-col md:flex-row pl-4 justify-center
                    gap-x-5 items-center">
                      <div className="md:basis-1/2 mt-5">
                        <p className="text-l lg:text-secTitle text-black-text">{content.serviceInfo}</p>
                      </div>
                      {/* Work Examples */}
                      <div className="hidden md:flex basis-1/2 gap-4 flex-wrap">
                      <div className="w-56 h-52 bg-secondary-100">
                      </div>
                      <div className="w-56 h-52 bg-secondary-100">
                      </div>
                      <div className="w-56 h-52 bg-secondary-100">asdf
                      </div>
                      <div className="w-56 h-52 bg-secondary-100">df
                      </div>
                      </div>
                      
                    </div>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose className="hidden lg:block">
                    <Button variant="outline">x</Button>
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