"use client";
import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Linear interpolation for smooth scrolling
      // duration: 1.5, // Adjust the scroll duration
      gestureOrientation: 'vertical', // Vertical scroll only
      orientation:'vertical',
      wrapper: window, // Apply Lenis to the window
      smoothWheel:true,
      // other options here
    });

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy(); // Cleanup Lenis on component unmount
    };
  }, []);

  return <div>{children}</div>;
}

export default SmoothScroll;
