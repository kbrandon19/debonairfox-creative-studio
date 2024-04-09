import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";

const poppins = Poppins({ 
  subsets: ["latin"],
  style:['normal','italic'],
  weight: ['400','500','600','700','800'], });

export const metadata: Metadata = {
  title: "Debonair Fox Creative Studio",
  description: "Welcome to Debonair Fox Creative Studio, where creativity knows no bounds. We specialize in crafting dynamic websites, immersive social media content, captivating email campaigns, and innovative marketing materials. With a unique approach that blends creativity and technical prowess, we redefine digital experiences to leave a lasting impression.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

<html suppressHydrationWarning={true} lang="en">
  <body>
   <Header/>
      <main className={poppins.className}>{children}</main>
      <Footer/>
</body>
</html>

     

  );
}
