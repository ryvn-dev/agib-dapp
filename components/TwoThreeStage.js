import React from "react";
import { Disclosure } from "@headlessui/react";

export default function TwoThreeStage() {
  const features = [
    {
      name: "Customization Play",
      description:
        "Your AGIBs can be transformed or even re-created with your own picture and voice to be any possibility.",
    },
    {
      name: "Costume Play",
      description:
        " You can dress up your AGIBs. Our goal for this game is to bring wearable fashion inside the Metaverse.",
    },
    {
      name: "Augmented Reality",
      description:
        "AGIB holders will be able to interact with their AGIB in AR through Instagram, TikTok, or our app on their mobile devices.",
    },
    {
      name: "Merchandise",
      description:
        "AGIB has a very exciting plan for actual AGIB Merch, where AGIB holders will enjoy full intellectual property rights to their NFTs to use them to make profits.",
    },
    {
      name: "Sandbox/ DAO/ AGIB coin",
      description:
        "AGIB has brought a land and will distribute AGIB coins to holders. You can make profits from it. Also, DAO is built for making decisions crucial to the community.",
    },
    {
      name: "Collaborations",
      description:
        "Collaborations are underway with various project groups, anime artists, celebs, and the high-tech industry.",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center pt-20 pb-10 px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#f556a4] sm:text-4xl">
          GameFi & AGIB-verse
        </h2>
        <p className="mt-4 text-white text-center">
          For now, we will serve two games that let our holders can entertain
          with their own iNFTs. Also, AGIB NFT tends to engage in your life,
          from linking to the environment, people, and society.
        </p>
      </div>
      <div className="max-w-2xl mx-auto pb-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name}>
                <div className="hidden sm:block sm:pt-4">
                  <dt className="font-semibold text-lg text-[#f556a4] flex justify-center">
                    <img
                      className="h-[1.3em] contain-fit px-1"
                      src="slider_core.png"
                    ></img>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base text-white text-center">
                    {feature.description}
                  </dd>
                </div>
                <div className="sm:hidden text-center">
                  <Disclosure>
                    <Disclosure.Button className="w-full">
                      <dt className="font-semibold text-lg text-[#f556a4] flex justify-center">
                        <img
                          className="h-[1.3em] contain-fit px-1"
                          src="slider_core.png"
                        ></img>
                        {feature.name}
                      </dt>
                    </Disclosure.Button>
                    <Disclosure.Panel className="w-full">
                      <dd className="mt-2 text-base text-white text-center">
                        {feature.description}
                      </dd>
                    </Disclosure.Panel>
                  </Disclosure>
                </div>
              </div>
            ))}
          </dl>
        </div>
        <div className="p-[5vw]">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-4 lg:gap-6">
            <img src="land.gif" className="bg-gray-100 rounded-lg" />
            <img src="aiko.png" className="bg-gray-100 rounded-lg" />
            <img src="yumi.png" className="bg-gray-100 rounded-lg" />
            <img src="land.gif" className="bg-gray-100 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
