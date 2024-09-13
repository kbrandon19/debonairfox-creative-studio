
import Banner from '../components/Banner/page';
import Hero from "@/components/Hero/page";
import About from "./About/page";
import Services from "./Services/page";
import Contact from "./Contact/page";
import Header from '@/components/Header/header01';
import WindowPane01 from '@/components/WindowPane/windowpane01';
import WindowPane02 from '@/components/WindowPane/windowpane02';

export default function Home() {
  return (
    <>
     <Header/>
    <Hero/>
    <Banner/>
    <WindowPane01/>
    <Services/>
    {/* <About/> */}
    <WindowPane02/>
    <Contact/>
  
    
</>
  );
}
