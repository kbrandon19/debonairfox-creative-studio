import React from "react";
import { client } from "../../sanity/lib/client";
import { Services } from "@/lib/interface";
import DrawerClient from "./DrawerClient";

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
    <div id="services" className="w-full h-screen bg-white py-40">
     
        <DrawerClient data={data} />
      
    </div>
  );
}
