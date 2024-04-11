/* eslint-disable @next/next/no-img-element */
import MainSection from "@/components/common/MainSection";
import React from "react";
import partner1 from "@/assets/partner1.png";
import partner2 from "@/assets/partner2.png";
import partner3 from "@/assets/partner3.png";
import partner4 from "@/assets/partner4.png";
import partner5 from "@/assets/partner5.png";
import partner6 from "@/assets/partner6.png";

const Partner = () => {
  return (
    <MainSection className="my-5">
      <div className="w-full text-center mb-5 py-5">
        <h3 className="text-color/1 font-700  l:leading-17 uppercase text-[36px]">
          đối tác của technam marketing
        </h3>
      </div>
      <div className="grid grid-cols-2 t:grid-cols-3 d:grid-cols-6">
        <div className="flex justify-center items-center">
          <img src={partner1.src} alt="Đối tác của Technam marketing" />
        </div>
        <div className="flex justify-center items-center">
          <img src={partner2.src} alt="Đối tác của Technam marketing" />
        </div>
        <div className="flex justify-center items-center">
          <img src={partner3.src} alt="Đối tác của Technam marketing" />
        </div>
        <div className="flex justify-center items-center">
          <img src={partner4.src} alt="Đối tác của Technam marketing" />
        </div>
        <div className="flex justify-center items-center">
          <img src={partner5.src} alt="Đối tác của Technam marketing" />
        </div>
        <div className="flex justify-center items-center">
          <img src={partner6.src} alt="Đối tác của Technam marketing" />
        </div>
      </div>
    </MainSection>
  );
};

export default Partner;
