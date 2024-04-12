/* eslint-disable @next/next/no-img-element */
import MainSection from "@/components/common/MainSection";

import React from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

const FaceBookOverview = () => {
  return (
    <>
      <MainSection>
        <div className="w-full text-center mb-5">
          <h3 className="typography-1 mb-3">
            Facebook có phải là nền tảng chạy quảng cáo tốt nhất?
          </h3>
          <h5 className="text-[#000] text-[18px] leading-24 font-400">
            {`Facebook tạo không gian kết nối hàng triệu người trên thế giới.Cơ sở
          người dùng khổng lồ là một trong những lý do chính khiến các doanh
          nghiệp đã, đang và tiếp tục chọn Facebook là nền tảng quảng cáo chính
          hiện nay. Facebook Ads chính là một công cụ hữu hiệu để tiếp cận đối
          tượng rộng, tỉ lệ chuyển đổi vào và tạo ra khách hàng tiềm năng mới,
          nâng cao doanh thu đột phá.`}
          </h5>
        </div>
        <div className="flex justify-center items-center">
          <button className="min-w-[130px] h-[47px] p-[13px] flex justify-center items-center rounded-8 bg-custom-main-4 shadow-custom-1">
            <span className="text-[#fff] font-700 text-[16px] leading-21 uppercase text-center">
              liên hệ ngay
            </span>
          </button>
        </div>
      </MainSection>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};

export default FaceBookOverview;
