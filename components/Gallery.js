import React from "react";
import { demoImages } from "../utils/data/demoImages";
import Image from "next/dist/client/image";

export default function Gallery() {
  const border = ["rounded-tl-full", "rounded-br-full", "", "rounded-br-full"];

  return (
    <section className="container mx-auto">
      <div id="gallery" className="w-full flex justify-center py-[200px]">
        <div className="flex space-x-8 h-[32rem] w-[70vw] group">
          {demoImages.map((item, index) => {
            const rounded = [" rounded-tl-3xl", "", "", " rounded-br-3xl"];
            return (
              <div
                key={item.tail}
                className={
                  "w-3/12 h-full outline outline-offset-4 outline-1 outline-agib-sky group-hover:w-2/12 hover:!w-6/12 duration-1000 overflow-hidden" +
                  rounded[index]
                }
              >
                <div className="">
                  <Image
                    className="-translate-x-1/3 opacity-70 hover:translate-x-0 hover:opacity-100 duration-1000 p-8"
                    alt="Img of AGIB NFT"
                    src={item.tail}
                    width={512}
                    height={512}
                    layout="fixed"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
