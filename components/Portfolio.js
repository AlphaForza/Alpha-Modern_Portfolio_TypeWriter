import React from "react";

import dataCard from "../public/assets/index";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="bg-[url('../public/assets/portfolioBg.svg')] bg-contain  bg-no-repeat bg-right-top w-full h-full pb-20">
      <div className="container mx-auto bg-[#101B2E]/70 h-full mb-20 mt-20  p-[40px] rounded-2xl">
        <h1 className="text-center my-5 lg:text-left lg:my-0 text-white text-[42px] lg:text-[62px] font-semibold">
          Our Portfolio
        </h1>
        <div className="flex justify-center lg:justify-between items-center flex-wrap gap-5">
          {dataCard.map((item) => (
            <div key={item.id}>
              <Image alt={item.title} src={item.img} width="360" height="270" />
              <p className="text-white text-[24px] font-medium">{item.title}</p>
              <p className="text-[#868490] text-[20px] font-regular">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
