import { Suspense } from "react"; // Add the import for Suspense
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Lora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from '@/components/SmoothScroll';
import { ReactNode } from "react";
import Header01 from "@/components/Header/header01";
import Footer from "@/components/Footer/page";
import Loading from "./loading";

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
  title: "Debonair Fox Creative Studio",
  description: "Welcome to Debonair Fox Creative Studio, where creativity knows no bounds. We specialize in crafting dynamic websites, immersive social media content, captivating email campaigns, and innovative marketing materials. With a unique approach that blends creativity and technical prowess, we redefine digital experiences to leave a lasting impression.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className="w-screen overflow-x-hidden">
        <main className={`${poppins.variable} ${lora.variable}`}>
            <Header01 />
            {/* Wrap the `children` in Suspense */}
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
            <Footer />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
