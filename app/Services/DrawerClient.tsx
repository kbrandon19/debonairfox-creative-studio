'use client';

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

const words = ["UI Design.", "Web Development.", "Email Templates.", "Product Pages.", "Content Creation."];

interface DrawerClientProps {
  data: Services;
}

const DrawerClient: React.FC<DrawerClientProps> = ({ data }) => {
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const [content, setContent] = useState<servArr | null>(null);

  useEffect(() => {
    console.log('Active Word:', activeWord);
    console.log('Data:', data);

    if (activeWord && data && Array.isArray(data.servicesDescription)) {
      const selectedContent = data.servicesDescription.find(
        (service) => service.serviceTitle === activeWord
      );
      setContent(selectedContent || null);
      console.log('Selected Content:', selectedContent);
    }
  }, [activeWord, data]);

  return (
    <div className="w-auto text-wrap">
      {words.map((word, index) => (
        <Drawer key={index}>
          <DrawerTrigger className="text-titleSm leading-[4rem] md:text-titleMd md:leading-[5rem] lg:text-titleXl font-medium lg:leading-[10rem] text-left hover:text-primary-100"
            asChild
            onClick={() => setActiveWord(word)}
          >
            <Button className="whitespace-break-spaces" variant="ghost">{word}</Button>
          
          </DrawerTrigger>
          <DrawerContent>
            {content && (
              <>
                <DrawerHeader>
                  <DrawerTitle>{content.serviceTitle}</DrawerTitle>
                  <DrawerDescription>
                     <PortableText
                      value={content.serviceInfo}
                      components={RichTextComponents}
                    />
                
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline">Close</Button>
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
