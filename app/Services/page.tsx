import { Button } from "@/components/ui/button";
import React from "react";
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

function page() {
  return (
    <div className="w-full h-auto bg-background py-20">
      <div className="w-full h-auto bg-background">
        <div className="w-full h-auto bg-background">
          {/* <p className='text-titleMid leading-[3rem] md:text-titleMd md:leading-[5rem] lg:text-titleXl font-medium lg:leading-[10rem]'>
            UI Design. Web Development. Email Templates. Product Pages. Content Creation.
        </p> */}
          {/* Drawer */}
          <Drawer>
            <DrawerTrigger className="align-left">
              {" "}
              <p className="text-titleMid leading-[3rem] md:text-titleMd md:leading-[5rem] lg:text-titleXl font-medium lg:leading-[10rem] ">
                UI Design. Web Development. Email Templates. Product Pages.
                Content Creation.
              </p>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="w-1/2 h-screen mx-auto flex gap-y-5 flex-col">
          {/* <p className="text-titleMid leading-[3rem] md:text-titleMd md:leading-[5rem] uppercase font-semibold opacity-30">
          Services
        </p> */}
          <p className="bodyText text-l">
            With a wealth of experience in Web & UI Design, Web Development,
            Email Templates, Photography, and Content Creation, I specialize in
            crafting a standout digital presence. Leveraging my skills and
            expertise, I offer guidance and deliver results that ensure your
            brand shines online, creating engaging and visually stunning digital
            experiences.
          </p>
          <p className="bodyText text-l">
            If you don&apos;t see a service that meets your needs, don&apos;t
            worry! Reach out and send me a message—let&apos;s chat and explore
            how we can bring your vision to life.
          </p>

          <Button
            type="submit"
            className="w-full md:w-32 bg-accent-default text-white mt-3 text-xs tracking-widest"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
