"use client";

/* eslint-disable @next/next/no-img-element */

import React from "react";
import form_bg_ads from "@/assets/form_bg_ads.png";
import MainSection from "@/components/common/MainSection";
import img_banner from "@/assets/img-banner.png.png";
import img_tsnc1 from "@/assets/img-tsnc1.png.png";
import gb_ov2 from "@/assets/gbov2.png";
import img_lccdn1 from "@/assets/img-lccdn1.png.png";
import img_lccdn2 from "@/assets/img-lccdn2.png.png";
import img_lccdn3 from "@/assets/img-lccdn3.png.png";
import img_lccdn11 from "@/assets/img-lccdn11.png.png";
import img_lccdn4 from "@/assets/img-lccdn4.png.png";
import img_lccdn5 from "@/assets/img-lccdn5.png.png";
import Send from "@/icons/Send";
import Touch from "@/icons/Touch";
import useBreakpoint from "@/hooks/useBreakpoint";
import LeftArrow from "@/icons/LeftArrow";
import RightArrow from "@/icons/RightArrow";
import ButtonCustom from "@/components/ButtonCustom";
import bg_form_ads_2 from "@/assets/bg-form-ads-2.png";
const FormOfAds = () => {
  const breakpoint = useBreakpoint();
  return (
    <>
      {/* Section1 */}

      <div
        className="w-full"
        style={{
          background:
            breakpoint === "desktop"
              ? `url(${form_bg_ads.src}) lightgray -30.033px 0px / 124.148% 100% no-repeat`
              : "unset",
        }}
      >
        <MainSection>
          <div className="grid grid-cols-1 t:grid-cols-2 gap-4 min-h-[724px]">
            <div className="flex justify-center items-center">
              <div className="flex flex-col gap-4">
                <p className="text-troke-color text-[32px] t:text-[48px]">
                  TĂNG
                </p>
                <h4 className="text-color/1 text-[38px] t:text-[58px] font-500 leading-40 mb-3">
                  MỨC ĐỘ NHẬN BIẾT
                </h4>
                <h3 className="text-color/1 text-[54px] t:text-[74px] font-500 leading-40 mb-4">
                  THƯƠNG HIỆU
                </h3>
                <p className="text-[#000] text-[16px] leading-21 font-400">
                  Thông thường khi doanh nghiệp mới tạo lập, mục tiêu hàng đầu
                  chính là đưa thương hiệu quảng bá tới cho khách hàng.
                </p>
                <p className="text-[#000] text-[16px] leading-21 font-400 mb-6">
                  Mức độ nhận biết: Bao gồm các mục tiêu tạo dựng mối quan tâm
                  tới sản phẩm hoặc dịch vụ của bạn. Nâng cao nhận thức về
                  thương hiệu là giới thiệu với mọi người điều tạo nên giá trị
                  cho doanh nghiệp của bạn.
                </p>
                <div
                  className="max-w-[461px] w-full min-h-[68px] flex justify-center items-start flex-shrink-0 rounded-[15px] p-4 mb-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #0265FF 0%, #208CFF 100%)",
                  }}
                >
                  <div className="flex gap-3 w-full h-full items-center">
                    <div>
                      <Send />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#fff] text-[14px] leading-17 font-400">
                        Mục tiêu nhận biết thương hiệu
                      </p>
                      <p className="text-[#fff] text-[14px] leading-17 font-400">
                        Tăng mức độ nhận biết cho doanh nghiệp, dịch vụ.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="max-w-[461px] w-full min-h-[68px] flex justify-center items-start flex-shrink-0 rounded-[15px] p-4"
                  style={{
                    background:
                      "linear-gradient(90deg, #0265FF 0%, #208CFF 100%)",
                  }}
                >
                  <div className="flex gap-3 w-full h-full items-center">
                    <div>
                      <Touch />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#fff] text-[14px] leading-17 font-400">
                        Mục tiêu số người tiếp cận
                      </p>
                      <p className="text-[#fff] text-[14px] leading-17 font-400">
                        Hiển thị quảng cáo cho nhóm đối tượng mục tiêu của bạn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block l:hidden">
              <img
                src={img_banner.src}
                className="w-full h-full"
                alt="Hình thức quảng cáo facebook"
              />
            </div>
          </div>
        </MainSection>
      </div>

      {/* Section2 */}

      <MainSection>
        <div className="flex justify-center items-center flex-col mb-6 pb-5">
          <h3 className="text-color/1 text-[36px] font-600 leading-48 uppercase text-center mb-4">
            Tăng cân nhắc với thương hiệu
          </h3>
          <p className="text-[#000] text-[20px] font-500 leading-24 text-center">
            Các mục tiêu cân nhắc thương hiệu bao gồm các mục tiêu làm cho mọi
            người nghĩ tới và tìm kiếm nhiều thông tin hơn về doanh nghiệp của
            bạn.
            <br />
            Khi bạn muốn khách hàng cân nhắc, tương tác với thương hiệu thì bạn
            có thể thiết lập mục tiêu sau đây:
          </p>
        </div>
        <div className="grid grid-cols-3 items-end mb-6">
          <div className="max-w-[506px] w-full h-[1px] bg-color/1"></div>
          <div className="flex-1 flex justify-center items-center">
            <div className="max-w-[400px] w-full">
              <img
                src={img_tsnc1.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="max-w-[506px] w-full h-[1px] bg-color/1"></div>
        </div>
        <div className="grid t:grid-cols-3 items-end mb-6 gap-4">
          <div className="flex flex-col gap-4 w-full items-start  justify-between h-full">
            <div className="max-w-[600px] w-full">
              <h5 className=" text-[#000] font-600 text-[16px] text-right">
                Tăng lượng truy cập
              </h5>
              <p className="text-right leading-21 text-[14px]">
                Đây là cách thức phù hợp để giới thiệu sản phẩm, dịch vụ tới
                khách hàng. Tăng traffic cho website, fanpage và tăng like cho
                fanpage.
              </p>
            </div>
            <div className="max-w-[600px] w-full">
              <h5 className=" text-[#000] font-600 text-[16px] text-right">
                Tăng tương tác
              </h5>
              <p className="text-right leading-21 text-[14px]">
                Quảng cáo sản phẩm tới khách hàng mục tiêu thông qua bài viết.
                Tương tác bao gồm lượt thích, bình luận, chia sẻ và ưu đãi từ
                trang của bạn.
              </p>
            </div>
            <div className="max-w-[600px] w-full">
              <h5 className=" text-[#000] font-600 text-[16px] text-right">
                Tăng lượt cài đặt ứng dụng
              </h5>
              <p className="text-right leading-21 text-[14px]">
                Chuyển người dùng đến cửa hàng tải ứng dụng của doanh nghiệp
                bạn. Thu hút người dùng qua các hành động như (cài đặt, sử
                dụng).
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-14 w-full items-end justify-between">
            <div className="max-w-[385px] mx-auto w-full h-[103px] flex justify-center items-center rounded-20 border border-color/1 bg-custom-main-7">
              <span className="text-[#fff] text-[18px] font-500 uppercase">
                Mục tiêu chuyển đổi
              </span>
            </div>
            <div className="max-w-[385px] mx-auto w-full h-[103px] flex justify-center items-center rounded-20 border border-color/1 bg-custom-main-7">
              <span className="text-[#fff] text-[18px] font-500 uppercase">
                Tăng doanh số
              </span>
            </div>
            <div className="max-w-[385px] mx-auto w-full h-[103px] flex justify-center items-center rounded-20 border border-color/1 bg-custom-main-7">
              <span className="text-[#fff] text-[18px] font-500 uppercase">
                LƯU LƯỢNG KHÁCH ĐẾN
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full items-start  justify-between h-full">
            <div className="max-w-[600px] w-full">
              <h5 className=" text-[#000] font-600 text-[16px] text-right">
                Tăng lượt xem video
              </h5>
              <p className="text-right leading-21 text-[14px]">
                Sử dụng khi doanh nghiệp muốn quảng cáo sản phẩm, thương hiệu
                thông qua video, thu hút khách hàng tương tác nhiều hơn.
              </p>
            </div>
            <div className="max-w-[600px] w-full">
              <h5 className=" text-[#000] font-600 text-[16px] text-right">
                Tìm kiếm khách hàng tiềm năng
              </h5>
              <p className="text-right leading-21 text-[14px]">
                Tạo quảng cáo để thu thập thông tin từ những người quan tâm đến
                sản phẩm, đăng ký nhận bản tin,...
              </p>
            </div>
            <div className="max-w-[600px] w-full">
              <h5 className=" text-[#000] font-600 text-[16px] text-right">
                Tăng lượt messenger đổ về
              </h5>
              <p className="text-right leading-21 text-[14px]">
                Kết nối với mọi người trên Facebook, giao tiếp với khách hàng
                sẵn có hoặc tiềm năng để khuyến khích họ quan tâm đến doanh
                nghiệp.
              </p>
            </div>
          </div>
        </div>
      </MainSection>

      {/* Section3 */}

      <MainSection>
        <div className="w-full text-center flex justify-center flex-col items-center mb-5 py-5">
          <h3 className="typography-1 mb-3 !text-[28px] !t:text-[40px]">
            TechNam Marketing sẽ giúp bạn thực hiện
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
                    Thiết kế và chỉnh sửa Fanpage
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Xác định và xây dựng thương hiệu hoặc chủ đề của Fanpage,
                    cung cấp các thông tin cần thiết về cửa hàng.
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
                    Xây dựng nội dung thu hút
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Đăng bài viết đúng chuẩn và tối ưu trên Fanpage, tối ưu
                    nội dung (content), video. Tăng lượt tương tác và tiếp cận
                    trên Fanpage hiệu quả, thu hút nhiều khách hàng.
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
                    Nhắm đúng đối tượng mục tiêu quảng cáo
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Khi nhắm đúng đối tượng sẽ tạo hiệu quả cho quảng cáo và
                    mang lại doanh thu tốt cho cửa hàng
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
                    Xây dựng và đo lường, phân loại khách hàng - tương tác trên
                    Fanpage - Website
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Việc phân tích và khảo sát thị trường, khách hàng mục tiêu
                    giúp doanh nghiệp có thể nhìn nhận một cách sâu sắc khi xây
                    dựng các chiến lược cho sản phẩm.
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
                    Tối ưu quảng cáo Facebook tự động, thông minh
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Đánh giá và quản lý quảng cáo
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
                    Báo cáo trực tiếp từ tài khoản Facebook
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
                <LeftArrow />
              </div>
              <div className="w-9 h-9 bg-[#fff] rounded-[50%] flex justify-center items-center">
                <RightArrow />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <ButtonCustom title="Gặp chuyên gia của chúng tôi" />
        </div>
      </MainSection>

      {/* Section 4 */}
      <div
        className="w-full bg-no-repeat bg-cover min-h-[673px] mb-6 pb-6"
        style={{
          backgroundImage: `url(${bg_form_ads_2.src})`,
        }}
      >
        <MainSection>
          <div className="flex justify-center items-center ">
            <h3 className="text-color/1 font-600 text-[36px] leading-48 uppercase text-center">
              Các vị trí quảng cáo trên Facebook
            </h3>
          </div>
          <div className="grid grid-cols-2 t:grid-cols-3 l:grid-cols-6 gap-4">
            <div className="max-w-[254px] mx-auto h-[388px] rounded-10 shadow-custom-1 w-full overflow-hidden bg-[#fff]">
              <div
                className="w-full h-[73px] flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(175deg, #02DEFF 8.05%, #0064FF 92.04%, #013D99 120.04%), #005DE8",
                }}
              >
                <span className="text-[#fff] text-[18px] font-600 uppercase text-center">
                  Quảng cáo tăng like
                </span>
              </div>
            </div>
            <div className="max-w-[254px] mx-auto h-[388px] rounded-10 shadow-custom-1 w-full overflow-hidden bg-[#fff]">
              <div
                className="w-full h-[73px] flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(175deg, #02DEFF 8.05%, #0064FF 92.04%, #013D99 120.04%), #005DE8",
                }}
              >
                <span className="text-[#fff] text-[18px] font-600 uppercase  text-center">
                  Quảng cáo Click Web trên bản tin
                </span>
              </div>
            </div>
            <div className="max-w-[254px] mx-auto h-[388px] rounded-10 shadow-custom-1 w-full overflow-hidden bg-[#fff]">
              <div
                className="w-full h-[73px] flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(175deg, #02DEFF 8.05%, #0064FF 92.04%, #013D99 120.04%), #005DE8",
                }}
              >
                <span className="text-[#fff] text-[18px] font-600 uppercase text-center">
                  Quảng cáo link vào website
                </span>
              </div>
            </div>
            <div className="max-w-[254px] mx-auto h-[388px] rounded-10 shadow-custom-1 w-full overflow-hidden bg-[#fff]">
              <div
                className="w-full h-[73px] flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(175deg, #02DEFF 8.05%, #0064FF 92.04%, #013D99 120.04%), #005DE8",
                }}
              >
                <span className="text-[#fff] text-[18px] font-600 uppercase text-center">
                  bản tin
                </span>
              </div>
            </div>
            <div className="max-w-[254px] mx-auto h-[388px] rounded-10 shadow-custom-1 w-full overflow-hidden bg-[#fff]">
              <div
                className="w-full h-[73px] flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(175deg, #02DEFF 8.05%, #0064FF 92.04%, #013D99 120.04%), #005DE8",
                }}
              >
                <span className="text-[#fff] text-[18px] font-600 uppercase text-center">
                  Quảng cáo bài viết
                </span>
              </div>
            </div>
            <div className="max-w-[254px] mx-auto h-[388px] rounded-10 shadow-custom-1 w-full overflow-hidden bg-[#fff]">
              <div
                className="w-full h-[73px] flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(175deg, #02DEFF 8.05%, #0064FF 92.04%, #013D99 120.04%), #005DE8",
                }}
              >
                <span className="text-[#fff] text-[18px] font-600 uppercase text-center">
                  Quảng cáo lead ads
                </span>
              </div>
            </div>
          </div>
        </MainSection>
      </div>

      {/* Section 5 */}

      <MainSection>
        <h2 className="text-center text-gradient-1 font-700 text-[32px] t:text-[64px] uppercase leading-48 mb-4">
          TECHNAM marketing
        </h2>
        <h3 className="text-center text-color/1 text-[24px] t:text-[36px] font-600 leading-48 uppercase mb-4">
          {" "}
          Tư vấn và triển khai một GIẢI PHÁP BÁN HÀNG HOÀN THIỆN trên Facebook:
        </h3>
        <p className="text-center text-[#0D100C] text-[18px]  t:text-[24px]">Từ quảng cáo bài post, website, video tăng like và tiếp thị lại. Điều chỉnh chiến thuật quảng cáo Facebook linh động, mạng lại hiệu quả bán hàng và thương hiệu cao nhất.</p>
        <div className="flex justify-center items-center mt-4">
                <ButtonCustom title="báo giá ngay" classCustom="rounded-[30px]"/>
        </div>
      </MainSection>
    </>
  );
};

export default FormOfAds;
