"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Menu from "../Header/Menu/page";
import { motion } from "framer-motion";
import Nav from "../Header/Nav/page";

const menu = {

  open: {

      width: "480px",

      height: "650px",

      top: "-25px",

      right: "-25px",

      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}

  },

  closed: {

      width: "80px",

      height: "40px",

      top: "0px",

      right: "0px",

      transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}

  }

}

function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className=" fixed z-20 top-[25px] md:top-[50px] right-[25px] md:right-[50px] ">
      {/* Logo */}
        {/* <div className="logo flex flex-row gap-2">
          <Link href={"/"} className="flex flex-row gap-2">
            <div className="h-5 w-5 bg-accent-default rounded-full  "> </div>
            <div className="h-5 w-5 bg-tangerine rounded-full  "> </div>
            <div className="h-5 w-5 bg-background rounded-full "> </div>
          </Link>
        </div> */}
     
       {/* md:w-[480px]  */}
          <motion.div className="w-screen md:w-[480px] h-[650px] bg-neutral-default rounded-[25px] relative opacity-60"
          
          variants={menu}

                animate={isActive ? "open" : "closed"}

                initial="closed"> 

            
            <Nav/>
            </motion.div>
          <Menu isActive={isActive} setIsActive={setIsActive} />
          
        </div>

    
  );
}

export default Header;
