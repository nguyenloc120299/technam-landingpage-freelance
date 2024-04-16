"use client";

/* eslint-disable @next/next/no-img-element */
import MainSection from "@/components/common/MainSection";
import img_allaspects1 from "@/assets/img-allaspects1.png.png";
import React, { useCallback, useRef } from "react";
import ButtonCustom from "@/components/ButtonCustom";
import _1 from "@/assets/mega-menu-new-content-1.jpg.png";
import _2 from "@/assets/mega-menu-new-content-2.jpg.png";
import _3 from "@/assets/mega-menu-new-content-27.jpg.png";
import _4 from "@/assets/mega-menu-new-content-4-1.jpg.png";
import _5 from "@/assets/mega-menu-new-content-5.jpg.png";
import _6 from "@/assets/mega-menu-new-content-6.jpg.png";
import _7 from "@/assets/link_production-content.png";
import _8 from "@/assets/mega-menu-new-content-25.jpg.png";
import _9 from "@/assets/mega-menu-new-content-6.jpg.png";
import _10 from "@/assets/banner-content-production.png";
import _11 from "@/assets/gt-1.png";
import _12 from "@/assets/gt_2.png";
import _13 from "@/assets/gt-3.png";
import _14 from "@/assets/gt-4.png";
import _bg_main from "@/assets/bg-main-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import clsx from "clsx";
import {
  contentProductionCardData,
  dataContentProductionSection4,
} from "@/contants/contans";
import useBreakpoint from "@/hooks/useBreakpoint";
import LeftArrow from "@/icons/LeftArrow";
import RightArrow from "@/icons/RightArrow";
import fram4 from "@/assets/frame_4.png";
const ContentProduction = () => {
  const breakPoint = useBreakpoint();
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, [sliderRef]);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, [sliderRef]);
  return (
    <>
      {/* Section1 */}
      <MainSection>
        <h3 className="text-color/1 font-700 text-[36px] leading-54 uppercase mb-6 text-center">
          Giải pháp tối ưu cho mọi doanh nghiệp
        </h3>
        <div className="my-6 grid grid-cols-2 t:grid-cols-5 gap-4">
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px]">
            Video ngắn quảng cáo
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px]">
            Video ngắn quảng cáo
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px]">
            Video ngắn quảng cáo
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px]">
            Video ngắn quảng cáo
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px]">
            Video ngắn quảng cáo
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px]">
            Video ngắn quảng cáo
          </div>
        </div>
        <div className="max-w-[1500px] w-full mx-auto t:px-20">
          <h4 className="text-[#212121] text-[32px] leading-30 mb-3 font-600">
            Lý do nên chọn dịch vụ sản xuất video ngắn tại TechNam Marketing
          </h4>
          <p className="text-[#212121] text-[24px] leading-30">
            - Hỗ trợ doanh nghiệp định vị thương hiệu và truyền tải thông điệp
            ấn tượng.
          </p>
          <p className="text-[#212121] text-[24px] leading-30">
            - Hỗ trợ hệ thống trang thiết bị hiện đại.
          </p>
          <p className="text-[#212121] text-[24px] leading-30">
            - Hỗ trợ lập kế hoạch, lên chiến dịch quảng cáo.
          </p>
          <p className="text-[#212121] text-[24px] leading-30">
            - Video có chất lượng tốt, hình ảnh, âm thanh và màu sắc ấn tượng
            hợp xu hướng hiện nay.
          </p>
          <p className="text-[#212121] text-[24px] leading-30">
            - Trải nghiệm dịch vụ sản xuất video trọn gói chất lượng tốt từ kịch
            bản đến quảng cáo.
          </p>
        </div>
        <div className="flex justify-center items-center my-5 py-6">
          <div className="max-w-[700px] w-full">
            <img
              src={img_allaspects1.src}
              alt="Giải pháp cho fanpage"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center items-center my-5 py-6">
          <ButtonCustom title="ĐĂNG KÝ TƯ VẤN NGAY" />
        </div>
      </MainSection>

      {/* Section2 */}
      <div className="bg-custom-main-1 min-h-[800px] flex items-center ">
        <div className="w-full">
          <h5 className="text-center font-500 text-[25px] text-[#FFFEFE] mb-3">
            Các ấn phẩm truyền thông không chỉ đơn thuần truyền tải thông tin
            hàng ngày mà còn đóng vai trò quan trọng trong quảng cáo.
          </h5>
          <h5 className="text-center font-500 text-[25px] text-[#FFFEFE] mb-3">
            Đặc biệt, với các doanh nghiệp mới, chúng trở thành công cụ quan
            trọng để tiếp cận với một lượng lớn khách hàng tiềm năng.
          </h5>
          <Swiper
            ref={sliderRef}
            modules={[Navigation]}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            className="w-full my-14"
            spaceBetween={50}
            loop
            slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            {contentProductionCardData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-[278px] min-h-[388px] rounded-8 bg-custom-main-4 shadow-custom-3 p-[15px] flex flex-col mx-auto">
                  <div
                    className={clsx("max-w-[248px] mx-auto h-[178px] w-full")}
                    style={{
                      background: `url(${item.img.src}) lightgray -30.033px 0px / 124.148% 100% no-repeat`,
                    }}
                  ></div>
                  <div className="flex-1 mt-5">
                    <h5 className="text-[#fff] text-[15px] leading-17 font-500 mb-6">
                      {item.title}
                    </h5>
                  </div>
                  <div className="text-[#fff] text-[16px] leading-24 font-400">
                    Xem thêm{" "}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center items-center gap-4">
            <div
              className="w-9 h-9 cursor-pointer bg-[#fff]  rounded-[50%] flex justify-center items-center"
              onClick={handlePrev}
            >
              <LeftArrow />
            </div>
            <div
              className="cursor-pointer w-9 h-9 bg-[#fff] rounded-[50%] flex justify-center items-center"
              onClick={handleNext}
            >
              <RightArrow />
            </div>
          </div>
        </div>
      </div>

      {/* Section3 */}

      <MainSection>
        <h3 className="text-color/1 font-700 text-[36px] leading-54 uppercase mb-6 text-center">
          Giải Pháp Web Marketing
        </h3>
        <div className="my-6 grid grid-cols-2 t:grid-cols-3 l:grid-cols-6 gap-4">
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px] p-2 text-center">
            Dịch vụ thiết kế website
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px] p-2 text-center">
            Dịch vụ thiết kế landing page
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px] p-2 text-center">
            Dịch vụ chăm sóc app
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px] p-2 text-center">
            Thiết kế nhận diện thương hiệu
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px] p-2 text-center">
            Dịch vụ SEO
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px] p-2 text-center">
            VPS - Hosting - Server Pro - Server Super
          </div>
        </div>

        <div className="flex justify-center items-center my-5 py-6">
          <div className=" w-full relative after-bg ">
            <img
              src={fram4.src}
              alt="Giải pháp cho fanpage"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center items-center my-5 py-6">
          <ButtonCustom title="ĐĂNG KÝ TƯ VẤN NGAY" />
        </div>
      </MainSection>

      {/* Section 4 */}

      <MainSection>
        <div className="flex justify-center items-center mb-6 pb-6">
          <h3
            className="typography-1 text-[40px]
                        font-600"
          >
            Các Hình Thức Quảng Cáo Trên Zalo Ads
          </h3>
        </div>
        <div className="grid grid-cols-2 t:grid-cols-3 gap-4">
          {dataContentProductionSection4.map((item, index) => (
            <div
              className="max-w-[350px] min-h-[411px] rounded-[62px] bg-[#fff] shadow-custom-2 flex flex-col mx-auto w-full mb-4"
              key={index}
            >
              <div className="h-[190px]">
                <div className="mt-[-10px] ml-[-10px] ">
                  <img src={item.img.src} />
                </div>
              </div>
              <div className="flex-1 flex flex-col p-5 gap-4 text-color/1 text-[20px]">
                {item.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center my-4">
          <div className="relative max-w-[325px] w-full h-[91px] flex justify-center items-center">
            <div className="max-w-[325px] w-full h-[91px] rounded-[100px] opacity-[0.2] bg-[#0265FF]  absolute top-0 left-0"></div>
            <div
              className="flex justify-center items-center gap-3 max-w-[309px] w-full h-[75px] rounded-[100px] "
              style={{
                background: "linear-gradient(270deg, #0265FF 0%, #02DEFF 100%)",
              }}
            >
              <span className="text-[#fff] text-[18px] uppercase font-600">
                Báo giá ngay
              </span>
            </div>
          </div>
        </div>
      </MainSection>

      {/* Section 5 */}
      <div
        className="t:mx-10 min-h-[538px] t:rounded-[16px] flex justify-center items-center p-4"
        style={{
          background:
            "radial-gradient(247.53% 136.87% at 0% 4.72%, #0265FF 0%, #02DEFF 70%, #0064FF 100%), linear-gradient(181deg, #02DEFF 1.66%, #0265FF 95.74%)",
        }}
      >
        <div className="w-full h-full">
          <h3 className=" text-center text-[#fff] text-[24px] font-600 uppercase leading-24">{`Truyền thông - Marketing tổng thể mang đến lợi ích "vàng" để thúc đẩy doanh số`}</h3>

          <div className="grid grid-cols-1 d:grid-cols-4 gap-4 my-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col t:flex-row gap-3">
                <div
                  className="w-[188px]  h-[142px] rounded-10"
                  style={{
                    background: `url(${_1.src}) lightgray -0.001px 0px / 100.001% 100% no-repeat`,
                  }}
                ></div>
                <div className="flex-1 flex flex-col mb-2 justify-center">
                  <h4 className="text-[#fff] text-[16px] font-600 leading-24">
                    Tiếp cận khách hàng tiềm năng
                  </h4>
                  <p className="text-[12px] text-[#fff]">
                    Các khách hàng tiềm năng có hành vi, thói quen và nhu cầu
                    liên quan đến dịch vụ, sản phẩm sẽ được các chiến dịch
                    marketing online này tiếp cận một cách chính xác, nhanh
                    chóng.
                  </p>
                </div>
              </div>
              <div className="flex flex-col t:flex-row gap-3">
                <div
                  className="w-[188px]  h-[142px] rounded-10"
                  style={{
                    background: `url(${_2.src}) lightgray -0.001px 0px / 100.001% 100% no-repeat`,
                  }}
                ></div>
                <div className="flex-1 flex flex-col mb-2 justify-center">
                  <h4 className="text-[#fff] text-[16px] font-600 leading-24">
                    Thúc đẩy và bùng nổ doanh số
                  </h4>
                  <p className="text-[12px] text-[#fff]">
                    Trong thời đại công nghệ 4.0, người người nhà nhà sử dụng
                    internet để tìm kiếm thông tin, mua bán sản phẩm,… thì đây
                    chính là giải pháp đột biến về doanh thu nhanh nhất hiện
                    nay.
                  </p>
                </div>
              </div>
              <div className="flex flex-col t:flex-row gap-3">
                <div
                  className="w-[188px]  h-[142px] rounded-10"
                  style={{
                    background: `url(${_3.src}) lightgray -0.001px 0px / 100.001% 100% no-repeat`,
                  }}
                ></div>
                <div className="flex-1 flex flex-col mb-2 justify-center">
                  <h4 className="text-[#fff] text-[16px] font-600 leading-24">
                    Tiếp cận khách hàng từ đa kênh
                  </h4>
                  <p className="text-[12px] text-[#fff]">
                    Các chiến lược marketing tổng thể sẽ được triển khai đa dạng
                    các nguồn kênh khác nhau như google, facebook, zalo,… nhằm
                    tiếp cận, thúc đẩy hành vi tương tác và hệ thống chăm sóc
                    khách hàng thông minh, tiện lợi.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col t:flex-row gap-3 bg-[#fff] rounded-20">
                <div
                  className="w-[188px]  h-[142px] rounded-10"
                  style={{
                    background: `url(${_4.src}) lightgray -0.001px 0px / 100.001% 100% no-repeat`,
                  }}
                ></div>
                <div className="flex-1 flex flex-col mb-2 justify-center">
                  <h4 className="text-color/1 text-[16px] font-600 leading-24">
                    Định vị thương hiệu
                  </h4>
                  <p className="text-[12px] text-[#000] ">
                    Định vị thương hiệu trong lòng khách hàng, tạo độ phủ sóng
                    rộng rãi. Giúp khách hàng dễ dàng nhận diện thương hiệu, tin
                    tưởng vào doanh nghiệp và thúc đẩy hành vi mua sắm.
                  </p>
                </div>
              </div>
              <div className="flex flex-col t:flex-row gap-3">
                <div
                  className="w-[188px]  h-[142px] rounded-10"
                  style={{
                    background: `url(${_5.src}) lightgray -0.001px 0px / 100.001% 100% no-repeat`,
                  }}
                ></div>
                <div className="flex-1 flex flex-col mb-2 justify-center">
                  <h4 className="text-[#fff] text-[16px] font-600 leading-24">
                    Quản trị nhân sự
                  </h4>
                  <p className="text-[12px] text-[#fff]">
                    Cung cấp đội ngũ nhân sự dày dặn chuyên môn với quy trình
                    sản xuất, triển khai chuyên nghiệp. Giúp doanh nghiệp tối ưu
                    chi phí và thời gian quản trị nhân sự.
                  </p>
                </div>
              </div>
              <div className="flex flex-col t:flex-row gap-3">
                <div
                  className="w-[188px]  h-[142px] rounded-10"
                  style={{
                    background: `url(${_6.src}) lightgray -0.001px 0px / 100.001% 100% no-repeat`,
                  }}
                ></div>
                <div className="flex-1 flex flex-col mb-2 justify-center">
                  <h4 className="text-[#fff] text-[16px] font-600 leading-24">
                    Thích ứng với thay đổi thị trường
                  </h4>
                  <p className="text-[12px] text-[#fff]">
                    Đổi mới và nghiên cứu xu hướng thị trường người tiêu dùng.
                    Giúp doanh nghiệp nắm bắt thời cơ để triển khai các chiến
                    dịch Marketing tổng thể mang tính bứt phá, đón đầu kinh tế
                    hiện đại.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 px-4">
              <div className="w-[120px] mb-6">
                <img src={_7.src} className="w-full" />
              </div>
              <h3 className=" text-left text-[#fff] text-[16px] font-600 uppercase leading-24 mb-6">
                CÁC BƯỚC TRIỂN KHAI DỊCH VỤ MARKETING TỔNG THỂ
              </h3>
              <p className="text-[12px] leading-21 text-[#fff] text-left mb-6">
                1. Phân tích, đánh giá, khảo sát thị trường và đối thủ
                <br />
                2. Xác định mục tiêu của chiến dịch cần đạt được <br />
                3. Lập kế hoạch, xác định thời gian, đối tượng và ngân sách{" "}
                <br />
                4. Xây dựng nội dung, kênh truyền thông và phân bổ ngân sách5.
                Theo dõi, đo lường, đánh giá, báo cáo tiến độ và tính hiệu quả
              </p>
              <div className="flex flex-col t:flex-row justify-between gap-4">
                <img src={_8.src} />
                <img src={_9.src} />
              </div>
            </div>
            <div className="flex justify-center ">
              <img src={_10.src} className="banner" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 */}

      <div
        className="w-full py-6 bg-custom-main-1 bg-cover mt-10"
        style={{
          background: `url(${_bg_main.src}) 100% no-repeat`,
        }}
      >
        <div className="flex justify-center items-center flex-col ">
          <h3 className="text-center  text-[#fff] font-600 leading-52\ uppercase text-[32px] t:text-[40px] m-4">
            Lựa chọn dịch vụ Marketing tổng thể <br />
            chuyên nghiệp tại TechNam ngay hôm nay!
          </h3>
          <div className="max-w-[273px] w-full h-[55px] bg-[#fff] rounded-8 flex justify-center items-center mb-6">
            <span className="text-color/1 text-center  font-700 leading-24 text-[18px] uppercase">
              nhận báo giá
            </span>
          </div>
          <p className="text-center text-[#fff] text-[20px] font-500 leading-24 mb-4">
            Đội ngũ tư vấn của TechNam Marketing luôn sẵn sàng hỗ trợ bạn mọi
            lúc mọi nơi
          </p>
          <h3 className="text-[#fff] text-[32px] t:text-[40px] uppercase leading-52">
            hotline: 058 800 7777
          </h3>
        </div>
        <div className="my-6 grid grid-cols-2 t:grid-cols-4 gap-6">
          <div className="max-w-[473px] h-[333px] w-full mx-auto">
            <div
              style={{
                background: `url(${_11.src}) lightgray 0px -0.003px / 100% 100.002% no-repeat`,
              }}
              className="w-full h-full"
            ></div>
          </div>
          <div className="max-w-[473px] h-[333px] w-full mx-auto">
            <div
              style={{
                background: `url(${_12.src}) lightgray 0px -0.003px / 100% 100.002% no-repeat`,
              }}
              className="w-full h-full"
            ></div>
          </div>
          <div className="max-w-[473px] h-[333px] w-full mx-auto">
            <div
              style={{
                background: `url(${_13.src}) lightgray 0px -0.003px / 100% 100.002% no-repeat`,
              }}
              className="w-full h-full"
            ></div>
          </div>
          <div className="max-w-[473px] h-[333px] w-full mx-auto">
            <div
              style={{
                background: `url(${_14.src}) lightgray 0px -0.003px / 100% 100.002% no-repeat`,
              }}
              className="w-full h-full"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentProduction;
