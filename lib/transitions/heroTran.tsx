"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function HeroTextTransition({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set the state to true after the component mounts
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, display: "hidden" }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default HeroTextTransition;
