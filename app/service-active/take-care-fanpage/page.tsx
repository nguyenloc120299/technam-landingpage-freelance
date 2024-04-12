/* eslint-disable @next/next/no-img-element */
import MainSection from "@/components/common/MainSection";
import img_allaspects1 from "@/assets/img-allaspects1.png.png";
import { cardTakecareFb } from "@/contants/contans";
import fb_ov1 from "@/assets/fb-ov1.png";
import img_str2 from "@/assets/img-str2.png.png";
import clsx from "clsx";
import React from "react";

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
              <div className="w-full text-center pb-10">
                <h4 className="text-[#fff] text-[28px] t:text-[36px] font-700 leading-54 uppercase text-center">
                  BÁO GIÁ DỊCH VỤ CHĂM SÓC FANPAGE TRỌN GÓI
                </h4>
              </div>
              <div className="flex items-start gap-4 mb-7">
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
                  <p className="text-[#fff] leading-24 t:text-[18px]">
                    Đội ngũ TechNam Marketing là Công ty đi đầu trong lĩnh vực
                    Quảng Cáo - Truyền Thông tại miền Trung
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-7">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_4_930)">
                      <path
                        d="M11.4121 23.0012C10.9296 22.5187 10.2206 22.4597 9.81693 22.8535L1.51635 31.1541C1.11265 31.5578 1.18157 32.2667 1.66405 32.7492L7.58178 38.667C8.06426 39.1494 8.7732 39.2085 9.17691 38.8147L17.4775 30.5141C17.8812 30.1104 17.8123 29.4014 17.3298 28.9189L11.4121 23.0012ZM38.9231 7.34529L33.0054 1.42755C32.5229 0.945073 31.814 0.885994 31.4103 1.27986L23.1097 9.58044C22.706 9.98414 22.7749 10.6931 23.2574 11.1756L29.185 17.0933C29.6674 17.5758 30.3764 17.6349 30.7801 17.241L39.0807 8.94042C39.4647 8.53671 39.3957 7.81792 38.9231 7.34529Z"
                        fill="#5F5F5F"
                      />
                      <path
                        d="M35.6836 23.3359C33.4189 21.6719 30.14 21.7211 27.3141 23.3458C28.0033 22.2725 28.2692 21.406 28.348 20.7857C28.4267 20.185 28.2101 19.5844 27.7867 19.161L19.9588 11.3331C18.659 10.0333 16.6897 9.84621 15.1832 10.7324L14.3857 9.93483C13.2336 8.78279 11.3628 8.78279 10.2107 9.93483C9.05867 11.0869 9.05867 12.9577 10.2107 14.1098L11.0083 14.9073C10.1221 16.4138 10.3092 18.3831 11.609 19.6829L19.5058 27.5797C19.9095 27.9834 20.4609 28.2099 21.0222 28.1508C21.6031 28.1016 22.4105 27.8653 23.4247 27.2253C21.8001 30.0611 21.741 33.3596 23.4149 35.6243C23.7201 36.028 24.2912 36.1462 24.7245 35.8803C25.7977 35.2206 27.9147 33.8224 30.1105 31.7743L31.0656 32.7294C30.849 33.5467 31.0557 34.4526 31.6958 35.1024C32.6607 36.0674 34.2165 36.0674 35.1814 35.1024C36.1464 34.1375 36.1464 32.5818 35.1814 31.6168C34.5414 30.9768 33.6355 30.77 32.8084 30.9866L31.8533 30.0315C33.8423 27.8653 35.27 25.7286 35.9494 24.6553C36.2055 24.2221 36.0971 23.6411 35.6836 23.3359ZM15.5968 18.068C15.3605 18.3044 15.0454 18.4324 14.7303 18.4324C14.4152 18.4324 14.1001 18.3142 13.8638 18.068L13.1155 17.3197C12.633 16.8372 12.633 16.0594 13.1155 15.5769C13.5979 15.0944 14.3758 15.0944 14.8583 15.5769L15.6066 16.3252C16.0694 16.8077 16.0694 17.5954 15.5968 18.068ZM21.2782 23.7593C21.0419 23.9956 20.7268 24.1236 20.4117 24.1236C20.0966 24.1236 19.7815 24.0055 19.5452 23.7593L17.1131 21.3272C16.6307 20.8447 16.6307 20.0669 17.1131 19.5844C17.5956 19.1019 18.3735 19.1019 18.856 19.5844L21.288 22.0165C21.7607 22.499 21.7607 23.2768 21.2782 23.7593Z"
                        fill="#5F5F5F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_930">
                        <rect
                          width="39"
                          height="39"
                          fill="white"
                          transform="translate(0.5 0.267578)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="34"
                    viewBox="0 0 44 34"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_4_936)">
                      <mask
                        id="mask0_4_936"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="44"
                        height="34"
                      >
                        <path
                          d="M44 0.0498047H0V33.0498H44V0.0498047Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_4_936)">
                        <path
                          d="M42.7093 26.0786H42.7289L40.5778 25.3175V17.7677C40.4116 17.788 40.2551 17.8184 40.0889 17.8184H36.6667V23.9273H7.33333V4.64682H22V2.07948C22 1.5518 22.1076 1.04443 22.264 0.577637H5.37778C4.30222 0.577637 3.42222 1.49092 3.42222 2.60715V25.3073L1.27111 26.0684H1.29067C0.537778 26.3525 0 27.0933 0 27.9762V31.0204C0 32.1367 0.88 33.05 1.95556 33.05H42.0444C43.12 33.05 44 32.1367 44 31.0204V27.9762C44 27.0933 43.4622 26.3525 42.7093 26.0786ZM24.4444 29.9448H19.5556C18.744 29.9448 18.0889 29.2649 18.0889 28.4226C18.0889 27.5804 18.744 26.9005 19.5556 26.9005H24.4444C25.256 26.9005 25.9111 27.5804 25.9111 28.4226C25.9111 29.2649 25.256 29.9448 24.4444 29.9448ZM14.4809 14.7538C16.5733 15.7381 18.6071 14.1754 18.6071 12.1155C18.6071 10.4918 17.336 9.18281 15.7813 9.18281C13.7964 9.18281 12.3004 11.2935 13.2391 13.4651C13.4933 14.0334 13.9333 14.5001 14.4809 14.7538ZM11.0293 19.9393V20.6293C11.0293 21.0352 11.3227 21.3599 11.6844 21.3599H19.888C20.24 21.3599 20.5333 21.0352 20.5333 20.6293V19.9393C20.5333 18.6201 19.5751 17.5444 18.392 17.5444H13.1609C11.9876 17.5444 11.0293 18.6201 11.0293 19.9393Z"
                          fill="white"
                        />
                        <path
                          d="M40.0888 0.0498047H26.3999C25.3243 0.0498047 24.4443 0.963089 24.4443 2.07932V16.286C24.4443 16.8847 24.9234 17.3007 25.4221 17.3007C25.6177 17.3007 25.823 17.2398 26.0088 17.0978L27.8372 15.6771C28.1794 15.4133 28.5901 15.2712 29.0106 15.2712H40.0888C41.1643 15.2712 42.0443 14.3579 42.0443 13.2417V2.07932C42.0443 0.963089 41.1643 0.0498047 40.0888 0.0498047Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_4_936">
                        <rect
                          width="44"
                          height="33"
                          fill="white"
                          transform="translate(0 0.0498047)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="37"
                    viewBox="0 0 42 37"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_4_946)">
                      <mask
                        id="mask0_4_946"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="42"
                        height="37"
                      >
                        <path
                          d="M42 0.334473H0V36.3345H42V0.334473Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_4_946)">
                        <path
                          d="M4.09756 4.27968H30.7317H34.8293V2.30707C34.8293 1.22214 33.9073 0.334473 32.7805 0.334473H2.04878C0.921951 0.334473 0 1.22214 0 2.30707V24.992C0 26.077 0.921951 26.9646 2.04878 26.9646H14.1673L13.481 30.9098H9.73171C8.88146 30.9098 8.19512 31.5707 8.19512 32.3893C8.19512 33.2079 8.88146 33.8687 9.73171 33.8687H19.9756V23.0194H4.09756V4.27968ZM37.9024 6.74543H26.6341C24.3702 6.74543 22.5366 8.51091 22.5366 10.6907V32.3893C22.5366 34.569 24.3702 36.3345 26.6341 36.3345H37.9024C40.1663 36.3345 42 34.569 42 32.3893V10.6907C42 8.51091 40.1663 6.74543 37.9024 6.74543ZM33.0366 33.8687H31.5C30.6498 33.8687 29.9634 33.2079 29.9634 32.3893C29.9634 31.5707 30.6498 30.9098 31.5 30.9098H33.0366C33.8868 30.9098 34.5732 31.5707 34.5732 32.3893C34.5732 33.2079 33.8868 33.8687 33.0366 33.8687ZM38.7424 27.8424C38.7424 28.3849 38.2815 28.8287 37.718 28.8287H26.8185C26.2551 28.8287 25.7941 28.3849 25.7941 27.8424V11.9137C25.7941 11.3712 26.2551 10.9274 26.8185 10.9274H37.7078C38.2712 10.9274 38.7322 11.3712 38.7322 11.9137V27.8424H38.7424Z"
                          fill="#5F5F5F"
                        />
                        <path
                          d="M18.7055 8.2251H17.5479C17.2304 8.2251 16.9743 8.47168 16.9743 8.77743V9.59606C16.9743 9.84264 16.8001 10.0596 16.544 10.1287C16.2675 10.2174 15.9909 10.3259 15.7348 10.4542C15.5094 10.5627 15.2328 10.5429 15.0484 10.3654L14.444 9.78346C14.2187 9.56647 13.8499 9.56647 13.6245 9.78346L12.805 10.5725C12.5797 10.7895 12.5797 11.1446 12.805 11.3616L13.4094 11.9435C13.5938 12.121 13.6143 12.3775 13.5016 12.6043C13.3684 12.8509 13.2557 13.1073 13.1636 13.3835C13.0816 13.6202 12.8665 13.7977 12.6104 13.7977H11.7601C11.4426 13.7977 11.1865 14.0443 11.1865 14.3501V15.4646C11.1865 15.7703 11.4426 16.0169 11.7601 16.0169H12.6104C12.8665 16.0169 13.0918 16.1846 13.1636 16.4312C13.2557 16.6975 13.3684 16.9638 13.5016 17.2103C13.6143 17.4273 13.5938 17.6936 13.4094 17.8712L12.805 18.4531C12.5797 18.6701 12.5797 19.0251 12.805 19.2421L13.6245 20.0312C13.8499 20.2481 14.2187 20.2481 14.444 20.0312L15.0484 19.4492C15.2328 19.2717 15.4992 19.252 15.7348 19.3605C15.9909 19.4887 16.2572 19.5972 16.544 19.6859C16.7899 19.7649 16.9743 19.972 16.9743 20.2185V21.0372C16.9743 21.3429 17.2304 21.5895 17.5479 21.5895H18.7055C19.0231 21.5895 19.2792 21.3429 19.2792 21.0372V17.4668C18.9206 17.6147 18.5314 17.7035 18.1216 17.7035C16.5236 17.7035 15.2328 16.4607 15.2328 14.9221C15.2328 13.3835 16.5236 12.1407 18.1216 12.1407C18.5314 12.1407 18.9206 12.2295 19.2792 12.3775V8.77743C19.2792 8.47168 19.0231 8.2251 18.7055 8.2251ZM35.0957 18.7194H34.2455C33.9894 18.7194 33.764 18.5517 33.6923 18.3051C33.6001 18.0388 33.4875 17.7725 33.3543 17.5259C33.2314 17.309 33.2621 17.0427 33.4465 16.8651L34.0509 16.2832C34.2762 16.0662 34.2762 15.7112 34.0509 15.4942L33.2314 14.7051C33.006 14.4881 32.6372 14.4881 32.4118 14.7051L31.8075 15.287C31.6231 15.4646 31.3567 15.4843 31.1211 15.3758C30.865 15.2476 30.5987 15.1391 30.3118 15.0503C30.066 14.9714 29.8816 14.7643 29.8816 14.5177V13.6991C29.8816 13.3933 29.6255 13.1468 29.3079 13.1468H28.1504C27.8328 13.1468 27.5767 13.3933 27.5767 13.6991V17.2695C27.9353 17.1216 28.3245 17.0328 28.7343 17.0328C30.3323 17.0328 31.6231 18.2755 31.6231 19.8142C31.6231 21.3528 30.3323 22.5955 28.7343 22.5955C28.3245 22.5955 27.9353 22.5068 27.5767 22.3588V25.9292C27.5767 26.235 27.8328 26.4816 28.1504 26.4816H29.3079C29.6255 26.4816 29.8816 26.235 29.8816 25.9292V25.1106C29.8816 24.864 30.0557 24.647 30.3118 24.578C30.5884 24.4892 30.865 24.3807 31.1211 24.2525C31.3465 24.1342 31.6231 24.1638 31.8075 24.3413L32.4118 24.9232C32.6372 25.1402 33.006 25.1402 33.2314 24.9232L34.0509 24.1342C34.2762 23.9172 34.2762 23.5621 34.0509 23.3451L33.4465 22.7632C33.2621 22.5857 33.2416 22.3292 33.3543 22.1024C33.4875 21.8558 33.6001 21.5994 33.6923 21.3232C33.7743 21.0865 33.9894 20.909 34.2455 20.909H35.0957C35.4133 20.909 35.6694 20.6624 35.6694 20.3566V19.2717C35.6694 18.9659 35.4133 18.7194 35.0957 18.7194Z"
                          fill="#5F5F5F"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_4_946">
                        <rect
                          width="42"
                          height="36"
                          fill="white"
                          transform="translate(0 0.334473)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="39"
                    viewBox="0 0 30 39"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_67_207)">
                      <mask
                        id="mask0_67_207"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="39"
                      >
                        <path
                          d="M30 0.389648H0V38.3896H30V0.389648Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_67_207)">
                        <path
                          d="M15.9843 35.7796L12.3555 29.2987C12.1539 28.9408 11.7411 28.7524 11.3379 28.8277C10.8771 28.9219 10.4067 28.969 9.92676 28.969C8.58276 28.969 7.33476 28.6017 6.25956 27.9799C5.79876 27.7068 5.21316 27.8386 4.94436 28.2814L0.278761 35.6949C-0.460439 36.8724 0.40356 38.389 1.80516 38.389H14.4099C15.7731 38.389 16.6371 36.9477 15.9843 35.7796Z"
                          fill="#5F5F5F"
                        />
                        <path
                          d="M29.7123 22.6769C28.3299 20.4538 25.2675 15.9228 20.7939 11.3636L22.2819 9.92228C23.4531 10.3273 24.8067 10.0824 25.7475 9.15927C27.0435 7.88758 27.0435 5.81519 25.7475 4.53408C24.4515 3.26239 22.3395 3.26239 21.0339 4.53408C20.1123 5.46665 19.8531 6.77602 20.2563 7.92526L18.7491 9.38535C14.1795 5.13696 9.55231 2.0849 7.27711 0.681329C6.41312 0.144393 5.26112 0.361052 4.64672 1.17117C0.864316 6.22025 1.51712 13.8504 6.17312 19.8321C5.81792 20.4444 5.59712 21.1415 5.59712 21.9045C5.59712 24.25 7.52672 26.1434 9.91712 26.1434C10.8963 26.1434 11.7891 25.8137 12.5091 25.2768C18.1635 28.4231 24.6915 28.5078 29.2035 25.2485C30.0291 24.6457 30.2499 23.5341 29.7123 22.6769ZM8.73631 16.8648C8.53471 16.9873 8.31391 17.0438 8.09311 17.0438C7.69951 17.0438 7.30592 16.846 7.07552 16.4974C5.02112 13.3041 4.42592 9.65852 5.44352 6.50285C5.64512 5.88113 6.31711 5.54201 6.95072 5.73983C7.58432 5.93765 7.92991 6.59705 7.72831 7.21876C6.93151 9.67736 7.44991 12.6729 9.10112 15.2446C9.46592 15.7909 9.30271 16.5257 8.73631 16.8648Z"
                          fill="#5F5F5F"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_67_207">
                        <rect
                          width="30"
                          height="38"
                          fill="white"
                          transform="translate(0 0.389648)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="38"
                    viewBox="0 0 34 38"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_4_956)">
                      <mask
                        id="mask0_4_956"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="34"
                        height="38"
                      >
                        <path
                          d="M34 0.174316H0V37.1743H34V0.174316Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_4_956)">
                        <path
                          d="M31.3007 11.0286C31.1496 11.0286 31.0092 11.0498 30.8581 11.071C29.3357 4.82315 23.6996 0.174316 16.9838 0.174316C10.268 0.174316 4.63195 4.82315 3.09876 11.071C2.9692 11.0498 2.82883 11.0286 2.69927 11.0286C1.20927 11.0286 0 12.2147 0 13.676V16.8529C0 18.3143 1.20927 19.5003 2.69927 19.5003C3.02318 19.5003 3.3363 19.4368 3.62782 19.3309C4.4268 21.2899 6.35948 22.6772 8.63766 22.6772C9.2315 22.6772 9.71737 22.2006 9.71737 21.6182C9.71737 21.0358 9.2315 20.5592 8.63766 20.5592C6.85614 20.5592 5.39854 19.1297 5.39854 17.3824V14.0255C5.63608 7.80941 10.7323 2.82172 16.9838 2.82172C23.3865 2.82172 28.5907 8.04238 28.5907 14.4596C28.5907 14.4808 28.6015 14.5126 28.6015 14.5338V16.8529C28.6015 18.3143 29.8107 19.5003 31.3007 19.5003C32.7907 19.5003 34 18.3143 34 16.8529V13.676C34 12.2147 32.7907 11.0286 31.3007 11.0286Z"
                          fill="#5F5F5F"
                        />
                        <path
                          d="M25.8483 25.8436H22.6739C21.9721 25.8436 21.3027 26.1825 20.9032 26.7438L18.6898 29.8571C17.826 31.0749 15.9797 31.0643 15.1376 29.8359L13.0213 26.7755C12.6218 26.1931 11.9524 25.8436 11.2398 25.8436H8.10866C4.10295 25.8436 0.853027 29.0311 0.853027 32.9598V36.1155C0.853027 36.698 1.3389 37.1745 1.93274 37.1745H32.0134C32.6072 37.1745 33.0931 36.698 33.0931 36.1155V32.9598C33.1039 29.0311 29.854 25.8436 25.8483 25.8436ZM16.9839 23.1962C21.8965 23.1962 25.8807 19.2887 25.8807 14.4704C25.8807 9.65219 21.8965 5.74463 16.9839 5.74463C12.0712 5.74463 8.08707 9.65219 8.08707 14.4704C8.08707 19.2887 12.0712 23.1962 16.9839 23.1962Z"
                          fill="#5F5F5F"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_4_956">
                        <rect
                          width="34"
                          height="37"
                          fill="white"
                          transform="translate(0 0.174316)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
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
