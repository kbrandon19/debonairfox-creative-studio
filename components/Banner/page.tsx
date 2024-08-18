import React from "react";
import Image from "next/image";
import Paragraph from "./paragraph";

const paragraph = "Transform your brand with our unique blend of creativity and tech-savvy expertise—crafting dynamic websites, immersive content, and captivating campaigns that leave a lasting impression."

function page() {
  return (
    // wrapper for entire block
     <>
    {/* <div className="w-full h-screen bg-accent-default"></div> */}
    <div className="w-full h-auto bg-accent-default flex justify-center content-center items-center py-64 xl:py-32">
      <div className="text-left text-secTitle">
      {/* <p className=''>
      Transform your brand with our unique blend of creativity and tech-savvy expertise—crafting dynamic websites, immersive content, and captivating campaigns that leave a lasting impression. 
            </p> */}
            
      <Paragraph value={paragraph}/>
      </div>

     
    </div>
    {/* <div className="w-full h-screen bg-accent-default"></div> */}
    </>
  );
}

export default page;
