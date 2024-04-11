/* eslint-disable @next/next/no-img-element */
import React from "react";
import logo from "@/assets/logo.png";
const MainFooter = () => {
  return (
    <>
      <div className="w-full min-h-[326px] bg-custom-main-3 p-4">
        <div className="flex justify-center items-center w-full h-full">
          <div className="grid  t:grid-cols-3 gap-4">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="w-[200px] h-[50px]">
                <img
                  src={logo.src}
                  alt="Tech Name logo"
                  className="w-full h-full"
                />
              </div>
              <div className="font-lato mt-3 text-[#fff] text-center text-[15px] fomt-[600] leading-[20px]">
                Đối tác tốt nhất để xây dựng và phát triển thương hiệu số
                TechNam (Thành lập từ năm 2015) mang đến giải pháp Marketing
                tổng thể dành cho doanh nghiệp.
              </div>
            </div>
            <div className="flex t:justify-center items-center">
              <div className="grid grid-cols-2  t:grid-cols-1 gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="16"
                    viewBox="0 0 25 16"
                    fill="none"
                  >
                    <path
                      d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9H24V7H0V9Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-[#fff] text-[18px] font-[600] leading-[20px] font-lato ">
                    Về chúng tôi
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="16"
                    viewBox="0 0 25 16"
                    fill="none"
                  >
                    <path
                      d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9H24V7H0V9Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-[#fff] text-[18px] font-[600] leading-[20px] font-lato">
                    Dịch vụ hoạt động{" "}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="16"
                    viewBox="0 0 25 16"
                    fill="none"
                  >
                    <path
                      d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9H24V7H0V9Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-[#fff] text-[18px] font-[600] leading-[20px] font-lato ">
                    Lãnh đạo{" "}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="16"
                    viewBox="0 0 25 16"
                    fill="none"
                  >
                    <path
                      d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9H24V7H0V9Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-[#fff] text-[18px] font-[600] leading-[20px] font-lato">
                    Tin tức sự kiện{" "}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="16"
                    viewBox="0 0 25 16"
                    fill="none"
                  >
                    <path
                      d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9H24V7H0V9Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-[#fff] text-[18px] font-[600] leading-[20px] font-lato">
                    Liên hệ{" "}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-custom-desktop-1">
                Theo dõi bản tin của chúng tôi
              </div>
              <div className="text-custom-desktop-2">
                Hãy để lại email để nhận các thông tin mới nhất từ chúng tôi!
              </div>
              <div className="relative max-w-[515px] h-[46px] w-full flex-shrink-0 border border-[#fff] rounded-[40px] bg-[rgba(255, 255, 255, 0.00)] flex items-center">
                <div className="w-full h-full flex-1">
                  <input
                    className="border-none outline-none h-full w-full bg-transparent px-2 text-[#fff]"
                    placeholder="Nhập email"
                  />
                </div>
                <div className="min-w-[90px] t:min-w-[100px]  d:w-[185px] h-full bg-[#fff] rounded-[40px] flex items-center justify-center">
                  <span className="text-custom-blue-desktop !text-[12px] !t:text-[14px]">subscribe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center w-full h-[80px] flex justify-center items-center text-custom-blue-desktop !text-[12px] !t:text-[15px]">
        Copyright 2024 © TECHNAM MARKETING - Design by Technammarketing.com
      </div>
    </>
  );
};

export default MainFooter;
