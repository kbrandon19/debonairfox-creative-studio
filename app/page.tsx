
import Banner from '../components/Banner/page';
import Hero from "@/components/Hero/page";
import About from "./About/page";
import Services from "./Services/page";
import Contact from "./Contact/page";
import Header from '@/components/Header/header01';

export default function Home() {
  return (
    <>
     <Header/>
    <Hero/>
    <Banner/>
    <Services/>
    {/* <About/> */}
    <Contact/>
  
    
</>
  );
}
