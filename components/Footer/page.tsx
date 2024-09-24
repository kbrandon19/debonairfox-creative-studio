import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="w-5/6 relative z-40 h-64 mx-auto flex flex-col py-10 my-10 gap-y-10">
      <div className="w-full h-auto flex flex-col gap-y-10 md:flex-row justify-start p-5">
        <div className="basis-1/4">
          <p className="text-l font-medium">Menu</p>
          <hr className="w-64 my-2 border-accent-100" />
          <div className="flex flex-col gap-1 text-accent-100">
            <Link
              href={"/"}
              className="hover:text-tangerine hover:underline-offset-0 transition-colors ease-in"
            >
              Home
            </Link>
            <Link
              href={"/Services"}
              className="hover:text-tangerine hover:underline-offset-0 transition-colors ease-in"
            >
              Services
            </Link>
            <Link
              href={"/About"}
              className="hover:text-tangerine hover:underline-offset-0 transition-colors ease-in"
            >
              About
            </Link>
            <Link
              href={"/Contact"}
              className="hover:text-tangerine hover:underline-offset-0 transition-colors ease-in"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="basis-1/4">
          <p className="text-l font-medium">Socials</p>
          <hr className="w-64 border-accent-100 my-2" />
          <div className="flex flex-col gap-1 text-accent-100 ">
            <Link
              href={"https://www.linkedin.com/kdbrand"}
              className="hover:text-tangerine hover:underline-offset-0 transition-colors ease-in"
            >
              LinkedIn
            </Link>
            <Link
              href={"https://www.instagram.com/mrdebonairfox"}
              className="hover:text-tangerine hover:underline-offset-0 transition-colors ease-in"
            >
              Instagram
            </Link>
            <Link
              href={"https://www.github.com/kbrandon19"}
              className="hover:text-tangerine hover:underline-offset-0 transition-colors ease-in"
            >
              GitHub
            </Link>
            <Link
              href={"https://www.twitch.com/kbrandon19"}
              className="hover:text-tangerine hover:underline-offset-0 transition-colors ease-in"
            >
              Twitch
            </Link>
          </div>
        </div>
      </div>

      <div className=" w-full h-auto p-5 text-md text-black-text">
        © 2024{" "}
        <span className="rainbow-text">Debonair Fox Creative Studio</span>{" "}
        <br />
        All Right Reserved.
      </div>
    </footer>
  );
}

export default Footer;
