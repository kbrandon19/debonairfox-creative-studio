import Image from "next/image";
import React from "react";
import phoneImg from "../assets/mockup.png";
import phoneImg2 from "../assets/mockup2.png";
import screenShot from "../assets/screenshot.png";

function page() {
  return (
    <div className="w-full h-screen bg-white">
      {/* Intro */}
      <div className="w-full h-screen  flex flex-col lg:flex-row gap-y-20 ">
        <div className=" h-screen md:basis-4/6 p-4 md:p-24 flex flex-col gap-y-5 md:gap-y-10 justify-center content-center">
          <h1
            className="text-titleSm leading-[4rem] md:text-titleMd md:leading-[5rem]
          xl:text-titleXl xl:leading-[9.375rem] 
          font-semibold opacity-75 text-accent-100 "
          >
            florece consulting
          </h1>
          <div className="max-w-screen-smd flex flex-col gap-y-5">
            <p className="text-l">
              florece is a dynamic communications and advocacy consultancy with
              a steadfast commitment to partner with leaders who do the
              transformational work of justice and liberation.
            </p>
            <p className="text-sm text-tangerine uppercase tracking-wider font-semibold">
              {" "}
              UI/UX Design | Web Development | CMS
            </p>
          </div>
        </div>

        <div className="h-screen md:basis-3/6">
          <Image
            src={phoneImg2}
            width={0}
            height={0}
            alt="profile photo"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* Case Study 1 */}
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
            <h3 className="w-full uppercase text-xl font-semibold text-accent-default">
              The Need<span className="text-tangerine">.</span>
            </h3>

            <div className="h-auto w-full md:w-1/2 md:p-4 mt-5 md:mt-0">
              <h3 className="text-xl bodyText font-bold opacity-75 text-accent-100">
                Simple Yet Engaging Web Design:{" "}
              </h3>
              <p className="text-l font-light">
                Stephanie wanted a clean, modern site that was easy to navigate
                yet visually compelling.
              </p>
            </div>

            <div className="h-auto w-full md:w-1/2 md:p-4 mt-5 md:mt-0">
              <h3 className="text-xl bodyText font-bold opacity-75 text-accent-100">
                Easy Content Management:
              </h3>{" "}
              <p className="text-l font-light">
                A user-friendly CMS for quick content updates without technical
                hurdles.
              </p>
            </div>

            <div className="h-auto w-full md:w-1/2 md:p-4 mt-5 md:mt-0">
              <h3 className="text-xl bodyText font-bold opacity-75 text-accent-100">
                Customized Logo and Color Scheme:
              </h3>{" "}
              <p className="text-l font-light">
                A brand identity that resonates with the name “Florece,” meaning
                to bloom and flourish.
              </p>
            </div>
            <div className="h-auto w-full md:w-1/2 md:p-4 mt-5 md:mt-0">
              <h3 className="text-xl bodyText font-bold opacity-75 text-accent-100">
                Analytics and Integrations:{" "}
              </h3>
              <p className="text-l font-light">
                Web traffic monitoring, email submissions, and calendar
                integrations for appointments.
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

      {/* Case Study 2 */}
      <div className="w-5/6 h-auto mx-auto bg-white flex flex-col md:flex-row">
        <div className="basis-1/2 flex flex-col gap-y-10">
          <div>
            <h3 className="w-full uppercase text-xl font-semibold text-accent-default">
              Web Design<span className="text-tangerine">.</span>
            </h3>
            <p className="text-l font-light">
              To achieve the desired simplicity and engagement, the site was
              structured into six main sections: Hero, About, Services, Founder
              Bio, Media Appearances, and Contact. The design ethos was
              minimalism with purpose, avoiding unnecessary elements while
              focusing on what’s essential. A prominent Hero section greets
              users with the company’s core message, followed by clean,
              straightforward sections that clearly communicate Stephanie&apos;s
              services. The Contact section balances form and function, with a
              streamlined design enhanced by visual elements that prevent the
              page from feeling text-heavy.
            </p>
          </div>

          <div>
            <h3 className="w-full uppercase text-xl font-semibold text-accent-default">
              Content Management System<span className="text-tangerine">.</span>
            </h3>
            <p className="text-l font-light">
              Sanity was chosen as the CMS to meet Stephanie’s need for easy
              content management. With a customizable dashboard, Sanity provides
              her the flexibility to update content effortlessly. Each document
              in the CMS maps directly to sections on the site, ensuring a
              smooth user experience when editing.
            </p>
          </div>
        </div>
        <div className="basis-1/2 bg-red-300">this may be image</div>
      </div>

      {/* Case Study 3 */}
      <div className="w-5/6 h-auto mx-auto bg-white flex flex-col md:flex-row mt-20">
        <div className="w-auto flex flex-row gap-y-10">
          <div>
            <h3 className="w-full uppercase text-xl font-semibold text-accent-default">
              Technology Integration<span className="text-tangerine">.</span>
            </h3>
            <p className="text-l font-light">
              To enhance functionality, Google Analytics was integrated for web
              traffic monitoring, while Google Calendar facilitates client
              appointments directly from the site. For email submissions, Resend
              was selected as an affordable, reliable solution, complemented by
              a custom email template.
            </p>
          </div>

          <div>
            <h3 className="w-full uppercase text-xl font-semibold text-accent-default">
              Brand Identity<span className="text-tangerine">.</span>
            </h3>
            <p className="text-l font-light">
              The color palette and logo were carefully crafted to reflect the
              brand’s name and mission. The palette combines dark base tones
              with floral accents of lavender and pink, symbolizing growth and
              resilience. The lotus flower logo, representing enlightenment and
              beauty in adversity, encapsulates Florece Consulting&apos;s mission to
              help communications efforts bloom even in challenging
              environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
