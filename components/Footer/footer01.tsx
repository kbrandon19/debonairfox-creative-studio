import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="w-full relative z-40 h-auto flex flex-row justify-end content-end bg-accent-default">

      <div className=" w-auto h-auto p-2 text-sm text-background">
        © 2024{" "}
        <span className="rainbow-text text-sm">Debonair Fox Creative Studio</span>.{" "}All Right Reserved.
      </div>
    </footer>
  );
}

export default Footer;
