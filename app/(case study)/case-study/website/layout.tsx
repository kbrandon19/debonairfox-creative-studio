import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Lora } from "next/font/google";
import "../../../globals.css";
import Header02 from "@/components/Header/header02";

import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from '@/components/SmoothScroll';
import { ReactNode } from "react";


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
  title: "DFSC | About",
  description: "Welcome to Debonair Fox Creative Studio, where creativity knows no bounds. We specialize in crafting dynamic websites, immersive social media content, captivating email campaigns, and innovative marketing materials. With a unique approach that blends creativity and technical prowess, we redefine digital experiences to leave a lasting impression.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (

    <> 
          <main className={`${poppins.variable} ${lora.variable}`}>
            <SmoothScroll>
                <Header02/>
            {children}
            </SmoothScroll>
            
            <Analytics />
          </main>

</>
  );
}
