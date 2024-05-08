import MainSection from "@/components/common/MainSection";
import _1 from "@/assets/tiktok-for-retail-2022x2048 1.png";
import _2 from "@/assets/3947926_1.png";
import _3 from "@/assets/img_card_1.png";
import _4 from "@/assets/image_card_2.png";
import _5 from "@/assets/rectangle_10.png";
import _bg_1 from "@/assets/bg-main-4.png";
import _bg_2 from "@/assets/bg-main-5.png";
import img_7 from "@/assets/home_7.png";
import img_lccdn1 from "@/assets/img-lccdn1.png.png";
import img_lccdn2 from "@/assets/img-lccdn2.png.png";
import img_lccdn3 from "@/assets/img-lccdn3.png.png";
import img_lccdn11 from "@/assets/img-lccdn11.png.png";
import img_lccdn4 from "@/assets/img-lccdn4.png.png";
import img_lccdn5 from "@/assets/img-lccdn5.png.png";
import fb_ov1 from "@/assets/fb-ov1.png";
import gb_ov2 from "@/assets/gbov2.png";
import React from "react";
import ButtonCustom from "@/components/ButtonCustom";
import clsx from "clsx";
import { adsCrossPlatform, dataGrossPlatformSection } from "@/contants/contans";
import RightArrow from "@/icons/RightArrow";
import LeftArrow from "@/icons/LeftArrow";
import Check from "@/icons/Check";

const AdsCrossPlatform = () => {
  return (
    <>
      {/* Section1 */}
      <MainSection>
        <div className="w-full flex justify-center items-center"></div>
        <div className="grid grid-cols-1 t:grid-cols-3 gap-6">
          <div
            className="max-w-[411px] w-full mx-auto h-[381px] rounded-[8px] relative"
            style={{
              background: `url(${_4.src}) lightgray 50% / contain no-repeat`,
            }}
          >
            <div
              className="absolute bottom-0 left-0 w-full h-[217px] flex flex-col justify-center items-start p-4"
              style={{
                background: "rgba(2, 101, 255, 0.53)",
              }}
            >
              <h4 className="text-[#fff] text-[20px] font-600 leading-24 uppercase text-left mb-2">
                Tăng trưởng Google Ads
              </h4>
              <p className="text-[#fff] text-left leading-24 text-[19px] font-400">
                Google đã trở thành công cụ tìm kiếm số 1 hiện nay trên thế
                giới. Theo thống kê tại Việt Nam, 90% số người dùng sử dụng
                Google cho các nhu cầu tìm kiếm của mình.
              </p>
            </div>
          </div>
          <div
            className="max-w-[411px] w-full mx-auto h-[381px] rounded-[8px] relative"
            style={{
              background: `url(${_3.src}) lightgray 50% / contain no-repeat`,
            }}
          >
            <div
              className="absolute bottom-0 left-0 w-full h-[217px] flex flex-col justify-center items-start p-4"
              style={{
                background: "rgba(2, 101, 255, 0.53)",
              }}
            >
              <h4 className="text-[#fff] text-[20px] font-600 leading-24 uppercase text-left mb-2">
                Zalo Ads
              </h4>
              <p className="text-[#fff] text-left leading-24 text-[19px] font-400">
                Tại sao doanh nghiệp nên chọn Zalo hiện nay có hơn 60 triệu
                người dùng hàng tháng tại Việt Nam. Đây là một con số rất đáng
                kể khi tổng lượng người sử dụng Zalo bằng gần 70% số người sử
                dụng nền tảng mạng xã hội Facebook.
              </p>
            </div>
          </div>
          <div
            className="max-w-[411px] w-full mx-auto h-[381px] rounded-[8px] relative"
            style={{
              background: `url(${_4.src}) lightgray 50% / contain no-repeat`,
            }}
          >
            <div
              className="absolute bottom-0 left-0 w-full h-[217px] flex flex-col justify-center items-start p-4"
              style={{
                background: "rgba(2, 101, 255, 0.53)",
              }}
            >
              <h4 className="text-[#fff] text-[20px] font-600 leading-24 uppercase text-left mb-2">
                E - commerce
              </h4>
              <p className="text-[#fff] text-left leading-24 text-[19px] font-400">
                Vì sao cần quảng cáo E - Commerce?Quảng cáo sàn TMĐT có khả năng
                target chuyên sâu & tiếp cận đúng đối tượng khách hàng mục tiêu,
                tiết kiệm chi phí marketing, tăng độ nhận diện thương hiệu trên
                sàn, từ đó giúp doanh nghiệp tăng trưởng doanh số bán hàng.
              </p>
            </div>
          </div>
        </div>
      </MainSection>

      {/* Section 2 */}

      <MainSection className="bg-custom-main-1 relative">
        <div className="w-full py-12">
          <div className="flex flex-col t:ml-6">
            <h3
              className="text-[#fff] text-[32px]
                        t:text-[40px] font-700 leading-14 uppercase mb-3
                        "
            >
              tech nam marketing
            </h3>
            <h4 className="text-[28px] t:text-[32px] font-600 leading-52 uppercase text-[#fff]">
              Mang lại 6 giá trị tốt nhất dành cho doanh nghiệp
            </h4>
          </div>
          <div className="w-full mt-6 grid grid-cols-2 t:grid-cols-3 gap-4">
            <div className="max-w-[370px] w-full mx-auto flex justify-center items-center bg-[#fff] rounded-20 shadow-custom-1 min-h-[80px] p-4">
              <span className="text-color/1 text-[26px] leading-24">
                Đột phá doanh thu
              </span>
            </div>
            <div className="max-w-[370px] w-full mx-auto flex justify-center items-center bg-[#fff] rounded-20 shadow-custom-1 min-h-[80px] p-4">
              <span className="text-color/1 text-[26px] leading-24 font-600">
                Tiết kiệm chi phí
              </span>
            </div>
            <div className="max-w-[370px] w-full mx-auto flex justify-center items-center bg-[#fff] rounded-20 shadow-custom-1 min-h-[80px] p-4">
              <span className="text-color/1 text-[26px] leading-24">
                Mở rộng cơ hội kinh doanh
              </span>
            </div>
            <div className="max-w-[370px] w-full mx-auto flex justify-center items-center bg-[#fff] rounded-20 shadow-custom-1 min-h-[80px] p-4">
              <span className="text-color/1 text-[26px] leading-24">
                Bảo hành dịch vụ
              </span>
            </div>
            <div className="max-w-[370px] w-full mx-auto flex justify-center items-center bg-[#fff] rounded-20 shadow-custom-1 min-h-[80px] p-4">
              <span className="text-color/1 text-[26px] leading-24">
                Chi phí hợp lý
              </span>
            </div>
            <div className="max-w-[370px] w-full mx-auto flex justify-center items-center bg-[#fff] rounded-20 shadow-custom-1 min-h-[80px] p-4">
              <span className="text-color/1 text-[26px] leading-[29px] text-center ">
                Thiết lập mối quan hệ với khách hàng
              </span>
            </div>
          </div>
          <div className="my-6 py-6 w-full flex justify-center items-center">
            <ButtonCustom
              title="tư vấn ngay"
              classCustom="rounded-[50px] border-[2px] border-[#fff]"
            />
          </div>
        </div>
        <div className="h-full l:min-h-[641px] l:border-[4px] border-[#fff] w-full relative">
          <div className="l:absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full grid grid-cols-1 l:grid-cols-2">
              <div className="flex justify-start items-center mb-5 l:mb-0 p-4">
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#fff] text-[32px] d:text-[37px] font-[700] leading-[45px]">
                    Hiển thị quảng cáo cho khách hàng khi họ đang tìm kiếm các
                    doanh nghiệp
                  </h3>
                  <p className="text-[#fff] text-[12px] d:text-[20px] mb-4">
                    Khách hàng sẽ cảm thấy an tâm hơn khi doanh nghiệp của bạn
                    có đầy đủ các thông tin được xác thực tại Google. Bạn chỉ
                    phải trả tiền khi quảng cáo được khách hàng nhấp vào để đi
                    tới trang web hoặc khi khách hàng gọi đến doanh nghiệp của
                    bạn.
                  </p>
                  <h3 className="text-[#fff] text-[32px] d:text-[37px] font-[700] leading-[45px]">
                    Hiển thị khi mọi người tìm kiếm sản phẩm / dịch vụ mà bạn
                    cung cấp
                  </h3>
                  <p className="text-[#fff] text-[12px] d:text-[20px] mb-4">
                    Google luôn là trang tìm kiếm hàng đầu mà mọi người sử dụng
                    để kiếm những việc cần làm, những địa điểm muốn đến và những
                    thứ muốn mua. Quảng cáo của bạn có thể xuất hiện trên Google
                    ngay khi có ai đó tìm kiếm các sản phẩm hoặc dịch vụ tương
                    tự như sản phẩm và dịch vụ của bạn.
                  </p>
                </div>
              </div>
              <div className="w-full h-full relative flex justify-center items-center">
                <div className="f l:absolute right-[-20px] top-[-20px] w-full h-full flex justify-center l:justify-end z-10">
                  <img
                    src={img_7.src}
                    alt="Technam Marketing ảnh 7"
                    className="w-full h-full l:h-[675px] max-w-[750px]"
                  />
                </div>
                {/* <div className="absolute right-1/2   t:right-[-100px] t:bottom-[-100px] flex justify-end items-end">
                <div className="w-[500px] h-[500px] blur_custom1 "></div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </MainSection>

      {/* Section 3 */}

      <MainSection>
        <div className="w-full my-4">
          <h3 className="text-color/1 text-[32px] t:text-[40px] leading-48 font-700 uppercase text-center">
            Triển khai chiến dịch quảng cáo thành công ngoài mong đợi Chỉ cần
            bạn tin tưởng vào chúng tôi!
          </h3>
        </div>
        <div className="my-4 grid grid-cols-2 t:grid-cols-4 gap-4">
          <div className="bg-custom-main-2 rounded-20 max-w-[295px] w-full mx-auto flex flex-col px-6 py-10 gap-[40px] min-h-[282px]">
            <div>
              <h3 className=" text-left text-[14px] font-600 leading-21 uppercase text-[#fff]">
                Thu hút thêm khách hàng
              </h3>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <p className="text-left text-[14px] leading-21  text-[#fff]">
                Để lại thông tin như link đăng ký, nút gọi, chỉ đường,... khách
                hàng sẽ dễ dàng truy cập và xem các thông tin về doanh
                nghiệp/sản phẩm, thúc đẩy doanh thu cho doanh nghiệp
              </p>
            </div>
          </div>
          <div className="bg-custom-main-2 rounded-20 max-w-[295px] w-full mx-auto flex flex-col px-6 py-10 gap-[40px] min-h-[282px]">
            <div>
              <h3 className=" text-left text-[14px] font-600 leading-21 uppercase text-[#fff]">
                Tiếp cận đúng khách hàng tiềm năng
              </h3>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <p className="text-left text-[14px] leading-21  text-[#fff]">
                Khi khách hàng tìm kiếm những sản phẩm/dịch vụ liên quan tới
                những gì mà công ty đang kinh doanh, quảng cáo sẽ được hiển thị
                trên máy tính hoặc thiết bị di động.
              </p>
            </div>
          </div>
          <div className="bg-custom-main-2 rounded-20 max-w-[295px] w-full mx-auto flex flex-col px-6 py-10 gap-[40px] min-h-[282px]">
            <div>
              <h3 className=" text-left text-[14px] font-600 leading-21 uppercase text-[#fff]">
                Lựa chọn đúng phạm vi mà bạn thiết lập
              </h3>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <p className="text-left text-[14px] leading-21  text-[#fff]">
                Bạn sẽ có quyền thiết lập phạm vi mà quảng cáo hiển thị, giúp
                tiếp cận chính xác khách hàng mục tiêu.
              </p>
            </div>
          </div>
          <div className="bg-custom-main-2 rounded-20 max-w-[295px] w-full mx-auto flex flex-col px-6 py-10 gap-[40px] min-h-[282px]">
            <div>
              <h3 className=" text-left text-[14px] font-600 leading-21 uppercase text-[#fff]">
                Ngân sách ít - hiệu quả cao - Chi phí minh bạch
              </h3>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <p className="text-left text-[14px] leading-21  text-[#fff]">
                Với các chiến dịch trên Google Ads, bạn có thể kiểm soát ngân
                sách tối ưu nhất bằng cách theo dõi cách thức mà chiến dịch hoạt
                động cùng với ngân sách đã thiết lập trước.
              </p>
            </div>
          </div>
        </div>
      </MainSection>

      {/* Section 4 */}
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
          <div className="grid grid-cols-2 t:grid-cols-2 l:grid-cols-4 gap-10">
            {adsCrossPlatform.map((item, index) => (
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
                  <h5 className="text-[#fff] text-[15px] leading-17 font-500 mb-6">
                    {item.title}
                  </h5>
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

      {/* Section 6 */}

      <MainSection>
        <div className="w-full text-center flex justify-center flex-col items-center mb-5 py-5">
          <h3 className="typography-1 mb-3 !text-[28px] !t:text-[40px]">
            Các hình thức Quảng Cáo trên sàn thương mại điện tử
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
                    Quảng cáo tìm kiếm sản phẩm
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Quảng cáo sẽ hiển thị tại trang kết quả tìm kiếm khi Người
                    mua tìm kiếm với từ khóa mà bạn đã thiết lập cho sản phẩm
                    đấu thầu của mình.
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
                    Quảng cáo tìm kiếm Shop
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Quảng cáo có Tên, Logo hình ảnh và khẩu hiệu của Shop bạn
                    sẽ xuất hiện ở vị trí trên cùng trang kết quả tìm kiếm khi
                    Người mua tìm kiếm từ khóa có liên quan đến quảng cáo của
                    bạn.
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
                    Quảng cáo khám phá
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Quảng cáo sẽ hiển thị ở mục Sản Phẩm Tương Tự hoặc Có Thể
                    Bạn Cũng Thích trong trang chi tiết Sản phẩm để thu hút
                    nhiều Người mua hơn.
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
                    Quảng cáo tài trợ hiển thị sản phẩm
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Quảng cáo sẽ mang sản phẩm của bạn đến với khách hàng tiềm
                    năng, dựa trên hành vi tìm kiếm và mua hàng, giúp tăng truy
                    cập đến trang sản phẩm, từ đó tăng tỷ lệ chuyển đổi và đẩy
                    mạnh doanh thu.
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
                    Quảng cáo tài trợ sản phẩm mới
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Đưa sản phẩm mới tiếp cận đến khách hàng và vào thị trường
                    trong thời gian tối ưu nhất, giúp thúc đẩy lượt truy cập và
                    đơn hàng.
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
                    Quảng cáo gian hàng
                  </h5>
                  <p className="text-6C6C6C leading-21 text-[16px]">
                    . Quảng cáo gian hàng là hình thức hiệu quả để thu hút thêm
                    nhiều traffic về trang cửa hàng của Nhà Bán Hàng.
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

      {/* Section 5 */}
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
                  Gói Quảng Cáo sàn thương mại điện tử tại TechNam Marketing
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
                    Quản lý và tối ưu bởi đội ngũ chuyên viên giàu kinh nghiệm.
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
                    Cung cấp tối đa từ khóa người mua tìm kiếm theo ngành hàng
                    kinh doanh.
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
                    Tối ưu tăng lượt tương tác và tỉ lệ chuyển đổi đơn hàng.
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
                    Báo cáo chiến dịch hàng tuần.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <ButtonCustom title="Gặp chuyên gia của chúng tôi" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdsCrossPlatform;
