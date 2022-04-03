import React from "react";
import { Authors } from "../utils/data/aboutAuthors";

export default function Team() {
  const borderColors = [
    " border-agib-blue border-opacity-60",
    " border-agib-purple",
    " border-agib-sky",
    " border-agib-pink border-opacity-60",
  ];
  const textColors = [
    " text-agib-blue text-opacity-60",
    " text-agib-purple",
    " text-agib-sky",
    " text-agib-pink  text-opacity-60",
  ];
  return (
    <div id="team" className="py-32">
      <div className="relative">
        <div className="h-1 w-full bg-agib-blue opacity-50"></div>
        <div
          className="absolute left-[16.67%] -top-[20px] h-12 w-2/3 flex justify-center items-center rounded-md bg-agib-blue font-bold text-xl text-white tracking-widest
                          md:left-1/3 md:w-1/3"
        >
          AGIB TEAM
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-6 flex flex-col justify-center items-center space-y-8 overflow-hidden py-24 md:flex-row md:space-x-8 md:space-y-0">
          {Authors.map((item, index) => {
            return (
              <div
                key={item.name}
                className="flex flex-col items-center w-[75vw] md:w-[20%]"
              >
                <img
                  className={
                    "inline-block border border-4 rounded-full ring-2 ring-white h-[30vw] w-[30vw] md:h-[12vw] md:w-[12vw]" +
                    borderColors[index]
                  }
                  src={item.img_path}
                  alt=""
                />
                <div className="mt-2 flex flex-col text-center justify-center items-center">
                  <div
                    className={
                      "font-bold text-[4vw] md:text-[1.5vw] mt-2 tracking-widest" +
                      textColors[index]
                    }
                  >
                    {item.name}
                  </div>
                  <p
                    className={
                      "font-medium text-[2vw] md:text-[1vw] mb-2" +
                      textColors[index]
                    }
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
