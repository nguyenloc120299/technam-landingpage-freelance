/* eslint-disable @next/next/no-img-element */
import React from "react";
import _1 from "@/assets/marketing_solution_section.png";
import _bg_1 from "@/assets/bg-main-4.png";
import _bg_2 from "@/assets/bg-main-5.png";
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
import pandaFly from "@/assets/panda-fly.png.png";
import {
  adsCrossPlatform1,
  dataGrossPlatformSection,
} from "@/contants/contans";
import clsx from "clsx";
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
                  <li className="border-none">Xây dựng kế hoạch quay dựng</li>
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

      {/* Section 4 */}

      <div
        className="w-full"
        style={{
          background: `url(${_bg_2.src}) 0px 408.713px / 100% 68.973% no-repeat`,
        }}
      >
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
            {dataGrossPlatformSection.map((item, index) => (
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
        </MainSection>
      </div>

      {/* Section 5 */}
      <div
        className="w-full min-h-[768px]"
        style={{
          background: `url(${_bg_1.src}) 0px 0px / 100.104% 100% no-repeat, #FFF`,
        }}
      >
        <MainSection>
          <div className="w-full my-4">
            <h3 className="text-color/1 text-[32px] t:text-[40px] leading-48 font-700 uppercase text-center">
              Dù bạn là doanh nghiệp nhỏ hay lớn, bạn muốn sử dụng ngân sách ít
              hay nhiều thì Zalo Ads vẫn luôn đồng hành cùng bạn xây dựng thương
              hiệu
            </h3>
          </div>
          <div className="grid grid-cols-2 t:grid-cols-2 l:grid-cols-5 gap-10">
            {adsCrossPlatform1.map((item, index) => (
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
                    {item.text}
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

      {/* Section 5 */}

      <div className="w-full bg-custom-main-2">
        <MainSection>
          <div className="grid grid-cols-1 t:grid-cols-2">
            <div>
              <div className="text-center text-[#fff] text-[20px] t:text-[45px] font-700 uppercase leading-52">
                10 bước cơ bản trong quy trình dịch vụ
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <div className="max-w-[600px] mx-auto ">
                  <img src={pandaFly.src} className="" />
                </div>
              </div>
            </div>
            <div className="history-tl-container !w-full">
              <ul className="tl">
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="item-title text-[#fff]">
                    B1: Tiếp nhận thông tin từ phía khách hàng
                  </div>
                  <div className="item-detail !text-[#fff]">
                    Đội ngũ tư vấn viên tiếp nhận yêu cầu, lắng nghe những vấn
                    đề đối tác/doanh nghiệp cần giải quyết.{" "}
                  </div>
                </li>
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="item-title text-[#fff]">
                    B2: Nghiên cứu và phân tích yều cầu
                  </div>
                  <div className="item-detail !text-[#fff]">
                    Các phòng ban liên quan sẽ thảo luận và thống nhất giải pháp
                    tối ưu nhất cho
                    <br /> những vấn đề kinh doanh, lên phương án thực hiện
                    chiến lược tốt nhất.{" "}
                  </div>
                </li>
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="item-title text-[#fff]">
                    B3: Định hướng tệp khách hàng mục tiêu{" "}
                  </div>
                  <div className="item-detail !text-[#fff]">
                    Xác định các nhóm đối tượng khác nhau, dựa theo độ tuổi, vị
                    trí địa lý, sở thích và
                    <br /> hành vi mua sắm của khách hàng.{" "}
                  </div>
                </li>
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="item-title text-[#fff]">
                    B4: Lắng nghe và xác định mục tiêu, mong muốn của doanh
                    nghiệp
                  </div>
                  <div className="item-detail !text-[#fff]">
                    Tổng hợp lại những ý kiến, đưa ra mục tiêu cụ thể nhất để
                    thúc đẩy doanh số, quảng bá hình ảnh.
                  </div>
                </li>
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="item-title text-[#fff]">
                    B5: Dự trù kinh phí phù hợp cho chiến dịch
                  </div>
                  <div className="item-detail !text-[#fff]">
                    Đưa ra kế hoạch ngân sách hợp lý theo nhu cầu chi tiêu của
                    đối tác/doanh nghiệp.
                  </div>
                </li>
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="item-title text-[#fff]">
                    B6: Đề xuất kế hoạch và chiến lược Marketing tổng thể
                  </div>
                  <div className="item-detail !text-[#fff]">
                    Bộ phận Truyền Thông - Marketing sáng tạo và đưa ra giải
                    pháp cụ <br /> thể cho từng giai đoạn phát triển doanh
                    nghiệp.
                  </div>
                </li>
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="item-title text-[#fff]">
                    B7: Thỏa thuận hợp tác với đối tác/doanh nghiệp
                  </div>
                  <div className="item-detail !text-[#fff]">
                    Bộ phận Account bàn giao kế hoạch Marketing tổng thể và kí
                    kết hợp đồng với
                    <br /> đối tác/doanh nghiệp.
                  </div>
                </li>
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="item-title text-[#fff]">
                    B8: Triển khai chiến lược Marketing tổng thể theo kế hoạch
                  </div>
                  <div className="item-detail !text-[#fff]">
                    Đội ngũ chuyên viên Truyền Thông - Marketing bắt đầu xây
                    dựng nội dung và tiến hành <br /> chiến lược quảng bá thương
                    hiệu, tăng doanh số theo kế hoạch đã đề ra.
                  </div>
                </li>
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="item-title text-[#fff]">
                    Bước 9: Theo dõi hiệu quả chiến lược và báo cáo phân tích
                    định kỳ
                  </div>
                  <div className="item-detail !text-[#fff]">
                    Theo sát quá trình triển khai chiến lược, đo lường hiệu quả
                    và báo cáo kết quả
                    <br /> thường xuyên.
                  </div>
                </li>
                <li className="tl-item" ng-repeat="item in retailer_history">
                  <div className="item-title text-[#fff]">
                    Bước 10: Điều chỉnh và tối đa hóa hiệu quả
                  </div>
                  <div className="item-detail !text-[#fff]">
                    Nhận xét kết quả chiến lược theo từng đợt triển khai, cải
                    thiện và phát huy hiệu quả tốt nhất.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full justify-center flex mb-8">
            <div className="max-w-[303px] w-full border border-[#fff] min-h-[56px] flex justify-center items-center rounded-8">
              <span className="text-[#fff] text-[30px] font-700 uppercase">
                nhận báo giá
              </span>
            </div>
          </div>
          <div className="text-[#fff] text-center text-[25px] font-600">
            Đội ngũ tư vấn của TechNam Marketing Luôn sẵn sàng hỗ trợ bạn mọi
            lúc mọi nơi
          </div>
        </MainSection>
      </div>
    </>
  );
};

export default MarketingSolution;
