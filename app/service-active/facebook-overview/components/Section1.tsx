/* eslint-disable @next/next/no-img-element */
import { dataFbAds } from "@/contants/contans";
import fb_ov1 from "@/assets/fb-ov1.png";
import React from "react";

const Section1 = () => {
  return (
    <div className="bg-custom-main-2 w-full p-4 t:p-[42px] l:p-[100px]">
      <div className="w-full text-center pb-10">
        <h4 className="text-[#fff] text-[28px] t:text-[36px] font-700 leading-54 uppercase text-center">
          Facebook Ads trao cho bạn điều gì?
        </h4>
      </div>
      <div className="grid grid-cols-1 t:grid-cols-2 ">
        <div className="w-full h-full  flex justify-end flex-col">
          <img
            src={fb_ov1.src}
            alt=" Facebook Ads Techname"
            className="w-full h-full object-cover"
          />
          <div className="flex w-full justify-end items-center gap-2">
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
        <div className="flex items-center">
          <div className="flex flex-col justify-between items-start pb-10 gap-4 ">
            {dataFbAds.map((item, index) => (
              <div className="flex items-start gap-4 mb-7" key={index}>
                <div className="flex">
                  <div className="w-9 h-9 bg-[#fff] rounded-[50%] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 font-700 text-[#742476]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-[#fff] leading-24 t:text-[18px]">{item}</p>
                </div>
              </div>
            ))}
            <div className="flex justify-center items-center w-full">
              <button className="t:min-w-[288px]  h-[47px] p-[13px] flex justify-center items-center rounded-8 bg-custom-main-4 shadow-custom-1">
                <span className="text-[#fff] font-700 text-[16px] leading-21 uppercase text-center">
                  Đăng ký tư vấn
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
