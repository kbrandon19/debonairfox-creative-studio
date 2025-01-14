import React from "react";
import Paragraph from "./paragraph";

const paragraph =
  "Transform your brand with our unique blend of creativity and expertise—crafting dynamic websites and captivating content that will leave a lasting impression.";

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
