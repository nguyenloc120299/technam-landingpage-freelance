/* eslint-disable @next/next/no-img-element */
import MainSection from "@/components/common/MainSection";
import img_allaspects1 from "@/assets/img-allaspects1.png.png";
import ButtonCustom from "@/components/ButtonCustom";
import _bg_1 from "@/assets/bg-main-4.png";
import _bg_2 from "@/assets/bg-main-5.png";
import clsx from "clsx";
import {  adsCrossPlatform3, dataGrossPlatformSection } from "@/contants/contans";
import img_lccdn4 from "@/assets/img-lccdn4.png.png";
import img_lccdn5 from "@/assets/img-lccdn5.png.png";
import img_lccdn1 from "@/assets/img-lccdn1.png.png";
import img_lccdn2 from "@/assets/img-lccdn2.png.png";
import img_lccdn3 from "@/assets/img-lccdn3.png.png";
import img_lccdn11 from "@/assets/img-lccdn11.png.png";
import gb_ov2 from "@/assets/gbov2.png";
import LeftArrow from "@/icons/LeftArrow";
import RightArrow from "@/icons/RightArrow";

const WebLandingPage = () => {
  return (
    <>
      {/* Section1 */}
      <MainSection>
        <h3 className="text-color/1 font-700 text-[36px] leading-54 uppercase  text-center">
          DỊCH VỤ THIẾT KẾ LANDING PAGE CỦA TECHNAM MARKETING
        </h3>
        <p className="text-color/1 text-center text-[30px] font-500 leading-54 mb-6">
          Tiết kiệm chi phí - Tối ưu chuyển đổi - Tăng trưởng doanh thu
        </p>

        <div className="max-w-[1500px] w-full mx-auto t:px-20">
          <p className="text-[#212121] text-[24px] leading-30 text-center">
            Lý do nên chọn dịch vụ sản xuất video ngắn tại TechNam Marketing
          </p>
          <p className="text-[#212121] text-[24px] leading-30 text-center">
            Không chỉ là thiết kế và sáng tạo nội dung nổi bật, đội ngũ của
            chúng tôi sẵn sàng hỗ trợ khách hàng trong việc tối ưu hóa chuyển
            đổi của Landing Page.
          </p>
        </div>

        <div className="flex justify-center items-center my-5 py-6">
          <ButtonCustom title="ĐĂNG KÝ TƯ VẤN NGAY" />
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
        <h3 className="text-color/1 font-700 text-[36px] leading-54 uppercase mb-6 text-center">
          MANG LẠI NHỮNG LỢI ÍCH TUYỆT VỜI
        </h3>
        <div className="my-6 grid grid-cols-2 t:grid-cols-3 d:grid-cols-6 gap-4">
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px]  text-center p-2">
            Mẫu giao diện chuyện nghiệp, tối ưu cho từng ngành nghề
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px]  text-center p-2">
            Quy trình thực hiện đơn giản và nhanh chóng
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px]  text-center p-2">
            Đội ngũ giàu kinh nghiệm, kỹ thuật cao
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px]  text-center p-2">
            Tối ưu hiển thị chính xác trên tất cả các thiết bị
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px]  text-center p-2">
            Tối ưu tốc độ tải trang, đáp ứng tốt trải nghiệm người dùng
          </div>
          <div className="max-w-[255px] w-full text-[#fff] text-[16px] leading-24  min-h-[48px] flex justify-center items-center bg-color/1 border-[2px] border-[#fff] rounded-[25px] text-center p-2">
            Cho phép tích hợp các tính năng và công nghệ tiên tiến nhất
          </div>
        </div>
      </MainSection>

      {/* ///section 2 */}

      <div className="w-full bg-custom-main-2 ">
        <MainSection>
          <div className="text-left  pb-6 ">
            <h3 className="text-[#fff] text-[35px] font-600 leading-52 uppercase">
              TĂNG DOANH THU X2 VỚI WEBSITE NỔI BẬT
            </h3>
            <p className="text-[#fff] text-[25px] font-400 leading-52 ">
              Hãy để TECHNAM MARKETING hỗ trợ bạn phát triển doanh nghiệp
            </p>
          </div>
          <div className="grid grid-cols-2 t:grid-cols-4 gap-6">
            <div className="max-w-[370px] min-h-[332px] w-full mx-auto p-6 rounded-20 bg-[#fff] flex flex-col">
              <div className="text-color/1 text-[33px] font-500 leading-24 mb-6">
                Đảm bảo chất lượng dự án
              </div>
              <div className="flex-1 flex justify-center items-center w-full h-full">
                <p>
                  Với nền tảng công nghệ hiện đại nhất và đội ngũ kỹ thuật viên
                  giàu kinh nghiệm đảm bảo mọi sản phẩm được hoàn thiện tốt
                  nhất:Tốc độ tải trang nhanh chóngTối ưu SEO ngay từ trong
                  CodeDễ dàng phát triển và nâng cấp
                </p>
              </div>
            </div>
            <div className="max-w-[370px] min-h-[332px] w-full mx-auto p-6 rounded-20 bg-[#fff] flex flex-col">
              <div className="text-color/1 text-[33px] font-500 leading-24 mb-6">
                Đưa ra giải pháp, mô hình tốt nhất
              </div>
              <div className="flex-1 flex justify-center items-center w-full h-full">
                <p>
                  Đội ngũ giàu kinh nghiệm của TECHNAM MARKETING sẵn sàng đưa ra
                  các phương án tối ưu, tăng tỷ lệ chuyển đổi và thành công cho
                  dự án của khách hàng:Tư vấn các giải pháp tối ưu nhấtHỗ trợ
                  ngay lập tức các vấn đề phát sinhTiết kiệm thời gian thực hiện
                  dự án
                </p>
              </div>
            </div>
            <div className="max-w-[370px] min-h-[332px] w-full mx-auto p-6 rounded-20 bg-[#fff] flex flex-col">
              <div className="text-color/1 text-[33px] font-500 leading-24 mb-6">
                Hỗ trợ khách hàng 24/7
              </div>
              <div className="flex-1 flex justify-center items-center w-full h-full">
                <p>
                  Với định hướng là đơn vị thiết kế website/landing page có dịch
                  vụ tốt nhất, TECHNAM MARKETING luôn hỗ trợ khách hàng bất cứ
                  lúc nào, với nhiều kênh khác nhau, phản hồi ngay lập tức.Hỗ
                  trợ khách hàng đa kênh (FB, Zalo, Livechat...)Tài liệu - Khóa
                  học hữu ích được update liên tụcHỗ trợ kỹ thuật ngay lập tức -
                  24/7
                </p>
              </div>
            </div>
            <div className="max-w-[370px] min-h-[332px] w-full mx-auto p-6 rounded-20 bg-[#fff] flex flex-col">
              <div className="text-color/1 text-[30px] font-500 leading-[30px] mb-6">
                Chi phí hợp lý, tiết kiệm
              </div>
              <div className="flex-1 flex justify-center items-center w-full h-full">
                <p>
                  Dịch vụ Landing Page tại TECHNAM MARKETING sử dụng các công
                  nghệ và giải pháp tối ưu nhất, giúp giảm thời gian dự án, mang
                  đến mức chi phí thiết kế landing page hợp lý:Tối ưu tỷ lệ P/P
                  cho dự ánBáo giá chi tiết trước khi ký hợp đồngGiảm thiểu tối
                  đa chi phí phát sinh
                </p>
              </div>
            </div>
          </div>
        </MainSection>
      </div>

      {/* Section 3 */}
      <div
        className="w-full min-h-[500px] px-6 "
        style={{
          background: `url(${_bg_1.src}) 0px 0px / 100.104% 100% no-repeat, #FFF`,
        }}
      >
          <div className="w-full my-4">
            <h3 className="text-color/1 text-[32px] t:text-[40px] leading-48 font-700 uppercase text-center">
              WEBSITE CHUẨN SEO - CHỐT SALES DỄ{" "}
            </h3>
          </div>
          <div className="grid grid-cols-2 t:grid-cols-3 d:grid-cols-6 gap-10">
            {adsCrossPlatform3.map((item, index) => (
              <div
                className="max-w-[278px] min-h-[253px] rounded-8 bg-custom-main-4 shadow-custom-3 p-[15px] flex flex-col"
                key={index}
              >
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
            ))}
          </div>
      </div>

      {/* Section 4 */}

      <MainSection>
        <div className="w-full text-center flex justify-center flex-col items-center mb-5 py-5">
          <h3 className="typography-1 mb-3 !text-[28px] !t:text-[40px]">
          WEBSITE ĐA CHỨC NĂNG
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
                  TÍCH HỢP CHAT TRỰC TUYẾN
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Tích hợp live chat, chat trực tuyến liên kết facebook, zalo… thông báo ngay trên điện thoại khi có khách liên hệ.
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
                  THÔNG BÁO TỰ ĐỘNG
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Nhận thông báo tự động qua mail, app trên điện thoại ngay sau khi có khách đặt hàng, liên hệ, đăng ký form
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
                  CHUẨN SEO GOOGLE
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Mã nguồn thiết kế chuẩn seo, tích hợp công cụ tối seo khi đăng bài viết, sản phẩm theo chuẩn hiển thị trên google
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
                  TƯƠNG THÍCH MỌI THIẾT BỊ
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Website được tối ưu hiển thị tương thích trên mọi thiết bị máy tính, máy tính bảng, điện thoại.
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
                  QUẢN TRỊ ĐƠN GIẢN
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Giao diện quản trị wordpress đơn giản, dễ dàng đăng sản phẩm nội dung, hình ảnh, logo, banner
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
                  WEBSITE ĐA NĂNG
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Website sử dụng được trong mọi lĩnh vực bán hàng, dịch vụ khác nhau. Tùy chỉnh màu sắc, danh mục dễ dàng
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

      {/* /Section 5 */}

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
    </>
  );
};

export default WebLandingPage;
