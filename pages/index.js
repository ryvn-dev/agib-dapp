import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import { useState } from "react";
import Cards from "../components/Cards";
import Team from "../components/Team";
import { rmData } from "../utils/data/roadmapData";
import Carousel from "../components/GalleryMobile";
import TwoThreeStage from "../components/TwoThreeStage";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout Home>
      <div id="gallery">
        <Carousel />
        <Gallery />
      </div>

      <div id="roadmap" className="overflow-x items-center -mb-[54rem]">
        <div className="my-32 bg-agib-purple h-[45rem] transform -rotate-6 scale-[1.3] opacity-40 mix-blend-overlay"></div>
      </div>

      <Cards />

      <div className="relative top-24 overflow-hidden items-center">
        <div className="my-32 bg-agib-sky bg-opacity-60 mix-blend-overlay">
          <TwoThreeStage />
        </div>
      </div>

      <Team />
    </Layout>
  );
}
