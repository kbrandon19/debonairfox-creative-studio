import React from "react";
import { client } from "../../sanity/lib/client";
import { Services } from "@/lib/interface";
import DrawerClient from "./DrawerClient";

async function getData() {
  const query = `
    *[_type == 'services'][0]{
      servicesDescription[]{serviceTitle,serviceInfo,serviceInfoTest}
    }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Page() {
  const data: Services = await getData();
  

  return (
    <div className="w-full h-auto bg-background py-20">
     
        <DrawerClient data={data} />
        {/* <div className="w-1/2 h-screen mx-auto flex gap-y-5 flex-col">
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

          
        </div> */}
      
    </div>
  );
}
