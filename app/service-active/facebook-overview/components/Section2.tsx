/* eslint-disable @next/next/no-img-element */
import MainSection from "@/components/common/MainSection";
import gb_ov2 from "@/assets/gbov2.png";
import React from "react";

const Section2 = () => {
  return (
    <MainSection>
      <div className="w-full text-center flex justify-center flex-col items-center mb-5 py-5">
        <h3 className="typography-1 mb-3 !text-[40px]">
          Các bước cơ bản cần có để triển khai chiến dịch Facebook hiệu quả
        </h3>
        <p className="max-w-[900px] text-center text-[#212121] text-[32px]  font-700 leading-40">
          Để tạo được một quảng cáo Facebook hiệu quả, bạn cần tuân thủ theo 5
          bước dưới đây
        </p>
      </div>
      <div className="grid grid-cols-1 t:grid-cols-2">
        <div className="flex flex-col gap-4">
          <img
            src={gb_ov2.src}
            alt="Các bước cơ bản cần có để triển khai chiến dịch Facebook hiệu quả"
            className="w-full h-full object-cover"
          />
          <div className="flex w-full justify-center items-center gap-2">
            <div className="w-9 h-9 bg-[#fff]  rounded-[50%] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#742476]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </div>
            <div className="w-9 h-9 bg-[#fff] rounded-[50%] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-[#742476]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default Section2;
