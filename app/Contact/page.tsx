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
    // <div className="w-full h-screen bg-accent-default py-20">
    //   <div
    //     className="w-5/6 h-full mx-auto flex flex-col lg:flex-row"
    //   >
    //     <div className="flex w-full  gap-10 lg:gap-6 justify-center  mx-auto">
          
          
    //       <div className="h-full w-auto basis-1/2 flex flex-col justify-end items-start text-secTitle gap-y-5">
    //         <ContactForm />

    //         <div>
    //           ec.southamerica
    //         </div>

    //         <div className="h-auto w-auto flex flex-row justify-start items-end gap-x-5">
    //           <div>
    //             <p className="text-l text-accent-100 ">Request Information.</p>
    //             <p className=" ">email@gmail.com</p>
    //           </div>
              
    //           <div className="">
    //             <p className="text-l text-accent-100 ">
    //               Stay Connected.</p>
    //             <div className="flex flex-row gap-x-4">
    //               <p>LinkedIn</p>
    //               <p>Instagram</p>
    //             </div>
    //           </div>
    //         </div>

            
            
            
            
            
    //       </div>
          
    //       <div className=" h-full w-auto basis-1/2 text-accent-100 ">
    //         <h1 className=" leading-[7rem] 2xl:text-titleLg">Let&apos;s Create Something!</h1>
    //         {/* <p className="font-regular font-lora text-xl lg:text-secTitle leading-[4rem] text-accent-100">
    //         No matter your digital service needs, I’ll work with you to define a strong visual identity. One that communicates your personality and vision through a visual cohesive story.
            
    //         </p> */}
    //       </div>
    //     </div>

    //   </div>
    // </div>
    <div></div>
  );
}

export default Contact;
