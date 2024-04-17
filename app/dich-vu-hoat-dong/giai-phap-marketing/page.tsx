/* eslint-disable @next/next/no-img-element */
import React from "react";
import _1 from "@/assets/marketing_solution_section.png";
import img_lccdn1 from "@/assets/img-lccdn1.png.png";
import img_lccdn2 from "@/assets/img-lccdn2.png.png";
import img_lccdn3 from "@/assets/img-lccdn3.png.png";
import img_lccdn11 from "@/assets/img-lccdn11.png.png";
import img_lccdn4 from "@/assets/img-lccdn4.png.png";
import img_lccdn5 from "@/assets/img-lccdn5.png.png";
import standard_image_01 from "@/assets/standard-image-01.png.png";
import standard_image_02 from "@/assets/standard-image-02.png.png";
import standard_image_03 from "@/assets/standard-image-03.png.png";
import group_14 from "@/assets/group_14.png";
import gb_ov2 from "@/assets/gbov2.png";
import LeftArrow from "@/icons/LeftArrow";
import RightArrow from "@/icons/RightArrow";
import MainSection from "@/components/common/MainSection";
const MarketingSolution = () => {
  return (
    <>
      {/* Section1 */}

      <div className="w-full h-full">
        <img src={_1.src} alt="" />
      </div>

      {/* Section2 */}
      <MainSection>
        <div className="w-full text-center flex justify-center flex-col items-center mb-5 py-5">
          <h3 className="typography-1 mb-3 !text-[28px] !t:text-[40px]">
            TechNam Marketing sẽ giúp gì cho <br /> chodoanh nghiệp của bạn?
          </h3>
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
                <div className="min-h-[126px] flex flex-col flex-1 gap-2">
                  <h5 className="text-color/1 font-700 leading-21 uppercase">
                    Tăng trưởng bền vững
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Giúp doanh nghiệp tăng trưởng bền vững nhờ chiến lược đúng
                    đắn từ đầu.
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
                <div className="min-h-[126px] flex flex-col flex-1 gap-2">
                  <h5 className="text-color/1 font-700 leading-21 uppercase">
                    Tạo sự ủng hộ
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Giúp khách hàng tin tưởng thương hiệu và ca ngợi sản phẩm
                    dịch vụ doanh nghiệp.
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
                <div className="min-h-[126px] flex flex-col flex-1 gap-2">
                  <h5 className="text-color/1 font-700 leading-21 uppercase">
                    Gắn kết với khách hàng
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Giúp thương hiệu có giá trị cao hơn, sở hữu vị thế cao hơn
                    trong ngành.
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
                <div className="min-h-[126px] flex flex-col flex-1 gap-2">
                  <h5 className="text-color/1 font-700 leading-21 uppercase">
                    Tăng giá trị thương hiệu
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Giúp thương hiệu có giá trị cao hơn, sở hữu vị thế cao hơn
                    trong ngành.
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
                <div className="min-h-[126px] flex flex-col flex-1 gap-2">
                  <h5 className="text-color/1 font-700 leading-21 uppercase">
                    Đồng nhất chiến lược
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Đồng bộ hóa chiến lược thương hiệu với chiến lược kinh
                    doanh.
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
                <div className="min-h-[126px] flex flex-col flex-1 gap-2">
                  <h5 className="text-color/1 font-700 leading-21 uppercase">
                    Hiệu quả lâu dài
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Chiến lược mang hiệu quả lâu dài, kim chỉ nam cho hoạt
                    động xây dựng thương hiệu.
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
                <LeftArrow />
              </div>
              <div className="w-9 h-9 bg-[#fff] rounded-[50%] flex justify-center items-center">
                <RightArrow />
              </div>
            </div>
          </div>
        </div>
      </MainSection>

      {/* Section3 */}

      <div className="w-full bg-custom-main-1">
        <MainSection>
          <h3 className="text-[#fff] font-700 text-[32px] t:text-[40px]  leading-52 uppercase text-center">
            Định hướng sản xuất truyền thông
          </h3>
          <div className="flex flex-col t:flex-row my-6 py-6 gap-6">
            <div className="flex-1 flex flex-col  justify-center t:gap-20 items-start">
              <div>
                <h4 className="text-[#fff] font-600 leading-48 text-[28px] t:text-[32px] mb-4">
                  Tư vấn & định hướng sản xuất
                  <br />
                  hình ảnh truyền thông
                </h4>
                <u className="text-[#fff] text-[18px] leading-24 no-underline">
                  <li className="border-none">
                    Nghiên cứu & phân tích thị trường
                  </li>
                  <li>Xây dựng direction kênh</li>
                  <li>Lên detail tuần</li>
                  <li>Tối ưu nội dung</li>
                  <li>Xây dựng direction kênh</li>
                </u>
              </div>
              <div>
                <h4 className="text-[#fff] font-600 leading-48 text-[28px] t:text-[32px] mb-4">
                Quay & dựng
                </h4>
                <u className="text-[#fff] text-[18px] leading-24 no-underline">
                  <li className="border-none">
                  Xây dựng kế hoạch quay dựng 
                  </li>
                  <li>Set up bối cảnh hậu trường</li>
                  <li>Điều phối và triển khai ghi hình</li>
                  <li>Edit & hoàn thiện video</li>
            
                </u>
              </div>
            </div>
            <div
              className="min-h-[1155px] w-[100px] !bg-cover  hidden l:block"
              style={{
                background: `url(${group_14.src}) no-repeat`,
              }}
            ></div>
            <div className="flex-1 flex flex-col justify-between items-center gap-6">
              <img src={standard_image_01.src} alt="" />
              <img src={standard_image_02.src} alt="" />
              <img src={standard_image_03.src} alt="" />
            </div>
          </div>
        </MainSection>
      </div>
    </>
  );
};

export default MarketingSolution;
