"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Lenis from "lenis";

const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
];

interface Dimension {
  width: number;
  height: number;
}

const FIXED_HEIGHT = 600; // Define a fixed height for screens 800px or less

const Page: React.FC = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start .8", "end start"],
  });

  const height = dimension.width > 800 ? dimension.height : FIXED_HEIGHT;

  // Conditional transforms based on screen width
  const y = useTransform(scrollYProgress, [0, 1], [0, height]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.8]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 1,
      duration: 2,
    });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize(); // Initial size calculation

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="gallery">
      <div className="galleryWrapper" ref={gallery}>
        <Column images={[images[3], images[0], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[1]]} y={y2} />
        <Column images={[images[8], images[2], images[6]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </div>
  );
}

export default Page;

interface ColumnProps {
  images: string[];
  y: MotionValue<number>;
}

const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div className="column" style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className="imageContainer hover:cursor-pointer">
          <Link href={"https://www.github.com/kbrandon19"}>
            <Image src={`/assets/images/${src}`} alt="image" fill />
          </Link>
        </div>
      ))}
    </motion.div>
  );
};
