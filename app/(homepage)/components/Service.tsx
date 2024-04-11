/* eslint-disable @next/next/no-img-element */
import React from "react";
import image_3 from "@/assets/home3.png";
import MainSection from "@/components/common/MainSection";
import Link from "next/link";
const Service = () => {
  return (
    <MainSection className="bg-custom-main-1">
      <div className="grid grid-cols-1 t:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <div className="flex-1">
            <div className="pb-[74px]">
              <h4 className="text-[#FFF] text-[30px] italic font-[500]">
                Dịch vụ
              </h4>
              <h3 className="text-[#FFF] text-[40px]   d:text-[48px] ">
                TECHNAM MARKETING
              </h3>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="20"
                  viewBox="0 0 37 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_634)">
                    <path
                      d="M34.2038 8.71094H0.160004V10.2584H34.2038V8.71094Z"
                      fill="white"
                    />
                    <path
                      d="M30.6795 6.01783C28.4228 3.99584 26.8108 2.2627 26.8108 2.2627H25.8437C26.9373 4.05456 28.1209 5.78993 29.3899 7.46212L31.0018 9.48411L29.3899 11.5061C28.1209 13.1783 26.9373 14.9137 25.8438 16.7055H26.8109C26.8109 16.7055 28.4229 14.9724 30.6796 12.9504C32.2317 11.4758 34.1092 10.3873 36.1601 9.77297V9.19526C34.1092 8.5809 32.2317 7.4924 30.6795 6.01783Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_634">
                      <rect
                        width="36"
                        height="19"
                        fill="white"
                        transform="translate(0.160004 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <div className="text-[#fff] text-[18px]  d:text-[27px] leading-[32px] tracking-[-0.54px]">
                  MARKETING - QUẢNG CÁO ĐA NỀN TẢNG
                </div>
                <div className="text-[#fff]  text-[18px]  d:text-[27px] leading-[32px] tracking-[-0.54px]">
                  XÂY DỰNG HỆ THỐNG SOCIAL MEDIA
                </div>
                <div className="text-[#fff]  text-[18px]  d:text-[27px] leading-[32px] tracking-[-0.54px]">
                  THIẾT KẾ WEBSITE - APP - LANDING PAGE
                </div>
                <div className="text-[#fff]  text-[18px]  d:text-[27px] leading-[32px] tracking-[-0.54px]">
                  TRUYỀN THÔNG MARKETING
                </div>
                <div className="flex w-full t:gap-10 items-center">
                  <div className="  text-[#fff]  text-[18px]  d:text-[27px] leading-[32px] tracking-[-0.54px]">
                    TỔ CHỨC SỰ KIỆN
                  </div>
                  <div className="w-[50px] h-[18px] border border-[#fff] text-[10px] text-center rounded-[10px] text-[#fff] text-shadow font-[500]">
                    New
                  </div>
                </div>
                <div className="pt-[54px]">
                  <Link href={"/service-active"}>
                    <div className="max-w-[324px] h-[65px] p-3 flex justify-center items-center rounded-[50px] border-[2px] border-[#fff] bg-custom-main-2 shadow-custom-1">
                      <span className="text-[#fff] text-center font-[700] ">
                        TÌM HIỂU THÊM
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between t:px-4 gap-2 my-5 flex-wrap t:flex-nowrap">
            <div className="h-[30px]  d:h-[40px] w-[1px] bg-[#fff] hidden t:block"></div>
            <div className="text-[#fff] text-[15px]  d:text-[20px] font-[500] leading-[17px] uppercase">
              META ADS
            </div>
            <div className="text-[#fff] text-[15px]  d:text-[20px] font-[500] leading-[17px] uppercase">
              GOOGLE ADS
            </div>
            <div className="text-[#fff] text-[15px]  d:text-[20px] font-[500] leading-[17px] uppercase">
              TIKTOK ADS
            </div>
            <div className="text-[#fff] text-[15px]  d:text-[20px] font-[500] leading-[17px] uppercase">
              ZALO ADS
            </div>
            <div className="text-[#fff] text-[15px]  d:text-[20px] font-[500] leading-[17px] uppercase">
              E-cOM
            </div>
            <div className="h-[30px]  d:h-[40px] w-[1px] bg-[#fff] hidden t:block"></div>
          </div>
        </div>
        <div>
          <img src={image_3.src} alt="TechNam marketing hình ảnh home 3" />
        </div>
      </div>
    </MainSection>
  );
};

export default Service;
