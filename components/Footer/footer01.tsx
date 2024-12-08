import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="w-full relative z-40 h-auto flex flex-row justify-end content-end">

      <div className=" w-auto h-auto p-5 text-sm text-accent-default">
        © 2024{" "}
        <span className="rainbow-text text-sm">Debonair Fox Creative Studio</span>.{" "}All Right Reserved.
      </div>
    </footer>
  );
}

export default Footer;
