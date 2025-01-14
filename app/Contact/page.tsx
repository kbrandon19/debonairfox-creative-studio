export const revalidate = 0;


import React from "react";
import Image from "next/image";
import Link from "next/link";
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
      className=" relative z-20 w-screen h-auto bg-tangerine py-20 "
    >
      <div className="h-full w-auto fixed -mt-16 -z-[20] -py-40">
        <Image
          src={
            "https://res.cloudinary.com/dujkjy2e2/image/upload/v1710820177/Debonair%20Fox%20Creative%20Studio/Images/1920_x_banner_u5tgoc.png"
          }
          fill={true}
          quality={80}
          priority={true}
          alt="mobile-background"
          blurDataURL="blur"
          style={{ objectFit: "cover", opacity: ".3" }}
        />
      </div>
      <div className="w-5/6 h-screen mx-auto flex flex-col ">
        <div className="h-full flex flex-col justify-evenly gap-y-20 gap-x-10">
          {/* top div */}
          
            <div className="w-full h-auto flex flex-col gap-y-4 xl:gap-y-0  xl:justify-between content-center xl:items-center">
              
              <div className="w-5/6 ">
                <h1 className="text-titleSmd leading-[3.5rem] md:text-titleMd md:leading-[5rem] lg:text-titleMd lg:leading-[5.5rem]  2xl:text-titleLg 2xl:leading-[8rem] uppercase font-semibold text-accent-default ">
                  Let<span className="text-background">&apos;</span>s Create
                  Something
                </h1>
              </div>
              
              <div className="font-light  w-full  md:w-1/2  text-l lg:text-xl text-black-main ">
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
                <p className="text-l text-background ">Request Information.</p>
                <Link href={"mailto:kbrandon319@gmail.com?subject=Digital%20Services%20Inquiry"}>
                  <p className="text-accent-default hover:text-background transition duration-300 ease-in-out">
                    info@dfsc.com
                  </p>
                </Link>
              </div>
            </div>
            <div className="">
              <p className="text-l text-background ">Stay Connected.</p>
              <div className="flex flex-col md:flex-row gap-x-4  lowercase ">
                <Link
                  href="https://linkedin.com/in/kdbrand"
                  className=" text-accent-default hover:text-background transition duration-300 ease-in-out"
                >
                  LinkedIn
                </Link>

                <Link
                  href={"https://instagram.com/mrdebonairfox"}
                  className=" text-accent-default transition hover:text-background duration-300 ease-in-out"
                >
                  Instagram
                </Link>
                <Link
                  href={"https://github.com/kbrandon19"}
                  className="text-accent-default hover:text-background transition duration-300 ease-in-out"
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
