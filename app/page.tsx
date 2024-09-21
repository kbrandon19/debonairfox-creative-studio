import Banner from "../components/Banner/page";
import Hero from "@/components/Hero/page";
import About from "./About/page";
import Services from "./Services/page";
import Contact from "./Contact/page";

import WindowPane01 from "@/components/WindowPane/windowpane01";
import WindowPane02 from "@/components/WindowPane/windowpane02";

import PalScroll from "./palScroll/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <WindowPane01 />
      <PalScroll />
      <WindowPane01 />
      {/* <About/> */}
      {/* <Services/> */}
      {/* <WindowPane02/> */}
      <Contact />
    </>
  );
}
