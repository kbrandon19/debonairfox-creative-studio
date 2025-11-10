import React from "react";
import Paragraph from "./paragraph";

const paragraph =
  "Transform your brand with my unique blend of creativity and expertise. Crafting a unique digital prescence through visual storytelling that resonates and inspire!";

function page() {
  return (
    <>
      <div className="w-full h-auto bg-accent-default flex justify-center content-center items-center pt-64 pb-32 xl:py-32">
        <div className="text-left">
          <Paragraph value={paragraph} />
        </div>
      </div>


    </>
  );
}

export default page;
