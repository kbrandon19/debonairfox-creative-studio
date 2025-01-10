"use client";
import React, { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";
import Nav from "../Header/Nav/page";
import Menu from "../Header/Menu/page";
import Link from "next/link";

// const menu = (isLargeScreen: boolean) => ({
//   open: {
//     width: isLargeScreen ? "480px" : "100vw",
//     height: "550px",
//     top: "-25px",
//     right: "-25px",
//     transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1], },
//   },
//   closed: {
//     width: "80px",
//     height: "40px",
//     top: "0px",
//     right: "0px",
//     transition: {
//       duration: 0.75,
//       delay: 0.1,
//       type: "tween",
//       ease: [0.76, 0, 0.24, 1],
//     },
//   },
// });

function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.matchMedia("(min-width: 1080px)").matches);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="fixed z-50  top-[15px] md:top-[40px] left-[25px] md:left-[50px]">
        <div className="flex items-center w-auto h-auto">
          <Link href={"/"} className="flex flex-row gap-2">
            <div className="h-5 w-5 bg-accent-default rounded-full  "> </div>
            <div className="h-5 w-5 bg-tangerine rounded-full  "> </div>
            <div className="h-5 w-5 bg-background rounded-full "> </div>
          </Link>
        </div>
      </div>
      {/* <div className="fixed z-50 top-[25px] md:top-[50px] right-[25px] md:right-[50px]">
        <motion.div
          className="w-screen h-[550px] bg-accent-200  rounded-[25px] relative opacity-95"
          variants={menu(isLargeScreen)}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <Nav isActive={isActive} setIsActive={setIsActive} />
        </motion.div>
        <Menu isActive={isActive} setIsActive={setIsActive} />
      </div> */}
    </>
  );
}

export default Header;
