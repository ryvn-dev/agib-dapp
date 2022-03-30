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
        <div className="my-32 bg-agib-purple h-[45rem] transform -rotate-6 scale-[1.3] opacity-40 mix-blend-soft-light"></div>
      </div>

      <Cards />

      <div className="relative overflow-hidden items-center z-10">
        {/* <img className="absolute -left-[5%] top-[calc(38rem-39vw)] w-3/12 hidden md:block" src="heart_da.png" /> */}
        <div className="mt-20 md:mt-[calc(38rem-24vw)] bg-[#f4c4dc] mix-blend-soft-light z-20">
          <TwoThreeStage />
        </div>
      </div>

      <Team />
    </Layout>
  );
}
