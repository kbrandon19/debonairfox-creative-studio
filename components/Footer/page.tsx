import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="md:flex justify-center content-center">

      <div className="w-full md:max-w-screen-2xl grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 h-auto px-10 content-center">

{/* social links */}
        <div className="flex gap-x-4 md:justify-center md:order-2">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1706837682/Debonair%20Fox%20Creative%20Studio/social-icons/LinkedIn_voqnk9.png"
              width={15}
              height={15}
              alt="LinkedIn"
            />
          </Link>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1706837730/Debonair%20Fox%20Creative%20Studio/social-icons/Instagram_yyqg9d.png"
              width={15}
              height={15}
              alt="Instagram"
            />
          </Link>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1706837820/Debonair%20Fox%20Creative%20Studio/social-icons/GitHub_ceujuk.png"
              width={15}
              height={15}
              alt="GitHub"
            />
          </Link>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1706837822/Debonair%20Fox%20Creative%20Studio/social-icons/Email_zixsy3.png"
              width={15}
              height={15}
              alt="Gmail"
            />
          </Link>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dujkjy2e2/image/upload/v1706837847/Debonair%20Fox%20Creative%20Studio/social-icons/Twitch_zc1buy.png"
              width={15}
              height={15}
              alt="Twitch"
            />
          </Link>
        </div>


{/* Back to top icon/text */}
        <div className="grid justify-end md:col-start-3 md:order-3">
          <Link href="/">
            <p>Top</p>
          </Link>
        </div> 
        
        {/* Copyright and name */}
        <div className="grid col-span-2 smd:col-start-1 smd:col-span-1 smd:col-end-2 smd:order-1">
          <p className="text-xs uppercase">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold"> Kenneth Brandon </span>
            <span className="hidden smd:inline">All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
