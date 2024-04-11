/* eslint-disable @next/next/no-img-element */
import MainSection from "@/components/common/MainSection";
import { feedback } from "@/contants/contans";
import clsx from "clsx";
import React from "react";

const FeedbackCustomer = () => {
  return (
    <MainSection>
      <div className="flex flex-col justify-center items-center mb-12">
        <p className="text-[#0265FF] text-[20px] font-[700] leading-5 uppercase">
          Phản hồi
        </p>
        <h3 className="text-[#0265FF] font-[600] text-[40px] leading-12 text-center">
          KHÁCH HÀNG NÓI GÌ VỀ
          <br /> TECHNAM
        </h3>
        <div className="flex gap-1 items-center">
          <div className="w-[150px] h-[5px] bg-color/1 rounded-[2px]"></div>
          <div className="w-[150px] h-[5px] bg-color/1  rounded-[2px]"></div>
        </div>
      </div>
      <div className="grid d:flex grid-cols-1 t:grid-cols-2 t:gap-2 d:grid-cols-3 l:gap-0 justify-center ">
        {feedback.map((item, index) => (
          <div
            key={index}
            className={clsx("t:max-w-[430px] w-full min-h-[370px] mb-4", {
              "bg-[#EEF9FF]": !item.isActive,
              "shadow-custom-main-2":item.isActive
            })}
          >
            <div className="w-full h-[133px] border-b border-[#DEE2E6] p-12 mb-4">
              <div className="flex items-center gap-3">
                <img src={item.avt.src} alt={item.name} />
                <div className="flex flex-col">
                  <h4 className="text-color/1 text-[24px] font-[900] leading-leading/1 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-color/2 leading-21 font-400 uppercase  text-[14px]">
                    {item.position}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-12 ">
              <p className="text-color/2 leading-21 font-400">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </MainSection>
  );
};

export default FeedbackCustomer;
