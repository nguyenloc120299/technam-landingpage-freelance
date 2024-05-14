/* eslint-disable @next/next/no-img-element */
import MainSection from "@/components/common/MainSection";
import gg_ads_bg from "@/assets/gg-ads-bg.png";
import logo_gg from "@/assets/google-logo.png";
import React from "react";
import ButtonCustom from "@/components/ButtonCustom";
import { dataGrossPlatformSection2 } from "@/contants/contans";
import img_lccdn4 from "@/assets/img-lccdn4.png.png";
import img_lccdn1 from "@/assets/img-lccdn1.png.png";
import img_lccdn3 from "@/assets/img-lccdn3.png.png";
import img_lccdn11 from "@/assets/img-lccdn11.png.png";
import gb_ov2 from "@/assets/gbov2.png";
import img_svnew from "@/assets/img-svgnew.png.png";
const GoogleAds = () => {
  return (
    <>
      {/* Section 1 */}
      <div className=" flex justify-center items-center w-full">
        <MainSection className="h-full">
          <div className="grid grid-cols-1 t:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="mb-3 text-center text-linear-1 font-700 leading-48 text-[30px] t:text-[35px] uppercase">
                google Ads Đem Lại Lợi Ích Gì?
              </h3>
              <p className="text-0265FF font-600 leading-35 text-24px">
                Tăng Doanh Số 200% Nhờ Google Ads.
              </p>
              <p className="text-color/3 font-600 leading-35 text-[24px]">
                Với Google Ads, bạn có thể dễ dàng quảng bá doanh nghiệp, bán
                các sản phẩm hoặc dịch vụ, nâng cao mức độ nhận biết và tăng lưu
                lượng truy cập vào trang web của bạn.
              </p>
              <div className="mt-[96px]">
                <ButtonCustom
                  title="tìm hiểu thêm"
                  classCustom="!rounded-[30px]"
                />
              </div>
            </div>
            <div className="relative">
              <img src={gg_ads_bg.src} />
            </div>
          </div>
        </MainSection>
      </div>

      {/* ///section 2 */}

      <div className="w-full bg-custom-main-2 py-[20px] flex justify-center items-center">
        <MainSection className="flex flex-col">
          <h3 className="text-[#fff] text-[30px] t:text-[40px] text-center font-700 leading-45 uppercase mb-3">
            Tại sao nên chọn quảng cáo Google Ads?
          </h3>
          <div className="my-3 grid grid-cols-2 t:grid-cols-3 d:grid-cols-5 gap-4">
            <div className="max-w-[255px] w-full text-[#fff] text-[16px]   min-h-[48px] flex justify-center items-center bg-color/1   rounded-[25px]  text-center p-2">
              Thu Hút 10.000+ Khách Hàng Tiềm Năng Mỗi Tháng
            </div>
            <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1   rounded-[25px]  text-center p-2">
              Lượng traffic tăng vọt nhờ vào chiến dịch quảng cáo Google Ads.
            </div>
            <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1   rounded-[25px]  text-center p-2">
              Chuyển Đổi 50% Khách Truy Cập Thành Khách Hàng Với Google Ads
            </div>
            <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1   rounded-[25px]  text-center p-2">
              Các doanh nghiệp sử dụng Google Ads có tỷ lệ ghi nhớ thương hiệu
              cao hơn 20%.
            </div>
            <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1   rounded-[25px]  text-center p-2">
              Tiết Kiệm 30% Chi Phí Quảng Cáo Với Google Ads.
            </div>
          </div>
          <div className="flex justify-center items-center max-w-[450px] mx-auto">
            <img src={logo_gg.src} alt="" />
          </div>
        </MainSection>
      </div>

      {/* Section 3 */}

      <div className="w-full h-full p-5 my-5">
        <div className="flex justify-center items-center mb-6 pb-6">
          <h3
            className="typography-1 text-[40px]
                        font-600"
          >
            5 lợi ích khi bạn chạy quảng cáo Google Ads
          </h3>
        </div>
        <div className="grid grid-cols-2 l:grid-cols-5 gap-4">
          {dataGrossPlatformSection2.map((item, index) => (
            <div
              className="max-w-[350px] min-h-[411px] rounded-[62px] bg-[#fff] shadow-custom-2 flex flex-col mx-auto w-full mb-4"
              key={index}
            >
              <div className="h-[190px]">
                <div className="mt-[-10px] ml-[-10px]">
                  <img src={item.img.src} />
                </div>
              </div>
              <div className="flex-1 flex flex-col p-5 gap-4">
                <h3 className="typography-1 !font-400 text-[27px] leading-30 !text-left">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section4 */}
      <div className="w-full bg-custom-main-2 min-h-[800px] flex items-center">
        <MainSection>
          <div className="text-left  pb-6 mb-6">
            <h3 className="text-[#fff] text-[35px] font-600 leading-52 uppercase">
              Doanh nghiệp như thế nào thì nên sử dụng dịch vụ quảng cáo google?
            </h3>
          </div>
          <div className="grid grid-cols-2 t:grid-cols-4 gap-6">
            <div className="max-w-[370px] min-h-[332px] w-full mx-auto p-6 rounded-20 bg-[#fff] flex flex-col  justify-center">
              <div className="text-color/1 text-[33px] font-500  mb-6 leading-40">
                Doanh nghiệp muốn tăng lưu lượng truy cập website
              </div>
            </div>
            <div className="max-w-[370px] min-h-[332px] w-full mx-auto p-6 rounded-20 bg-[#fff] flex flex-col justify-center">
              <div className="text-color/1 text-[33px] font-500  mb-6 leading-40">
                Doanh nghiệp muốn tăng doanh số bán hàng
              </div>
            </div>
            <div className="max-w-[370px] min-h-[332px] w-full mx-auto p-6 rounded-20 bg-[#fff] flex flex-col justify-center">
              <div className="text-color/1 text-[33px] font-500  mb-6 leading-40">
                Doanh nghiệp muốn tăng nhận diện thương hiệu
              </div>
            </div>
            <div className="max-w-[370px] min-h-[332px] w-full mx-auto p-6 rounded-20 bg-[#fff] flex flex-col justify-center">
              <div className="text-color/1 text-[30px] font-500  mb-6 leading-40">
                Doanh nghiệp muốn tiết kiệm ngân sách quảng cáo
              </div>
            </div>
          </div>
        </MainSection>
      </div>

      {/* Section 5 */}

      <MainSection>
        <div className="w-full text-center flex justify-center flex-col items-center mb-5 py-5">
          <h3 className="typography-1 mb-3 !text-[28px] !t:text-[40px]">
            Quy trình chạy quảng cáo Google Ads
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
          <div className="flex flex-col  items-center gap-4">
            <div className="shadow-custom-2 rounded-20 max-w-[594px] w-full p-[22px] flex justify-center items-center">
              <div className="flex gap-4 items-center w-full">
                <img
                  src={img_lccdn1.src}
                  alt="Các bước cơ bản cần có để triển khai chiến dịch Facebook hiệu quả"
                />
                <div className="min-h-[126px] flex flex-col flex-1 gap-2">
                  <h5 className="text-color/1 font-700 leading-21 uppercase">
                    Tư vấn tổng quan
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Nhận yêu cầu từ khách hàng Tư vấn phương pháp quảng cáo
                    Google Ads Báo giá quảng cáo Google Ads cho khách
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
                    Triển khai chi tiết
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Phân tích website khách hàng Nghiên cứu từ khóa tiềm năng
                    Cài đặt chiến dịchViết mẫu quảng cáoThiết lập các tiện ích
                    mở rộng Thiết lập Google Analytics, Tag Manager, Cài đặt
                    chuyển đổi
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
                    Theo dõi
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Tối ưu hàng ngày Gửi báo cáo cho khách hàng Đánh giá hiệu
                    quả từng giai đoạn, đưa ra phương án tiếp theo
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
          </div>
        </div>
      </MainSection>

      {/* Section 6 */}
      <MainSection>
        <h3 className="text-center typography-1 text-[36px]">
          Đội ngũ tư vấn của TechNam MarketingLuôn sẵn sàng hỗ trợ bạn mọi lúc
          mọi nơi
        </h3>
        <div className="relative">
          <img src={img_svnew.src} />
        </div>
        <div className="flex justify-center items-center">
          <ButtonCustom
            title="Đăng ký tư vấn & Báo giá ngay!"
            classCustom="rounded-[30px]"
          />
        </div>
      </MainSection>
    </>
  );
};

export default GoogleAds;
