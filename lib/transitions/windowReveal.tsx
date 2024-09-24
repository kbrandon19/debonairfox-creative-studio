"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const WindowPane2: React.FC<Props> = ({ children }) => {
  const [opacity, setOpacity] = useState<number>(0);
  const [display, setDisplay] = useState<string>("hidden");


  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollLocation = window.scrollY;
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollYProgress = scrollLocation / scrollHeight;

        // Log the scrollYProgress value
        console.log("Scroll Y Progress:", scrollYProgress);

        // Set opacity and display based on scrollYProgress
        if (scrollYProgress <= 0.70 || scrollYProgress >= 0.91) {
          setOpacity(0); // Transparent
          setDisplay("hidden"); // Element is not displayed
         
        
          }
        else {
          setOpacity(1); // Full opacity
          setDisplay("block"); // Element is displayed
         
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
    <motion.div className="w-auto h-auto" style={{ opacity, display }}>
      {children}
    </motion.div>
  );
};

export default WindowPane2;


