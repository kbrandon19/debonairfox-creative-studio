import Image from "next/image";
import ComingSoon from "../components/ComingSoon/page";
import Banner from '../components/Banner/page';
import Hero from "@/components/Hero/page";
import About from "./About/page";
import Services from "./Services/page";
import Footer from '../components/Footer/page';
import Contact from "./Contact/page";

export default function Home() {
  return (
    <>
    
 {/* <ComingSoon/> */}
    <Hero/>
    <Banner/>
    <Services/>
    <About/>
    <Contact/>
  
    
</>
  );
}
