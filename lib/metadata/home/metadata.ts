import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Debonair Fox Creative Studio",
    template: " Debonair Fox Creative Studio",
  },
  description: "Debonair Fox Creative Studio crafts dynamic websites, immersive social media content, captivating email campaigns, and innovative marketing materials that redefine digital experiences.",
  keywords: ["web design", "digital marketing", "social media", "email campaigns", "creative studio", "branding"],
  authors: [{ name: "Debonair Fox Creative Studio" }],
  creator: "Kenneth Brandon",
  metadataBase: new URL("https://dfcreativestudio.com"), 
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dfcreativestudio.com",
    siteName: "Debonair Fox Creative Studio",
    title: "Debonair Fox Creative Studio",
    description: "We craft dynamic websites, immersive social media content, and innovative marketing materials that leave a lasting impression.",
    images: [
      {
        url: "/og-image.png", // add a 1200x630 image to your public folder
        width: 1200,
        height: 630,
        alt: "Debonair Fox Creative Studio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};