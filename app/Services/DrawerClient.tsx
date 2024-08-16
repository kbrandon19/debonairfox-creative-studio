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
import { PortableText } from "@portabletext/react";
import Image from 'next/image';

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
                <DrawerHeader>
                  <DrawerTitle className="pl-4 opacity-25">
                    {content.serviceTitle}
                  </DrawerTitle>
                  <DrawerDescription>
                    <div className="w-auto h-full flex flex-col md:flex-row p-4 justify-between gap-x-5">
                      <div className="md:basis-1/2 mt-5">
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
                          <Button className="border-2  text-accent-default border-tangerine hover:bg-accent-default  hover:text-background hover:border-0 transition duration-200 ease-in-out">View Work</Button>
                        </div>
                      </div>


                            {/* Left side of the area*/}
                      {/* <div className=" h-auto md:basis-1/2 grid grid-cols-5 grid-rows-7 gap-4">
                        <div className=" w-full bg-red-200 row-span-3 col-start-1 row-start-3">
                        <Image
            src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1712800074/Debonair%20Fox%20Creative%20Studio/Images/ProfImage_snopge.png"
            width={116}
            height={256}
            alt="profile photo"
          />
                        </div>
                        <div className="row-span-3 h-24 w-full bg-blue-300 col-start-2 row-start-1">
                        <Image
            src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1712800074/Debonair%20Fox%20Creative%20Studio/Images/ProfImage_snopge.png"
            width={116}
            height={256}
            alt="profile photo"
          />
                        </div>
                        <div className="bg-pink-300 row-span-3 h-24 w-full col-start-2 row-start-5">
                        <Image
            src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1712800074/Debonair%20Fox%20Creative%20Studio/Images/ProfImage_snopge.png"
            width={116}
            height={256}
            alt="profile photo"
          />
                        </div>
                        <div className="h-24 w-full row-span-3 bg-blue-300 col-start-3 row-start-3">
                        <Image
            src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1712800074/Debonair%20Fox%20Creative%20Studio/Images/ProfImage_snopge.png"
            width={116}
            height={256}
            alt="profile photo"
          />
                        </div>
                        <div className="bg-green-200 row-span-3 col-start-4 row-start-1">
                        <Image
            src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1712800074/Debonair%20Fox%20Creative%20Studio/Images/ProfImage_snopge.png"
            width={116}
            height={256}
            alt="profile photo"
          />
                        </div>
                        <div className="bg-pink-300 row-span-3 col-start-4 row-start-5">
                        <Image
            src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1712800074/Debonair%20Fox%20Creative%20Studio/Images/ProfImage_snopge.png"
            width={116}
            height={256}
            alt="profile photo"
          />
                        </div>
                        <div className="row-span-3 bg-red-200 col-start-5 row-start-3">
                        <Image
            src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1712800074/Debonair%20Fox%20Creative%20Studio/Images/ProfImage_snopge.png"
            width={116}
            height={256}
            alt="profile photo"
          />
                        </div>
                      </div> */}
                    </div>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose className="hidden lg:block">
                    {/* <Button variant="outline">x</Button> */}
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
