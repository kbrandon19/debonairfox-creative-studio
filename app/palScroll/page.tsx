"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion, MotionValue,useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Lenis from "lenis";

const images = [
  /* col 0 */ "https://res.cloudinary.com/dujkjy2e2/image/upload/v1734549108/Debonair%20Fox%20Creative%20Studio/Parallax%20Gallery/4_wj9ek0.png",
  /* col 1 */"https://res.cloudinary.com/dujkjy2e2/image/upload/v1736448219/Debonair%20Fox%20Creative%20Studio/Parallax%20Gallery/1_bj3pil.jpg",
  /* col 2 */"https://res.cloudinary.com/dujkjy2e2/image/upload/v1736448223/Debonair%20Fox%20Creative%20Studio/Parallax%20Gallery/4_d8itr0.jpg",

  /* col 3 */"https://res.cloudinary.com/dujkjy2e2/image/upload/v1735679047/Debonair%20Fox%20Creative%20Studio/Parallax%20Gallery/2_xuhgsh.jpg",
  /* col 4 */"https://res.cloudinary.com/dujkjy2e2/image/upload/v1734549123/Debonair%20Fox%20Creative%20Studio/Parallax%20Gallery/6_egevfp.png",
  /* col 5 */"https://res.cloudinary.com/dujkjy2e2/image/upload/v1736189185/Debonair%20Fox%20Creative%20Studio/Parallax%20Gallery/barefoot_ipx5h7.jpg",
  

  /* col 6 */"https://res.cloudinary.com/dujkjy2e2/image/upload/v1735679098/Debonair%20Fox%20Creative%20Studio/Parallax%20Gallery/9_ztwn7a.jpg",
  /* col 7 */"https://res.cloudinary.com/dujkjy2e2/image/upload/v1736198748/Debonair%20Fox%20Creative%20Studio/Parallax%20Gallery/11_wcqpab.jpg",
  /* col 8 */"https://res.cloudinary.com/dujkjy2e2/image/upload/v1654008427/Product/IMG_0056_krpoi4.png",

  /* col 9 */"https://res.cloudinary.com/dujkjy2e2/image/upload/v1736189186/Debonair%20Fox%20Creative%20Studio/Parallax%20Gallery/sanity_qsnchr.jpg",
  /* col 10 */"https://res.cloudinary.com/dujkjy2e2/image/upload/v1736189186/Debonair%20Fox%20Creative%20Studio/Parallax%20Gallery/sanity_qsnchr.jpg",
  /* col 11 */ "https://res.cloudinary.com/dujkjy2e2/image/upload/v1735679074/Debonair%20Fox%20Creative%20Studio/Parallax%20Gallery/7_iugerm.jpg",
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
  lerp: 0.2, // Smooth scrolling with easing
  duration: 1.2, // Optional duration for smoother transitions
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
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
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
          <Link href="https://www.github.com/kbrandon19" aria-label={`View Image ${i + 1}`}>
            <Image
              src={src} // Use the direct URL from the images array
              alt={`Image ${i + 1}`}
              fill
              loading={i === 0 ? "eager" : "lazy"}
              sizes="(max-width: 800px) 100vw, 33vw"
              priority={i === 0}
            />
          </Link>
        </div>
      ))}
    </motion.div>
  );
};
