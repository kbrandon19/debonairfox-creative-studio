import Banner from "../components/Banner/page";
import Hero from "@/components/Hero/page";
// import Services from "./Services/page"
import Footer from '../components/Footer/footer01';
import Contact from "./Contact/page";
import React from 'react';

import PalScroll from "./palScroll/page";

export default function Home() {
  return (
    <>
    

    <Hero/>
    <Banner/>
    {/* <Services/> */}
    <PalScroll/>
    <Contact/>
    <Footer/>
  
    
</>
  );
}
