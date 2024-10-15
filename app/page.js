import Image from "next/image";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import  Section  from "./Components/Section";


export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Footer/>
      <Section/>
    </div>
  );
}
