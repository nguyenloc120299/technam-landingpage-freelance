/* eslint-disable @next/next/no-img-element */
import MainSection from "@/components/common/MainSection";
import img_7 from "@/assets/home_7.png";
import React from "react";

const Section2 = () => {
  return (
    <MainSection className="bg-custom-main-1 relative">
      <div className="h-full l:h-[641px] l:border-[4px] border-[#fff] w-full relative">
        <div className="l:absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full grid grid-cols-1 l:grid-cols-2">
            <div className="flex justify-center items-center mb-5 l:mb-0 pb-10">
              <div className="flex flex-col gap-3">
                <h4 className="text-[#fff] text-[36px] d:text-[50px] font-[400] leading-[27px]">
                  10 vạn câu hỏi vì sao?{" "}
                </h4>
                <p className="text-[#fff] text-[12px] d:text-[24px]">
                  Vừng ơi, mở ra mọi giải pháp
                </p>
                <button className="border-[2px] border-[#fff] bg-custom-main-2 shadow-custom-1 flex justify-center items-center max-w-[255px] h-[45px] py-1 py-15 text-[#fff] rounded-[50px] text-[19px] font-[700]">
                  TÌM HIỂU THÊM
                </button>
              </div>
            </div>
            <div className="w-full h-full relative flex justify-center items-center">
              <div className="f l:absolute right-[-20px] top-[-20px] w-full h-full flex justify-center l:justify-end z-10">
                <img
                  src={img_7.src}
                  alt="Technam Marketing ảnh 7"
                  className="w-full h-full l:h-[675px] max-w-[750px]"
                />
              </div>
              {/* <div className="absolute right-1/2   t:right-[-100px] t:bottom-[-100px] flex justify-end items-end">
                <div className="w-[500px] h-[500px] blur_custom1 "></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default Section2;
