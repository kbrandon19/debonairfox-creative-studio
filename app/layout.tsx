"use client";

import { Suspense } from "react"; // Add the import for Suspense
import { Poppins } from "next/font/google";
import { metadata } from "@/lib/metadata/home/metadata";
import { Lora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "@/components/SmoothScroll";
import { ReactNode } from "react";
import Header01 from "@/components/Header/header01";
import Footer01 from "@/components/Footer/footer01";
import Loading from "./loading";

import { usePathname } from "next/navigation";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Set the condition to hide footer for specific routes
  const hideFooter = ["/Services", "/case-study"].includes(pathname); // Replace "/your-page" with the actual route

  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className="w-screen overflow-x-hidden">
        <main className={`${poppins.variable} ${lora.variable}`}>
          <Header01 />
          <SmoothScroll>
            {/* Wrap the `children` in Suspense */}
            <Suspense fallback={<Loading />}>{children}</Suspense>
            {/* Conditionally render the footer */}
            {!hideFooter && <Footer01 />}
            <div className="w-5/6 relative h-auto mx-auto pt-5 mt-5 ">
              <div className=" w-full h-auto p-5 text-sm text-accent-default">
                © 2024{" "}
                <span className="rainbow-text text-sm">
                  Debonair Fox Creative Studio
                </span>
                . All Right Reserved.
              </div>
            </div>
          </SmoothScroll>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
