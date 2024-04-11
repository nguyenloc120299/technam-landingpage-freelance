/* eslint-disable @next/next/no-img-element */
import MainSection from "@/components/common/MainSection";
import gb_ov2 from "@/assets/gbov2.png";
import img_lccdn1 from "@/assets/img-lccdn1.png.png";
import img_lccdn2 from "@/assets/img-lccdn2.png.png";
import img_lccdn3 from "@/assets/img-lccdn3.png.png";
import img_lccdn11 from "@/assets/img-lccdn11.png.png";
import img_lccdn4 from "@/assets/img-lccdn4.png.png";
import img_lccdn5 from "@/assets/img-lccdn5.png.png";
import React from "react";

const Section2 = () => {
  return (
    <MainSection>
      <div className="w-full text-center flex justify-center flex-col items-center mb-5 py-5">
        <h3 className="typography-1 mb-3 !text-[28px] !t:text-[40px]">
          Các bước cơ bản cần có để triển khai chiến dịch Facebook hiệu quả
        </h3>
        <p className="max-w-[900px] text-center text-[#212121] text-[20px]  t:text-[32px]  font-700 leading-40">
          Để tạo được một quảng cáo Facebook hiệu quả, bạn cần tuân thủ theo 5
          bước dưới đây
        </p>
      </div>
      <div className="grid grid-cols-1 t:grid-cols-2 gap-4 mb-4 t:mb-10 t:pb-10">
        <div className="flex flex-col gap-4">
          <img
            src={gb_ov2.src}
            alt="Các bước cơ bản cần có để triển khai chiến dịch Facebook hiệu quả"
            className="w-full h-full object-contain"
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
        <div className="flex flex-col justify-between items-center gap-4">
          <div className="shadow-custom-2 rounded-20 max-w-[594px] w-full p-[22px] flex justify-center items-center">
            <div className="flex gap-4 items-center w-full">
              <img
                src={img_lccdn1.src}
                alt="Các bước cơ bản cần có để triển khai chiến dịch Facebook hiệu quả"
              />
              <div className="h-[126px] flex flex-col flex-1 gap-2">
                <h5 className="text-color/1 font-700 leading-21 uppercase">
                  Bước 1
                </h5>
                <p className="text-6C6C6C leading-21 text-[16px]">
                  . Xác định mục tiêu cho kênh Facebook
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-custom-2 rounded-20 max-w-[594px] w-full p-[22px] flex justify-center items-center border-[2px] border-color/1">
            <div className="flex gap-4 items-center w-full">
              <img
                src={img_lccdn2.src}
                alt="Các bước cơ bản cần có để triển khai chiến dịch Facebook hiệu quả"
              />
              <div className="h-[126px] flex flex-col flex-1 gap-2">
                <h5 className="text-color/1 font-700 leading-21 uppercase">
                  Bước 2
                </h5>
                <p className="text-6C6C6C leading-21 text-[16px]">
                  . Nhắm target đối tượng
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-custom-2 rounded-20 max-w-[594px] w-full p-[22px] flex justify-center items-center border-[2px] border-color/1">
            <div className="flex gap-4 items-center w-full">
              <img
                src={img_lccdn3.src}
                alt="Các bước cơ bản cần có để triển khai chiến dịch Facebook hiệu quả"
              />
              <div className="h-[126px] flex flex-col flex-1 gap-2">
                <h5 className="text-color/1 font-700 leading-21 uppercase">
                  Bước 3
                </h5>
                <p className="text-6C6C6C leading-21 text-[16px]">
                  . Lên kế hoạch nội dung
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 t:grid-cols-2 gap-4 mb-10 pb-10">
        <div className="flex flex-col  items-center gap-4">
          <div className="shadow-custom-2 rounded-20 max-w-[594px] w-full p-[22px] flex justify-center items-center ">
            <div className="flex gap-4 items-center w-full">
              <img
                src={img_lccdn4.src}
                alt="Các bước cơ bản cần có để triển khai chiến dịch Facebook hiệu quả"
              />
              <div className="h-[126px] flex flex-col flex-1 gap-2">
                <h5 className="text-color/1 font-700 leading-21 uppercase">
                  Bước 4
                </h5>
                <p className="text-6C6C6C leading-21 text-[16px]">
                  . Thiết lập ngân sách quảng cáo
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-custom-2 rounded-20 max-w-[594px] w-full p-[22px] flex justify-center items-center border-[2px] border-color/1">
            <div className="flex gap-4 items-center w-full">
              <img
                src={img_lccdn5.src}
                alt="Các bước cơ bản cần có để triển khai chiến dịch Facebook hiệu quả"
              />
              <div className="h-[126px] flex flex-col flex-1 gap-2">
                <h5 className="text-color/1 font-700 leading-21 uppercase">
                  Bước 5
                </h5>
                <p className="text-6C6C6C leading-21 text-[16px]">
                  . Đánh giá và quản lý quảng cáo
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img
            src={img_lccdn11.src}
            alt="Các bước cơ bản cần có để triển khai chiến dịch Facebook hiệu quả"
            className="w-full h-full object-contain"
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

      <div className="flex justify-center items-center w-full">
        <button className="t:min-w-[288px]  h-[47px] p-[13px] flex justify-center items-center rounded-8 bg-custom-main-4 shadow-custom-1">
          <span className="text-[#fff] font-700 text-[16px] leading-21 uppercase text-center">
            Gặp chuyên gia của chúng tôi
          </span>
        </button>
      </div>
    </MainSection>
  );
};

export default Section2;
