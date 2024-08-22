import Image from "next/image";
import React from "react";
import phoneImg from "../assets/image.png";
import screenShot from "../assets/screenshot.png";

function page() {
  return (
    <div className="w-full h-screen bg-white">
      {/* Intro */}
      <div className="w-full h-auto lg:h-3/4  flex flex-col lg:flex-row gap-y-20">

        <div className="md:basis-4/6 p-4 md:p-24 flex flex-col gap-y-5 md:gap-y-10">
          <h1 className="text-titleSm leading-[4rem] md:text-titleMd md:leading-[5rem]
          xl:text-titleLg xl:leading-[9.375rem] 
          font-semibold opacity-75 text-accent-100 ">
            florece consulting
          </h1>
          <div className="max-w-screen-smd flex flex-col gap-y-5">
            <p className="text-l">
              florece is a dynamic communications and advocacy consultancy with a steadfast commitment to partner with leaders who do the transformational work of justice and liberation. 
            
            </p>
            <p className="text-sm text-tangerine uppercase tracking-wider font-semibold"> UI/UX Design | Web Development | CMS</p>
          </div>
        </div>

        <div className="md:basis-3/6">
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
      <div className="w-full h-auto bg-white my-20">
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


     {/* Case Study */}
     <div className="w-5/6 h-auto mx-auto bg-white flex flex-col md:flex-row py-20 ">
        {/* Layout Design #2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-y-20 lg:gap-y-0 ">
          <div className="col-span-2 md:col-start-1 lg:col-span-1">
            <h1 className="text-secTitle md:text-titleMid leading-[3rem] font-normal opacity-75 text-accent-100 ">
              Stephanie, a seasoned communications expert, decided to launch her
              own consulting firm, Florece Consulting, to focus on the causes
              she’s passionate about. She reached out for a website that would
              not only reflect her brand’s mission but also provide the
              functionality she needed to manage her business efficiently.
            </h1>
          </div>

          <div className="h-auto w-auto row-start-2 col-start-2 flex flex-col md:flex-wrap md:flex-row">


            <p className="w-full uppercase text-secTitle font-semibold text-accent-default">The Need<span className="text-tangerine">.</span></p>
            
            
            <div className="h-auto w-full md:w-1/2 md:p-4 mt-5">

              <h3 className="text-xl bodyText font-bold opacity-75 text-accent-100">Simple Yet Engaging Web Design: </h3>
              <p className="text-l font-light">
                Stephanie wanted a clean, modern
                site that was easy to navigate yet visually compelling.
              </p>
            </div>

            <div className="h-auto w-full md:w-1/2 md:p-4 mt-5">
              <h3 className="text-xl bodyText font-bold opacity-75 text-accent-100">Easy Content Management:</h3> <p className="text-l font-light">
                A user-friendly CMS for quick content
                updates without technical hurdles.
              </p>
            </div>

            <div className="h-auto w-full md:w-1/2 md:p-4 mt-5">
              <h3 className="text-xl bodyText font-bold opacity-75 text-accent-100">Customized Logo and Color Scheme:</h3> <p className="text-l font-light">
                A brand identity that resonates
                with the name “Florece,” meaning to bloom and flourish.
              </p>
            </div>
            <div className="h-auto w-full md:w-1/2 md:p-4 mt-5">
              <h3 className="text-xl bodyText font-bold opacity-75 text-accent-100">Analytics and Integrations: </h3>
              <p className="text-l font-light">
                Web traffic monitoring, email
                submissions, and calendar integrations for appointments.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="basis-2/4">
          <h1 className="text-titleMid leading-[3rem] font-normal opacity-75 text-accent-100 ">
            Stephanie, a seasoned communications expert, decided to launch her
            own consulting firm, Florece Consulting, to focus on the causes
            she’s passionate about. She reached out for a website that would not
            only reflect her brand’s mission but also provide the functionality
            she needed to manage her business efficiently.
          </h1>
        </div> */}
        {/* <div className="basis-1/4 flex flex-wrap">
          <p className="uppercase text-secTitle font-semibold">The Need</p>
          <div>
            Simple Yet Engaging Web Design: Stephanie wanted a clean, modern
            site that was easy to navigate yet visually compelling.
          </div>
          <div>
            Easy Content Management: A user-friendly CMS for quick content
            updates without technical hurdles.
          </div>
          <div>
            Customized Logo and Color Scheme: A brand identity that resonates
            with the name “Florece,” meaning to bloom and flourish.
          </div>
          <div>
            Analytics and Integrations: Web traffic monitoring, email
            submissions, and calendar integrations for appointments.
          </div>
        </div> */}
      </div>



    </div>
  );
}

export default page;
