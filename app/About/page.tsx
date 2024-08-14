import React from "react";
import Image from "next/image";
import profileImg from '../assets/IMG_1329.jpg'
import profileImg2 from '../assets/IMG_3498-Edit.png'
import { Button } from "@/components/ui/button";


function About() {
  return (
    <div className="w-auto h-auto bg-background py-36  flex flex-col gap-y-20">
      {/* First Line */}
      <div className="w-full  lg:w-5/6 mx-auto h-auto flex flex-col md:flex-row px-5">
      <div className="h-auto basis-1/2 flex justify-center items-center ">
          <Image
            src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1712800074/Debonair%20Fox%20Creative%20Studio/Images/ProfImage_snopge.png"
            width={516}
            height={556}
            alt="profile photo"
          />
        </div>
        <div className="basis-1/2  flex gap-y-5 flex-col">
          <p className="text-titleMid leading-[3rem] md:text-titleMd md:leading-[5rem] uppercase font-semibold opacity-30">
            Crafting Unique Digital Experiences
          </p>
          <p className="font-regular text-l md:text-xl">
            At Debonair Fox Creative Studio, we believe that every story
            deserves to be told with elegance and creativity. With a background
            steeped in diverse creative pursuits, we’ve honed a keen eye for
            intriguing visuals and the subtleties of our environment. This
            heightened awareness allows us to find beauty in the most unexpected
            places, transforming the ordinary into extraordinary. As thoughtful
            creatives, were passionate about making impactful first impressions
            and bringing our clients unique narratives to life. At Debonair Fox,
            we dont just design; we craft bespoke digital experiences that
            resonate and inspire.
          </p>

          <Button className="bg-red-300 w-36">Read More</Button>
        </div>
        
      </div>

      {/* Second Row */}
      {/* <div className="w-full lg:w-5/6 mx-auto h-auto flex flex-col-reverse md:flex-row px-5">
        <div className="h-auto basis-1/2 flex justify-center items-center">
          <Image
            src={profileImg}
            width={416}
            height={656}
            alt="profile photo"
          />
        </div>
        <div className="basis-1/2 flex gap-y-5 flex-col">
          <p className="text-secTitle leading-[3rem] md:text-secTitle uppercase font-semibold opacity-30">
            &quot;Creating a digital presence doesn’t have to be hard.&quot;
          </p>
          <p className="bodyText text-l md:text-xl">
            I have a deep passion for all things art, from the intricacies of
            photography to the world of web design, where I love creating cool,
            shareable projects that connect with people around the globe. My
            interests also extend to architecture and fashion, where I find
            endless inspiration in the interplay of form, structure, and style.
            <br/><br/>When I&apos;m not behind the camera or crafting websites, I&apos;m often
            exploring new music online, embarking on family adventures, or
            picking up random skills just for the joy of learning. These moments
            are usually accompanied by a perfect cup of coffee, which fuels my
            creativity and curiosity. Whether I&apos;m admiring a stunning piece of
            architecture, exploring the latest fashion trends, or discovering a
            hidden café, my love for art, music, and exploration continually
            shapes my creative journey.
          </p>

          
        </div>
      </div> */}

    </div>
  );
}

export default About;
