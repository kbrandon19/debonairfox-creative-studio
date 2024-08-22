import Image from "next/image";
import React from "react";
import phoneImg from "../assets/image.png";
import screenShot from "../assets/screenshot.png";

function page() {
  return (
    <div className="w-full h-auto bg-white">
      {/* Intro */}
      <div className="w-full h-full  flex flex-col lg:flex-row">
        <div className="md:basis-4/6 p-24 flex flex-col gap-y-10">
          <h1 className="text-titleMid leading-[2.5rem] md:text-titleMd md:leading-[5rem] font-semibold opacity-75 text-accent-100 ">
            florece consulting
          </h1>
          <div className="flex flex-col gap-y-5">
            <p className="text-l">
              {/* Stephanie, a seasoned communications expert, decided to launch her
              own consulting firm, Florece Consulting, to focus on the causes
              she’s passionate about. She reached out for a website that would not
              only reflect her brand’s mission but also provide the functionality
              she needed to manage her business efficiently. */}
              Communication Professional
            </p>
            <p className=""> UI/UX Design | Web Development | CMS</p>
          </div>
        </div>
        <div className="md:basis-2/6 bg-blue-300">
          <Image
            src={phoneImg}
            width={0}
            height={0}
            alt="profile photo"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* Large Image */}
      <div className="w-full h-full bg-white">
        <div>
          <Image
            src={screenShot}
            width={0}
            height={0}
            alt="profile photo"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div className="w-5/6 h-full mx-auto bg-white flex flex-col md:flex-row py-20">
      <h1 className="text-titleMid leading-[2.5rem] font-normal opacity-75 text-accent-100 ">
            
      Stephanie, a seasoned communications expert, decided to launch her
              own consulting firm, Florece Consulting, to focus on the causes
              she’s passionate about. She reached out for a website that would not
              only reflect her brand’s mission but also provide the functionality
              she needed to manage her business efficiently.
          </h1>
          <div className="flex flex-wrap">
            <p className="uppercase text-secTitle font-semibold">The Need</p>
            <div>Simple Yet Engaging Web Design: Stephanie wanted a clean, modern site that was easy to navigate yet visually compelling.</div>
            <div>Easy Content Management: A user-friendly CMS for quick content updates without technical hurdles.</div>
            <div>Customized Logo and Color Scheme: A brand identity that resonates with the name “Florece,” meaning to bloom and flourish.</div>
            <div>Analytics and Integrations: Web traffic monitoring, email submissions, and calendar integrations for appointments.</div>
          </div>
      </div>
    </div>
  );
}

export default page;
