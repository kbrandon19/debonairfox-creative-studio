"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Links } from "./data";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 100,
    translateX: 20,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

interface PageProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<PageProps> = ({ isActive, setIsActive }) => {
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    setIsActive(false); // Close the menu

    // Delay navigation to match animation close time
    setTimeout(() => {
      router.push(href); // Navigate to the new page
    }, 750); // Adjust based on the duration of the animation
  };

  return (
    <div className="flex flex-col justify-between h-full box-border pt-24 px-10 pb-12">
      <div className="flex gap-[10px] flex-col cursor-pointer">
        {Links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={i} className="">
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate={isActive ? "enter" : "initial"}
                exit="exit"
              >
                <a
                  className="text-white text-secTitle hover:text-accent-default transition-all ease-in-out flex items-center gap-2"
                  onClick={() => handleLinkClick(href)} // Handle click manually
                >
                  {title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
