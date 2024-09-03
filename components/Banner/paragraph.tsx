'use client';

import React, { useEffect, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

// Define the type for the props offset: ['start 0.9', 'start 0.25'],
interface ParagraphProps {
  value: string;
}

export default function Paragraph({ value }: ParagraphProps) {
  const element = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start .8', 'end .8'],
    

  });

  const words = value.split(' ');

  return (
    <div
      className="w-5/6 h-auto mx-auto 
      text-titleMid
      smd:text-titleSmd
      lg:text-titleSm 
      2xl:text-titleMd font-semibold leading-tight uppercase text-background drop-shadow-md flex flex-wrap "
      ref={element}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
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
}

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-4">
      <span className="absolute opacity-5">{children}</span>
  <motion.span style={{ opacity }} className="mr-4">
{children}
</motion.span>
    </span>


  );
};
