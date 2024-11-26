
import { Suspense } from "react"; // Add the import for Suspense
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Lora } from "next/font/google";
import "../../globals.css";
import Header01 from "@/components/Header/header01";


import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from '@/components/SmoothScroll';
import React,{ ReactNode } from "react";
import Loading from "../../loading";



const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Content Creation | DFCS",
  description: "At DFCS, we take pride in transforming our clients&apos; visions into reality. Our case studies showcase a range of projects where our innovative design and development solutions have made a significant difference. Explore how we’ve helped businesses elevate their digital presence, engage their audiences, and achieve their goals through our bespoke approach and creative expertise.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (

    <> 
          <main className={`${poppins.variable} ${lora.variable}`}>
            <SmoothScroll>
                <Header01/>
                <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
            </SmoothScroll>
            
            <Analytics />
          </main>

</>
  );
}
