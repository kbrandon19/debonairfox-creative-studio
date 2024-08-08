import React from "react";
import Image from "next/image";

function page() {
  return (
    // wrapper for entire block
   
    <div className="w-full h-auto xl:h-screen bg-accent-default flex justify-center content-center items-center py-24 xl:py-32">
      <div className="text-left text-secTitle">
      <p className='w-5/6 h-auto mx-auto text-secTitle lg:text-titleSm   font-semi leading-tight uppercase text-background drop-shadow-md'>
      Transform your brand with our unique blend of creativity and tech-savvy expertise—crafting dynamic websites, immersive content, and captivating campaigns that leave a lasting impression.
            </p>
      </div>
    </div>
  );
}

export default page;
