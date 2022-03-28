import React from "react";
import { demoImages } from "../utils/data/demoImages";
import Image from "next/dist/client/image";

export default function GalleryMobile() {
  const border = ["rounded-tl-full", "rounded-br-full", "", "rounded-br-full"];

  return (
    <section id="gallery" className="block md:hidden container mx-auto">
        <div className="flex flex-col space-y-8 justify-center items-center py-[200px]">
          {demoImages.map((item, index) => {
            const rounded = [" rounded-tl-3xl", "", "", " rounded-br-3xl"];
            return (
              <div
                key={item.tail}
              >
                  <Image
                    className={"outline outline-offset-1 outline-2 outline-agib-sky py-8" + rounded[index]}
                    alt="Img of AGIB NFT"
                    src={item.tail}
                    width={512}
                    height={512}
                    layout="fixed"
                  />
              </div>
            );
          })}
        </div>

    </section>
  );
}
