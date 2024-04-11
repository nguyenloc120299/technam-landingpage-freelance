/* eslint-disable @next/next/no-img-element */
import React from "react";

import About from "./components/About";
import { valueAboutBox } from "@/contants/contans";
import home_1 from "@/assets/home_1.png";
import home_2 from "@/assets/home_2.png";
import Service from "./components/Service";
import OutstandingProject from "./components/OutstandingProject";
import Section2 from "./components/Section2";
import FeedbackCustomer from "./components/FeedbackCustomer";
import Partner from "./components/Partner";
import MainSection from "@/components/common/MainSection";

const HomePage = () => {
  return (
    <div className="w-full h-full">
    
      <MainSection>
        <About />
        <div className="my-5 py-5">
          <div className="grid grid-cols-2  t:grid-cols-4 gap-4">
            {valueAboutBox.map((item, index) => (
              <div
                className="mx-auto flex max-w-[366px] w-full h-[100px] px-6 justify-center items-center rounded-[16px] bg-custom-main-2"
                key={index}
              >
                <div className="flex flex-col justify-center items-start">
                  <h4 className="text-[#fff] text-[28px] font-[400]">
                    {item.value}
                  </h4>
                  <p className="text-[#fff] text-[14px] font-[400]">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 t:grid-cols-2 gap-4 my-5">
          <div className="max-w-[843px] w-full">
            <img src={home_1.src} alt="Techname marketing Ảnh cty 1" />
          </div>
          <div className="max-w-[843px] w-full">
            <img src={home_2.src} alt="Techname marketing Ảnh cty 2" />
          </div>
        </div>
      </MainSection>
      <Service/>
      <OutstandingProject/>
      <Section2/> 
      <FeedbackCustomer/>
      <Partner/>
    </div>
  );
};

export default HomePage;
