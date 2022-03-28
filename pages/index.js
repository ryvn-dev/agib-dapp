import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import { useState } from "react";
import Cards from "../components/Cards";
import Team from "../components/Team";
import { rmData } from "../utils/data/roadmapData";
import GalleryMobile from "../components/GalleryMobile";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout Home>
  
      
      <GalleryMobile />
      <Gallery />
      
      <div id="roadmap" className="overflow-x items-center -mb-[54rem]">
        <div className="my-32 bg-agib-purple h-[45rem] transform -rotate-6 scale-[1.3] opacity-40" 
        ></div>
      </div>

      <Cards />

      <div className="relative top-24 overflow-hidden items-center">
        <div className="my-32 bg-agib-sky opacity-100">
          <div className="container mx-auto flex flex-col justify-center items-center space-y-8 
                          md:items-start md:flex-row md:space-y-0 md:space-x-8 py-10">
            <div className="w-1/3">{rmData[0].des}</div>
            <img className="rounded-xl w-1/3" src="land.gif"></img>
            <div className="w-1/3">{rmData[1].des}</div>
            


          </div>



        </div>
      </div>

      
      <Team />
      
      
    </Layout>
  );
}
