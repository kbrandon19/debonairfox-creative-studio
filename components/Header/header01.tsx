"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "../Header/Nav/page";
import Menu from "../Header/Menu/page";

const menu = (isLargeScreen: boolean) => ({
  open: {
    width: isLargeScreen ? "480px" : "100vw",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "80px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
});

function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.matchMedia("(min-width: 1080px)").matches);
    };

    // Check the screen size on initial render
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed z-20 top-[25px] md:top-[50px] right-[25px] md:right-[50px]">
      <motion.div
        className="w-screen h-[650px] bg-neutral-default rounded-[25px] relative opacity-95"
        variants={menu(isLargeScreen)}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        {/* Pass isActive to Nav for controlling link animations */}
        <Nav isActive={isActive} />
      </motion.div>
      <Menu isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}

export default Header;
