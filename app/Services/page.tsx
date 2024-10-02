import React from "react";
import { client } from "../../sanity/lib/client";
import { Services } from "@/lib/interface";
import DrawerClient from "./DrawerClient";
import Image from "next/image";

async function getData() {
  const query = `
    *[_type == 'services'][0]{
      servicesDescription[]{serviceTitle,serviceInfo,servicesKeyword[]{keyword}}
    }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Page() {
  const data: Services = await getData();
  

  return (
    <div id="services" className="w-full h-auto  xl:h-screen pt-36 overflow-y-hidden">
           <div className="h-full w-full fixed -mt-16 -z-[20] -py-40">
        <Image
          src={
            "https://res.cloudinary.com/dujkjy2e2/image/upload/v1710820177/Debonair%20Fox%20Creative%20Studio/Images/1920_x_banner_u5tgoc.png"
          }
          fill={true}
          quality={80}
          priority={true}
          alt="mobile-background"
          style={{ objectFit: "cover", opacity: ".3" }}
        />
      </div>
        <DrawerClient data={data} />
      
    </div>
  );
}
