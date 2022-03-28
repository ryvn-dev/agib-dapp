import React from "react";
import { cardImages } from "../utils/data/cardImages";

export default function Cards() {
  return (
    <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:space-x-8 md:space-y-0 md:items-start">
          {cardImages.map((item, index) => {
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between w-8/12 md:w-3/12 rounded-3xl overflow-hidden shadow-lg z-10 text-center text-agib-blue bg-white"
              >
                <div>
                  {item.component}
                  <div className="px-6 py-4 h-[256px] overflow-auto">
                    <div className="font-bold text-xl mb-2">{item.title}</div>
                    <p className="text-base">{item.description}</p>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2 h-[72px] overflow-auto">
                  {item.hashtags.map((hashtag, idx) => {
                    return (
                      <span
                        key={hashtag}
                        className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                      >
                        {hashtag}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
}
