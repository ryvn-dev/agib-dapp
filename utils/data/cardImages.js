import TwentyTwenty from "react-twentytwenty";

export const cardImages = [
  {
    component: (
      <img
        className="w-full"
        src="/interpolation.gif"
        alt="Sunset in the mountains"
      />
    ),
    title: "AI × Artists",
    description:
      "Co-created by high-end, cutting-edge AI generative techniques and anime artists, all 4k AGIB PFP NFTs will be guaranteed excitingly unique, not composed from combinations of a fixed set.",
    hashtags: ["#anime", "#nvidia", "#deeplearning"],
  },
  {
    component: (
      <TwentyTwenty
        className="w-full"
        left={<img src="/360p.jpg" />}
        right={<img src="/4k.jpg" />}
        slider={
          <div
            className='absolute -left-4 top-1/2 w-8 h-8
                                        before:content-[" "] before:block before:absolute before:w-1 before:-z-10 before:h-96 before:bg-agib-pink before:left-1/2 before:-ml-[2px] before:bottom-1/2 before:mb-3
                                        after:content-[" "] after:block after:absolute after:w-1 after:-z-10 after:h-96 after:bg-agib-pink after:opacity-100 after:left-1/2 after:-ml-[2px] after:-mt-3'
          >
            <div>
              <img src="/slider_core.png" />
            </div>
          </div>
        }
      />
    ),
    title: "Super Resolution",
    description:
      "Each AGIB avatar will be presented as an AI-art defined between digital orthodox and aesthetic noise. These art pieces are made possible and of high quality by further imbued AI-codec techniques.",
    hashtags: ["#upscaling", "#gnu"],
  },
  {
    component: (
      <img className="w-full" src="/speak.gif" alt="Sunset in the mountains" />
    ),
    title: "Voice iNFT",
    description:
      "Each AGIB Avatar will be endowed with the capability to animate and speak, powered by AI TTS tech. All PFP holders will be airdropped one custom voice serum per NFT so as to create new Voice NFTs with your own texts.",
    hashtags: ["#waifu", "#voice", "#txt2speech"],
  },
];
