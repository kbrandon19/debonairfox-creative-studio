"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.5, // Adjust interpolation speed for smoother scroll (lower is faster)
      duration: 1.8, // Adjust the scroll duration (higher means smoother but slower)
      // Original Values
      // lerp: 0.08, // Adjust interpolation speed for smoother scroll (lower is faster)
      // duration: 1.2, // Adjust the scroll duration (higher means smoother but slower)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for a smoother scroll
      gestureOrientation: 'vertical', // Vertical scroll only
      smoothWheel: true, // Enable smooth scrolling for wheel
      touchMultiplier: 2.5, // Make touch gestures scroll faster
    });

    // Animation loop for Lenis
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
