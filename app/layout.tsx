import { metadata } from "@/lib/metadata/home/metadata";
import { Poppins, Lora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";
import ClientLayout from "@/components/clientLayout";

export { metadata }; // ✅ This works because no "use client"

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
  return (
    <html suppressHydrationWarning lang="en">
      <body className="w-screen overflow-x-hidden">
        <main className={`${poppins.variable} ${lora.variable}`}>
          <ClientLayout>{children}</ClientLayout>
          <Analytics />
        </main>
      </body>
    </html>
  );
}