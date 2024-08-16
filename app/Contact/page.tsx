export const revalidate = 0;

import React from "react";
import ContactForm from "../../components/Forms/contact-form";
import Image from "next/image";
import Link from 'next/link';
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
    <div className="w-fullh-auto md:h-screen bg-accent-default py-20">

       {/* Current Version */}
      {/* <div className=" w-full md:w-5/6 h-full mx-auto flex justify-between lg:flex-row px-5 lg:px-0">
        <div className=" h-full flex flex-col justify-between gap-y-10 p-2">

          
            
            <div className="max-w-screen-sm">
            <h1 className="text-titleMid leading-[3rem] md:text-titleMd md:leading-[5rem] uppercase font-semibold opacity-75 text-accent-100 ">Let&apos;s Create Something!</h1>
            </div>

            <div className="text-titleMid md:text-secTitle flex flex-col md:flex-row lg:justify-between gap-x-20">
              <div className="flex flex-row justify-start items-end">
                <div>
                  <p className="text-l text-accent-100 ">
                    Request Information.
                  </p>
                  <Link href="">
                    <p className="hover:underline hover:text-tangerine transition duration-200 ease ">info@dfsc.com</p>
                  </Link>
                </div>
              </div>
              <div className="">
                <p className="text-l text-accent-100 ">
                  Stay Connected.</p>
                <div className="flex flex-col md:flex-row gap-x-4 lowercase ">
                  <Link href="">
                    <p className="hover:underline hover:text-tangerine transition duration-200 ease">LinkedIn</p>
                  </Link>
                  
                  <Link href="" className=""><p className="hover:underline transition hover:text-tangerine duration-200 ease">Instagram</p>
                  </Link>
                </div>
              </div>
            </div>
          

         

        </div> 

      </div> */}


{/* New Layout Design */}
      <div className="w-full md:w-5/6 h-full mx-auto flex flex-col p-4 md:p-0">
      <div className="h-full flex flex-col justify-between gap-y-20 p-2 gap-x-10">
      {/* top div */}
      <div className="w-full h-auto flex flex-col md:flex-row md:justify-between content-center md:items-center">
      <div className="w-1/3">
            <h1 className="text-titleMid leading-[2.5rem] md:text-titleMd md:leading-[5rem] uppercase font-semibold opacity-75 text-accent-100 ">Let&apos;s Create Something!</h1>
        </div>
        <div className="bodyText w-auto md:w-2/4 text-xl opacity-65 text-white">
          <p>No matter your digital service needs, I’ll work with you to define a strong visual identity. One that communicates your personality and vision through a visual cohesive story.Use the form to inquire about services, rates and availability, or just to say hi. I&apos;m available for local, out of state, and international projects.</p>
        </div>
      </div>

      {/* bottom div */}
      <div className="w-1/2 h-auto text-secTitle md:text-titleMid flex flex-col md:flex-row lg:justify-between gap-10">
              <div className="flex flex-row justify-start items-end">
                <div>
                  <p className="text-l text-accent-100 ">
                    Request Information.
                  </p>
                  <Link href="">
                    <p className="hover:underline hover:text-tangerine transition duration-200 ease ">info@dfsc.com</p>
                  </Link>
                </div>
              </div>
              <div className="">
                <p className="text-l text-accent-100 ">
                  Stay Connected.</p>
                <div className="flex flex-col md:flex-row gap-x-4  lowercase ">
                  <Link href="" className="hover:underline hover:text-tangerine transition duration-200 ease">
                    LinkedIn
                  </Link>
                  
                  <Link href="" className="hover:underline transition hover:text-tangerine duration-200 ease" >Instagram
                  </Link>
                  <Link href=""  className="hover:underline transition hover:text-tangerine duration-200 ease">GitHub
                  </Link>
                </div>
              </div>
            </div>

      </div>
    </div>
    </div>
  );
}

export default Contact;
