/* eslint-disable @next/next/no-img-element */
import MainSection from "@/components/common/MainSection";
import home_1 from "@/assets/home_1.png";
import home_2 from "@/assets/home5.jpg";
import home_4 from "@/assets/home4.jpg";
import home_5 from "@/assets/home6.jpg";
import React from "react";

const OutstandingProject = () => {
  return (
    <MainSection>
      <div className="flex flex-col">
        <div className="relative max-w-[600px] pb-6">
          <h3 className="text-[#0265FF] text-[45px] t:text-[75px] font-[500] leading-6 t:leading-[80px] ">
            Dự án phát triển nổi bật{" "}
            <span className="text-[110px] leading-[0] relative bottom-3 ">.</span>
          </h3>
        </div>

        <div
          className="flex-1 relative my-5 d:rotate-[-7deg] py-5"
        >
          <div className="overflow-hidden w-full grid grid-cols-2 l:grid-cols-4 items-center gap-2 flex-wrap">
            <div className="w-full t:w-[500px] t:h-[200px]">
              <img
                src={home_1.src}
                alt="Technam marketing ảnh 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full t:w-[500px] t:h-[300px]">
              <img
                src={home_2.src}
                alt="Technam marketing ảnh 3"
                className="w-full h-full"
              />
            </div>
            <div className="w-full t:w-[500px] t:h-[300px]">
              <img
                src={home_4.src}
                alt="Technam marketing ảnh 4"
                className="w-full h-full"
              />
            </div>
            <div className="w-full t:w-[500px] t:h-[300px]">
              <img
                src={home_5.src}
                alt="Technam marketing ảnh 5"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center pt-6">
          <div className="flex items-center gap-14">
            <div className="flex gap-5">
              <div className="w-[1px] h-[50px] bg-[#0265FF]"></div>
              <div className="flex items-center gap-1 t:gap-3">
                <div className="w-[15px] h-[15px] bg-[#0265FF] rounded-full"></div>
                <div className="flex flex-col gap-3">
                  <div className="text-[#0265FF] font-[600] leading-[27px] text-[35px] t:text-[60px]">
                    100
                  </div>
                  <div className="text-[#0265FF]  t:text-[18px] font-[400] leading-[27px]">
                    Hoàn thành
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-[1px] h-[50px] bg-[#0265FF]"></div>
              <div className="flex items-center gap-3">
                <div className="w-[15px] h-[15px] bg-[#0265FF] rounded-full"></div>
                <div className="flex flex-col gap-1 t:gap-3">
                  <div className="text-[#0265FF] font-[600] leading-[27px] text-[35px] t:text-[60px]">
                    99
                  </div>
                  <div className="text-[#0265FF] t:text-[18px] font-[400] leading-[27px]">
                    Hài lòng
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default OutstandingProject;
