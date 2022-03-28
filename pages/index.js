import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import { useState } from "react";
import Cards from "../components/Cards";
import FAQ from "../components/FAQ";
import Team from "../components/Team";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout Home>
  
      

      <Gallery />
      
      <div id="roadmap" className="overflow-x items-center -mb-[54rem]">
        <div className="my-32 bg-agib-purple h-[45rem] transform -rotate-6 scale-[1.3] opacity-40" 
        ></div>
      </div>

      <Cards />

      <div className="relative top-24 overflow-hidden items-center">
        <div className="my-32 bg-agib-sky h-[45rem] opacity-100" 
        ></div>
      </div>

      
      <Team />
      
      
    </Layout>
  );
}
