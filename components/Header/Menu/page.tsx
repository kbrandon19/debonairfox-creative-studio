import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface PageProps {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

const Page: React.FC<PageProps> = ({ isActive, setIsActive }) => {
  // Close the menu when the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (isActive) {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll event listener on unmount or when isActive changes
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isActive, setIsActive]);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="h-10 w-20 cursor-pointer rounded-[25px] overflow-hidden absolute top-0 right-0"
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="w-full h-full bg-accent-200 text-white uppercase tracking-wider">
          <PerspectiveText label="Menu" />
          <p>Menu</p>
        </div>
        <div className="w-full h-full absolute top-full bg-tangerine text-accent-default uppercase tracking-wider">
          <PerspectiveText label="Close" />
          <p>Close</p>
        </div>
      </motion.div>
    </div>
  );
};

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className="perspectiveText">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}

export default Page;
