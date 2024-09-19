import React from "react";
import { motion } from "framer-motion";
import { Links } from "./data"; // Assuming you have link data

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

    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1]}

}
};

interface PageProps {
  isActive: boolean;
}

const Page: React.FC<PageProps> = ({ isActive }) => {
  return (
    <div className="flex flex-col justify-between h-full box-border pt-24 px-10 pb-12">
      <div className="flex gap-[10px] flex-col">
        {Links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={i} className="">
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate={isActive ? "enter" : "initial"}  // Trigger enter on isActive
                exit="exit"
              >
                <a href={href} className="text-black text-secTitle">
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

export default Page;
