import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <div className="w-full h-auto bg-white">
      {/* Intro */}
      <div className="w-full h-full  flex flex-col md:flex-row">
        <div className=" h-screen md:basis-4/6 p-4 md:p-24 flex flex-col gap-y-5 md:gap-y-10 justify-center content-center">
          <h1
            className="text-titleSmd leading-[3rem] 
            smd:text-titleMd smd:leading-[4.5rem]
          xl:text-titleXl xl:leading-[9.375rem] 
          font-semibold opacity-75 text-accent-100 "
          >
            Common Grounds Coffee House
          </h1>
          <div className="max-w-screen-smd flex flex-col gap-y-5">
            <p className="text-l">
              florece is a dynamic communications and advocacy consultancy with
              a steadfast commitment to partner with leaders who do the
              transformational work of justice and liberation.
            </p>
            <p className="text-sm text-cg-red uppercase tracking-wider font-semibold">
              {" "}
              UI/UX Design | Web Development | CMS
            </p>
          </div>
        </div>

        <div className="h-screen md:basis-3/6 drop-shadow-xl">
          <Image
            src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1773199234/Debonair%20Fox%20Creative%20Studio/Work/Common%20Grounds/2_upskky.png"
            alt="profile photo"
            fill
            className="object-cover object-right"
            loading="eager"
          />
        </div>
      </div>

      {/* Case Study 1 */}
      <div className="w-5/6 h-full mx-auto bg-white flex flex-col md:flex-row py-20 ">
        <div className="flex flex-col gap-y-20  ">
          <div className="h-full w-auto">
            <h1 className="bodyText text-Xl leading-[2re] md:text-titleMid md:leading-[3.5rem] font-light pt-10 text-accent-default ">
              Common Grounds is a local breakfast and brunch restaurant that
              serves a unique mix of Ecuadorian and American-style dishes.
              Recently, the restaurant updated its physical menu to improve
              readability and visual appeal. While the redesign helped modernize
              the in-store experience, the brand still lacked a digital presence
              that reflected the same updated look and feel. This project
              focused on designing and developing a website that would complete
              the restaurant’s visual refresh while making it easier for
              customers to explore the menu, find the location, and build trust
              before visiting.
            </h1>
          </div>
          <hr />
          <div className="h-auto w-auto flex flex-col md:flex-row gap-x-5 justify-between">
            <h3 className="w-full uppercase text-xl font-semibold text-accent-default leading-5 md:leading-0">
              The Need<span className="text-tangerine">.</span>
            </h3>

            <div className="flex flex-row flex-wrap">
              <div className="h-auto w-auto md:w-1/2 md:p-4 mt-5 md:mt-0">
                <h3 className="text-xl bodyText font-bold opacity-75 text-accent-100">
                  Easy Content Management:{" "}
                </h3>
                <p className="text-l font-light">
                  A user-friendly CMS that allows the restaurant to quickly
                  update menu items, images, and information without requiring
                  technical knowledge.
                </p>
              </div>
              <div className="h-auto w-auto md:w-1/2 md:p-4 mt-5 md:mt-0">
                <h3 className="text-xl bodyText font-bold opacity-75 text-accent-100">
                  Modern yet Engaging UI/ UX Design :
                </h3>{" "}
                <p className="text-l font-light">
                  A visually appealing interface that reflects the restaurant’s
                  vibrant personality while ensuring the menu and key
                  information remain easy to read and navigate.
                </p>
              </div>
              <div className="h-auto w-auto md:w-1/2 md:p-4 mt-5 md:mt-0">
                <h3 className="text-xl bodyText font-bold opacity-75 text-accent-100">
                  Web Design:
                </h3>{" "}
                <p className="text-l font-light">
                  A responsive website that helps potential customers discover
                  the restaurant, view the menu, and build trust through visuals
                  and customer reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study 2 */}
      <div className="w-5/6 h-auto mx-auto bg-white flex flex-col md:flex-row gap-x-10 gap-y-10 md:gap-y-0 mt-40">
        <div className="basis-1/2 flex flex-col gap-y-10 ">
          <div className="flex flex-col gap-3">
            <h3 className="w-full uppercase text-xl font-semibold text-accent-default leading-5 md:leading-0">
              Web Design<span className="text-tangerine">.</span>
            </h3>
            <p className="text-l font-light">
              From the beginning, I knew I wanted the hero section to be
              visually bold, with large typography acting as the main focal
              point. The goal was to immediately communicate the restaurant’s
              identity while creating a visually engaging first impression. I
              approached the design from a customer’s perspective. When choosing
              where to eat, people often rely on visual cues and social proof.
              As the saying goes, we eat with our eyes first.
            </p>
            <p className="text-l font-light">
              To support this idea, I incorporated Google review ratings
              directly into the hero section. This provides immediate
              credibility while also helping persuade visitors who may be
              unfamiliar with the restaurant. Food imagery was also added to
              complement the design and reinforce the restaurant’s offerings.
              Combined with vibrant colors and coffee-themed illustrations
              inspired by the restaurant’s menu design.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="w-full uppercase text-xl font-semibold text-accent-default leading-5 md:leading-0">
              Content Management System<span className="text-tangerine">.</span>
            </h3>
            <p className="text-l font-light">
              To make the website easy to maintain, I implemented a headless CMS
              using Sanity. Sanity allows the restaurant to update content
              without needing to modify code or manage complex backend systems. This approach removes the need for
              plugins, server panels, or manual stylesheet changes, making
              ongoing maintenance simple and efficient.
            </p>
          </div>

                 <div className="flex flex-col gap-3">
            <h3 className="w-full uppercase text-xl font-semibold text-accent-default leading-5 md:leading-0">
              Third Party Integration<span className="text-tangerine">.</span>
            </h3>
            <p className="text-l font-light">
              To enhance the user experience and provide real-time information,
              I integrated the Google Places API. This integration allows the
              website to dynamically display the restaurant’s location details
              and customer review ratings directly from Google, giving visitors
              an immediate sense of trust and authenticity.
            </p>
          </div>
        </div>

        {/* image */}
        <div className="basis-1/2 drop-shadow-xl">
          <Image
            src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1773421462/Debonair%20Fox%20Creative%20Studio/Work/Common%20Grounds/3_cl3bvl.png"
            fill
            alt="profile photo"
            className="object-cover object-right"
            unoptimized
          />
        </div>
      </div>

      {/* Case Study 3 
      <div className="w-5/6 h-auto mx-auto bg-white flex flex-col md:flex-row gap-x-10 gap-y-10 md:gap-y-0 mt-40">
       
        <div className="basis-1/2 drop-shadow-xl">
          <Image
            src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1761617812/Debonair%20Fox%20Creative%20Studio/Work/Florece/download_oqbzd1.gif"
            fill
            alt="profile photo"
            className="object-contain"
            unoptimized
          />
        </div>

        <div className="basis-1/2 flex flex-col gap-y-10">
          <div className="flex flex-col gap-3">
            <h3 className="w-full uppercase text-xl font-semibold text-accent-default leading-5 md:leading-0">
              Third Party Integration<span className="text-tangerine">.</span>
            </h3>
            <p className="text-l font-light">
              To enhance the user experience and provide real-time information,
              I integrated the Google Places API. This integration allows the
              website to dynamically display the restaurant’s location details
              and customer review ratings directly from Google, giving visitors
              an immediate sense of trust and authenticity.
            </p>
          </div>
        </div>
      </div>*/}

      {/* Conclusion */}
      <div className="w-full h-auto md:h-screen bg-cg-red flex flex-col py-40 md:py-0 mt-40 justify-center ">
        <h1 className=" w-5/6 mx-auto text-secTitle md:text-titleMid leading-[3rem] font-normal text-fc-white align-center">
          The final result is a modern, engaging website that captures the
          relaxed, vibrant atmosphere of the restaurant. Through bold
          typography, colorful design elements, and carefully chosen imagery,
          the site reflects the energy of a beach-town brunch spot while
          providing customers with the key information they need. By combining
          thoughtful design, dynamic content management, and real-time
          integrations, the website completes the restaurant’s brand refresh and
          creates a cohesive digital experience for both new and returning
          customers.
        </h1>
      </div>
    </div>
  );
}

export default page;
