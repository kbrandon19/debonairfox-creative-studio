"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const Transition: React.FC<Props> = ({ children }) => {
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollLocation = window.scrollY;
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollYProgress = scrollLocation / scrollHeight;

        // Log the scrollYProgress value
        console.log("Scroll Y Progress:", scrollYProgress);

        // Set opacity based on scrollYProgress
        if (scrollYProgress >= 0.2) {
          // 20% as a decimal
          setOpacity(0); //Transparent
        } else {
          setOpacity(1); // Full opacity
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Initial check
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className={`w-auto h-auto`} style={{ opacity }}>
      {children}
    </div>
  );
};

export default Transition;
