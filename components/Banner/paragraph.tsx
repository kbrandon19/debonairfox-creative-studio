'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

interface ParagraphProps {
  value: string;
}

export default function Paragraph({ value }: ParagraphProps) {
  const element = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start .8', 'end .8'],
  });

  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen is mobile size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the width threshold as needed
    };

    // Set initial value and add resize event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const words = value.split(' ');

  return (
    <div
      className="w-5/6 h-auto mx-auto 
      text-titleMid
      smd:text-titleSmd
      lg:text-titleSm font-semibold leading-tight uppercase text-background drop-shadow-md flex flex-wrap "
      ref={element}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress} isMobile={isMobile}>
            {word}
          </Word>
        );
      })}
    </div>
  );
}

// Define the type for the Word component props
interface WordProps {
  children: React.ReactNode;
  range: number[];
  progress: any; // You can further specify this type based on what useTransform returns
  isMobile: boolean;
}

const Word: React.FC<WordProps> = ({ children, range, progress, isMobile }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-4">
      <span className="absolute opacity-5">{children}</span>
      {isMobile ? (
        <span className="mr-4">{children}</span> // Static content for mobile (no animation)
      ) : (
        <motion.span style={{ opacity }} className="mr-4">
          {children}
        </motion.span>
      )}
    </span>
  );
};
