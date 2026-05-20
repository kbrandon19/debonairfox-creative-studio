import { Poppins, Lora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ClientLayout from "@/components/ClientLayout";
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Debonair Fox Creative Studio</title>
        <meta name="description" content="Debonair Fox Creative Studio crafts dynamic websites, immersive social media content, captivating email campaigns, and innovative marketing materials that redefine digital experiences." />
        <meta name="keywords" content="web design, digital marketing, social media, email campaigns, creative studio, branding" />
        <meta name="author" content="Debonair Fox Creative Studio" />
        <meta name="creator" content="Kenneth Brandon" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dfcreativestudio.com" />
        <meta property="og:title" content="Debonair Fox Creative Studio" />
        <meta property="og:description" content="We craft dynamic websites, immersive social media content, and innovative marketing materials that leave a lasting impression." />
        <meta property="og:image" content="https://dfcreativestudio.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Debonair Fox Creative Studio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Debonair Fox Creative Studio" />
      </head>
      <body className="w-screen overflow-x-hidden">
        <main className={`${poppins.variable} ${lora.variable}`}>
          <ClientLayout>{children}</ClientLayout>
          <Analytics />
        </main>
      </body>
    </html>
  );
}