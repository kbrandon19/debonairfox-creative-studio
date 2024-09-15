import React from "react";
import Image from "next/image";
import Paragraph from "./paragraph";
import WindowPane from "../WindowPane/windowpane01";

const paragraph =
  "Transform your brand with our unique blend of creativity and tech-savvy expertise—crafting dynamic websites, immersive content, and captivating campaigns that leave a lasting impression.";

function page() {
  return (
    <>
      <div className="w-full h-auto bg-accent-default flex justify-center content-center items-center py-64 xl:py-32">
        <div className="text-left">
          <Paragraph value={paragraph} />
        </div>
      </div>


    </>
  );
}

export default page;
