import React from "react";
import { Authors } from "../utils/data/aboutAuthors";

export default function Team() {
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
                  className="inline-block border border-agib-pink border-4 rounded-full ring-2 ring-white h-[12.5rem]"
                  src={item.img_path}
                  alt=""
                />
                <div className="flex flex-col h-[5.5rem] w-2/3 bg-agib-pink rounded-2xl -mt-6 text-center text-white justify-center items-center overflow-hidden">
                  <div className="font-bold text-xl mt-2 tracking-widest">
                    {item.name}
                  </div>
                  <p className="font-medium text-base mb-2 text-[#db6a8d]">
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
