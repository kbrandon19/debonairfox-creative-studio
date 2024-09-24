export const revalidate = 0;

import React from "react";
import ContactForm from "../../components/Forms/contact-form";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/lib/transitions/fadeIn";
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
    <div
      id="contact"
      className=" relative z-20 w-full h-auto md:h-screen bg-accent-default py-10"
    >
      <div className="w-full md:w-5/6 h-full mx-auto flex flex-col p-2 md:p-0">
        <div className="h-full flex flex-col justify-between gap-y-20 p-2 gap-x-10">
          {/* top div */}
          
            <div className="w-full h-auto flex flex-col gap-y-2 xl:gap-y-0  xl:justify-between content-center xl:items-center">
              
              <div className="max-w-96 ">
                <h1 className="text-titleMid leading-[3.5rem] md:text-titleMd md:leading-[5rem] lg:text-titleLg lg:leading-[8rem] uppercase font-semibold opacity-75 text-accent-100 ">
                  Let<span className="text-tangerine">&apos;</span>s Create
                  Something
                </h1>
              </div>
              
              <div className="font-light  w-full  md:w-1/2  text-l lg:text-xl opacity-75 text-white ">
                <p >
                  No matter your digital service needs, I’ll work with you to
                  define a strong visual identity. One that communicates your
                  personality and vision through a visual cohesive story.
                  Available for local and international projects.
                </p>
              </div>
            </div>
          

          {/* bottom div */}

          <div className="w-1/2 h-auto text-secTitle xlg:text-titleMid flex flex-col md:flex-row lg:justify-between gap-10">
            <div className="flex flex-row justify-start items-end">
              <div>
                <p className="text-l text-accent-100 ">Request Information.</p>
                <Link href={"mailto:kbrandon319@gmail.com?subject=Digital%20Services%20Inquiry"}>
                  <p className="text-background hover:underline hover:text-tangerine transition duration-200 ease ">
                    info@dfsc.com
                  </p>
                </Link>
              </div>
            </div>
            <div className="">
              <p className="text-l text-accent-100 ">Stay Connected.</p>
              <div className="flex flex-col md:flex-row gap-x-4  lowercase ">
                <Link
                  href="https://linkedin.com/in/kdbrand"
                  className=" text-background hover:underline hover:text-tangerine transition duration-200 ease"
                >
                  LinkedIn
                </Link>

                <Link
                  href={"https://instagram.com/mrdebonairfox"}
                  className=" text-background hover:underline transition hover:text-tangerine duration-200 ease"
                >
                  Instagram
                </Link>
                <Link
                  href={"https://github.com/kbrandon19"}
                  className="text-background hover:underline transition hover:text-tangerine duration-200 ease"
                >
                  GitHub
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
