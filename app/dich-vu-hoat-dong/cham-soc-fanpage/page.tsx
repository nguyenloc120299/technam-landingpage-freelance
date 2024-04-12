/* eslint-disable @next/next/no-img-element */
import MainSection from "@/components/common/MainSection";
import img_allaspects1 from "@/assets/img-allaspects1.png.png";
import { cardTakecareFb } from "@/contants/contans";
import fb_ov1 from "@/assets/fb-ov1.png";
import img_str2 from "@/assets/img-str2.png.png";
import clsx from "clsx";
import React from "react";
import Icon1 from "@/icons/icon1";
import Icon2 from "@/icons/icon2";
import Icon3 from "@/icons/icon3";
import Icon4 from "@/icons/icon4";
import LeftArrow from "@/icons/LeftArrow";
import RightArrow from "@/icons/RightArrow";
import Check from "@/icons/Check";
import Icon5 from "@/icons/icon5";

const TakeCareFanpage = () => {
  return (
    <>
      {/* //section1 */}
      <MainSection>
        <div className="flex justify-center flex-col items-center mb-5 pb-5">
          <div className="w-full text-center">
            <h3 className="typography-1 text-[32px] t:text-[48px] mb-6">{`"Content is King"`}</h3>
            <p className="text-[#000] text-center  font-400 leading-21 t:text-[18px]">{`BẠN CÓ BIẾT? Content "hay" và "sáng tạo" sẽ giúp chiến dịch quảng cáo hiệu quả lên đến 73%. `}</p>
            <p className="text-[#000] text-center  font-[400] leading-21 t:text-[18px]">
              {`Cùng với sự đồng hành hỗ trợ của đội ngũ chuyên viên TechNam Marketing, chúng tôi sẽ giúp Fanpage của bạn "bùng nổ" đơn hàng và doanh thu.`}
            </p>
          </div>
        </div>
        <div className="w-full text-center">
          <h4 className="text-color/1 text-[30px] t:[40px] font-600 leading-48 uppercase">
            đăng ký tư vấn
          </h4>
          <div className="flex justify-center items-center flex-col max-w-[742px] w-full mx-auto">
            <div className="mb-5 w-full">
              <div className="text-left mb-2">
                <label className="text-6D6D6D text-[14px] leading-21 font-400 text-left">
                  Họ và tên <span className="text-[#F00]">*</span>
                </label>
              </div>

              <input
                type="text"
                placeholder="Nhập họ tên"
                className="max-w-[742px] w-full h-[46px] p-[11px] flex items-center rounded-8 border border-D5D5D5 bg-[#fff] outline-none"
              />
            </div>

            <div className="mb-5 w-full">
              <div className="grid grid-cols-1 t:grid-cols-2 gap-4">
                <div>
                  <div className="text-left mb-2">
                    <label className="text-6D6D6D text-[14px] leading-21 font-400 text-left">
                      Email
                    </label>
                  </div>

                  <input
                    type="text"
                    placeholder="Nhập email"
                    className="max-w-[742px] w-full h-[46px] p-[11px] flex items-center rounded-8 border border-D5D5D5 bg-[#fff] outline-none"
                  />
                </div>
                <div>
                  <div className="text-left mb-2">
                    <label className="text-6D6D6D text-[14px] leading-21 font-400 text-left">
                      Số điện thoại
                    </label>
                  </div>

                  <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    className="max-w-[742px] w-full h-[46px] p-[11px] flex items-center rounded-8 border border-D5D5D5 bg-[#fff] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mb-5 w-full">
              <div className="text-left mb-2">
                <label className="text-6D6D6D text-[14px] leading-21 font-400 text-left">
                  Nội dung <span className="text-[#F00]">*</span>
                </label>
              </div>

              <input
                type="text"
                placeholder="Nhập nội dung"
                className="max-w-[742px] w-full h-[46px] p-[11px] flex items-center rounded-8 border border-D5D5D5 bg-[#fff] outline-none"
              />
            </div>
            <div className="flex justify-center items-center">
              <button className="t:min-w-[240px]  h-[47px] p-[13px] flex justify-center items-center rounded-8 bg-custom-main-4 shadow-custom-1">
                <span className="text-[#fff] font-700 text-[16px] leading-21 uppercase text-center">
                  nhận tư vấn
                </span>
              </button>
            </div>
          </div>
        </div>
      </MainSection>

      {/* //section 2 */}

      <div className="w-full bg-custom-main-1 pb-5 mb-5">
        <MainSection>
          <div className="flex ml-10 items-center mb-5 pb-5">
            <h3 className="text-[#fff] font-600 leading-54 text-[32px] t:text-[48px] uppercase">
              Trao Niềm Tin <span className="text-color/1">Nhận Giá Trị</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 t:grid-cols-3 l:grid-cols-5 gap-4">
            {cardTakecareFb.map((item, index) => (
              <div
                className="max-w-[278px] min-h-[388px] rounded-8 bg-custom-main-4 shadow-custom-3 p-[15px] flex flex-col"
                key={index}
              >
                <div
                  className={clsx("max-w-[248px] mx-auto h-[178px] w-full")}
                  style={{
                    background: `url(${item.img.src}) lightgray -30.033px 0px / 124.148% 100% no-repeat`,
                  }}
                ></div>
                <div className="flex-1 mt-5">
                  <p className="text-[#fff] text-[15px] leading-17 font-400">
                    Tư vấn chiến lược Marketing tổng thể. Lên kế hoạch nội dung
                    cụ thể, sát sao và phù hợp với từng đối tượng khách hàng mà
                    doanh nghiệp của bạn đang hướng tới
                  </p>
                </div>
                <div className="text-[#fff] text-[16px] leading-24 font-400">
                  Xem thêm{" "}
                </div>
              </div>
            ))}
          </div>
        </MainSection>
      </div>

      {/* //Section3 */}

      <MainSection>
        <div className="flex justify-center mb-5">
          <h3 className="typography-1 text-[36px] font-700">
            Giải pháp tối ưu cho mọi doanh nghiệp
          </h3>
        </div>
        <div className="flex flex-col gap-4 mb-5 pb-5">
          <div
            className="max-w-[794px] w-full min-h-[48px] inline-flex justify-center items-center mx-auto rounded-[25px] p-2"
            style={{
              background:
                "linear-gradient(82deg, #02DEFF 7.81%, #0265FF 49.03%, #02DEFF 100.74%)",
            }}
          >
            <span className="text-[#fff] text-[16px] leading-24 text-center">{`Bạn "bí" ý tưởng nội, dung; Fanpage lộn xộn, chưa định hướng nội dung cụ thể, chuyên nghiệp?`}</span>
          </div>
          <div
            className="max-w-[794px] w-full min-h-[48px] inline-flex justify-center items-center mx-auto rounded-[25px] p-2"
            style={{
              background:
                "linear-gradient(82deg, #02DEFF 7.81%, #0265FF 49.03%, #02DEFF 100.74%)",
            }}
          >
            <span className="text-[#fff] text-[16px] leading-24 text-center">{`Phải làm sao khi chi phí Marketing tăng cao?`}</span>
          </div>
          <div
            className="max-w-[794px] w-full min-h-[48px] inline-flex justify-center items-center mx-auto rounded-[25px] p-2"
            style={{
              background:
                "linear-gradient(82deg, #02DEFF 7.81%, #0265FF 49.03%, #02DEFF 100.74%)",
            }}
          >
            <span className="text-[#fff] text-[16px] leading-24 text-center">{`"Tút tát" Fanpage, thu hút khách hàng`}</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-[700px] w-full">
            <img
              src={img_allaspects1.src}
              alt="Giải pháp cho fanpage"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </MainSection>

      {/* Section4 */}

      <div className="bg-custom-main-2 w-full p-4 t:p-[42px] l:p-[100px]">
        <div className="grid grid-cols-1 t:grid-cols-2 gap-4">
          <div className="w-full h-full  flex justify-end flex-col">
            <div className="max-w-[715px] w-full">
              <img
                src={fb_ov1.src}
                alt=" Facebook Ads Techname"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex w-full justify-end items-center gap-2">
              <div className="w-9 h-9 bg-[#fff]  rounded-[50%] flex justify-center items-center">
                <LeftArrow />
              </div>
              <div className="w-9 h-9 bg-[#fff] rounded-[50%] flex justify-center items-center">
                <RightArrow />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col justify-between items-start pb-10 gap-4 ">
              <div className="w-full text-center pb-10">
                <h4 className="text-[#fff] text-[28px] t:text-[36px] font-700 leading-54 uppercase text-center">
                  BÁO GIÁ DỊCH VỤ CHĂM SÓC FANPAGE TRỌN GÓI
                </h4>
              </div>
              <div className="flex items-start gap-4 mb-7">
                <div className="flex">
                  <div className="w-9 h-9 bg-[#fff] rounded-[50%] flex justify-center items-center">
                    <Check />
                  </div>
                </div>
                <div>
                  <p className="text-[#fff] leading-24 t:text-[18px]">
                    Đội ngũ TechNam Marketing là Công ty đi đầu trong lĩnh vực
                    Quảng Cáo - Truyền Thông tại miền Trung
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-7">
                <div className="flex">
                  <div className="w-9 h-9 bg-[#fff] rounded-[50%] flex justify-center items-center">
                    <Check />
                  </div>
                </div>
                <div>
                  <p className="text-[#fff] leading-24 t:text-[18px]">
                    Chúng tôi luôn cung cấp các giải pháp online marketing phù
                    hợp cho từng ngành hàng, giúp doanh nghiệp phủ sóng thương
                    hiệu rộng rãi
                  </p>
                </div>
              </div>
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

      {/* Section 5 */}
      <MainSection>
        <div className="flex justify-center items-center text-center mb-5 pb-10">
          <h4 className="typography-1 text-[28px] t:text-[48px]">
            Quy trình làm việc minh bạch, uy tín
          </h4>
        </div>
        <div className="grid grid-cols-1 t:grid-cols-2 gap-4">
          <div className="flex flex-col justify-between items-start gap-4 w-full">
            <div className="flex gap-4">
              <div
                className="w-[95px] h-[95px] rounded-[50%] p-[15px] flex justify-center items-center "
                style={{
                  background: "rgba(255, 183, 254, 0.50)",
                }}
              >
                <div className="w-[66px] h-[66px] rounded-[50%] flex justify-center items-center bg-[#fff]">
                  <Icon1 />
                </div>
              </div>
              <div className="flex-1 flex items-center">
                <div className="flex-flex-col">
                  <h4 className="text-[#212121] text-[20px] font-700 leading-30 uppercase">
                    Hợp tác
                  </h4>
                  <p className="typography-2 max-w-[505px] w-full t:text-[20px]">
                    Hỗ trợ set up, quản trị Fanpage
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="w-[95px] h-[95px] rounded-[50%] p-[15px] flex justify-center items-center "
                style={{
                  background: "rgba(255, 183, 254, 0.50)",
                }}
              >
                <div className="w-[66px] h-[66px] rounded-[50%] flex justify-center items-center bg-custom-main-5">
                  <Icon2 />
                </div>
              </div>
              <div className="flex-1 flex items-center">
                <div className="flex-flex-col">
                  <h4 className="text-[#0265FF] text-[20px] font-700 leading-30 uppercase">
                    Tìm hiểu
                  </h4>
                  <p className="typography-2 max-w-[505px] w-full t:text-[20px] !text-[#0265FF]">
                    Tìm hiểu sản phẩm, phân tích mục tiêu và đối tượng khách
                    hàng
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="w-[95px] h-[95px] rounded-[50%] p-[15px] flex justify-center items-center "
                style={{
                  background: "rgba(255, 183, 254, 0.50)",
                }}
              >
                <div className="w-[66px] h-[66px] rounded-[50%] flex justify-center items-center bg-[#fff]">
                  <Icon3 />
                </div>
              </div>
              <div className="flex-1 flex items-center">
                <div className="flex-flex-col">
                  <h4 className="text-[#212121] text-[20px] font-700 leading-30 uppercase">
                    Đề xuất ý tưởng
                  </h4>
                  <p className="typography-2 max-w-[505px] w-full t:text-[20px] ">
                    Định hướng nội dung và thiết kế hình ảnh
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-[95px] h-[95px] rounded-[50%] p-[15px] flex justify-center items-center "
                style={{
                  background: "rgba(255, 183, 254, 0.50)",
                }}
              >
                <div className="w-[66px] h-[66px] rounded-[50%] flex justify-center items-center bg-[#fff]">
                  <Icon5 />
                </div>
              </div>
              <div className="flex-1 flex items-center">
                <div className="flex-flex-col">
                  <h4 className="text-[#212121] text-[20px] font-700 leading-30 uppercase">
                    Kiểm duyệt, đánh giá
                  </h4>
                  <p className="typography-2 max-w-[505px] w-full t:text-[20px] ">
                    Gửi demo nội dung + hình ảnh, duyệt trước khi đăng bài
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="w-[95px] h-[95px] rounded-[50%] p-[15px] flex justify-center items-center "
                style={{
                  background: "rgba(255, 183, 254, 0.50)",
                }}
              >
                <div className="w-[66px] h-[66px] rounded-[50%] flex justify-center items-center bg-[#fff]">
                  <Icon4 />
                </div>
              </div>
              <div className="flex-1 flex items-center">
                <div className="flex-flex-col">
                  <h4 className="text-[#212121] text-[20px] font-700 leading-30 uppercase">
                    Kết quả
                  </h4>
                  <p className="typography-2 max-w-[505px] w-full t:text-[20px] ">
                    Báo camp, kết quả chiến dịch hằng ngày
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-custom-main-1 rounded-[20px] max-w-[740px] min-h-[550px] p-[40px]">
            <div className="flex justify-center items-center mb-4">
              <img
                src={img_str2.src}
                alt="TechNam Marketing sẽ giúp bạn thực hiện"
              />
            </div>
            <div className="text-center pb-10">
              <p className="typography-2 text-[22px]">
                Đội ngũ chuyên gia 10 năm kinh nghiệm
              </p>
            </div>
            <div className="flex gap-4 mb-4">
              <div
                className="h-[32px] w-[32px] flex justify-center items-center rounded-[50%]"
                style={{
                  background: "rgba(255, 183, 254, 0.50)",
                }}
              >
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
              <div className="flex-1 ">
                <p className="typography-3 text-[18px]">
                  Cung cấp dịch vụ thiết kế hình ảnh, content chuyên nghiệp đáp
                  ứng được đa dạng các chủ đề với mức giá tốt.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mb-4 pb-10">
              <div
                className="h-[32px] w-[32px] flex justify-center items-center rounded-[50%]"
                style={{
                  background: "rgba(255, 183, 254, 0.50)",
                }}
              >
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
              <div className="flex-1 ">
                <p className="typography-3 text-[18px]">
                  Trình độ chuyên môn cao, phục vụ tận tâm, đáng tin cậy và hoàn
                  thành sản phẩm trong thời gian nhanh nhất.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="t:min-w-[288px]  h-[47px] p-[13px] flex justify-center items-center rounded-8 bg-custom-main-4 shadow-custom-1">
                <span className="text-[#fff] font-700 text-[16px] leading-21 uppercase text-center">
                  ĐĂNG KÝ TƯ VẤN NGAY
                </span>
              </button>
            </div>
          </div>
        </div>
      </MainSection>
    </>
  );
};

export default TakeCareFanpage;
