
import React from "react";
import Image from "next/image";



function BackgroundImage() {
  return (
    <div>
      {/* BackgroundImage */}
      <div className="h-full w-full fixed -mt-16 -z-10">
        <Image
          src={
            "https://res.cloudinary.com/dujkjy2e2/image/upload/v1710820177/Debonair%20Fox%20Creative%20Studio/Images/1920_x_banner_u5tgoc.png"
          }
          fill={true}
          quality={80}
          priority={true}
          alt="mobile-background"
          style={{ objectFit: "cover", opacity: ".3" }}
        />
      </div>
    </div>
  );
}

export default BackgroundImage;
