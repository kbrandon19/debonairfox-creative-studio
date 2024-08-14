export const revalidate = 0;

import React from "react";
import ContactForm from "../../components/Forms/contact-form";
import Image from "next/image";
// import { client } from "../../../sanity/lib/client";
// import { contactSection } from "@/lib/interface";
// import { urlForImage } from "../../../sanity/lib/image";

// async function getData() {
//   const query = `
//   *[_type == 'contact'][0]{
//     contactTitle,
//     contactHeading,
//     contactImage
//   }`;

//   const data = await client.fetch(query,{
//     revalidate: new Date().getSeconds(),
//   });
//   return data;
// }

async function Contact() {
  // const data: contactSection = await getData();

  return (
    <div className="w-full h-screen bg-accent-default py-20">
      <div className=" w-full md:w-5/6 h-full mx-auto flex justify-between lg:flex-row px-5 lg:px-0">
        <div className=" h-full flex flex-col justify-between gap-y-10 p-2">

          
            
            <div className="max-w-screen-sm">
            <h1 className=" text-titleMid leading-[3rem] md:text-titleLg md:leading-[7rem] 2xl:leading-[7.5rem] 2xl:text-titleLg text-accent-100">Let&apos;s Create Something!</h1>
            </div>

            <div className="text-titleMid md:text-secTitle flex flex-col md:flex-row lg:justify-between gap-x-20">
              <div className="flex flex-row justify-start items-end">
                <div>
                  <p className="text-l text-accent-100 ">
                    Request Information.
                  </p>
                  <p className="hover:underline transition-all ">info@dfsc.com</p>
                </div>
              </div>
              <div className="">
                <p className="text-l text-accent-100 ">
                  Stay Connected.</p>
                <div className="flex flex-col md:flex-row gap-x-4 lowercase ">
                  <p className="hover:underline transition-all">LinkedIn</p>
                  <p className="hover:underline transition-all">Instagram</p>
                </div>
              </div>
            </div>
          

         

        </div> 

      </div>
    </div>
  );
}

export default Contact;
