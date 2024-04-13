import React from 'react'
import bg_1 from '@/assets/bg-tiktok-ads.png'
import _1 from '@/assets/tiktok-for-retail-2022x2048 1.png'
import _2 from "@/assets/3947926_1.png"
import _3 from '@/assets/img_card_1.png'
import _4 from '@/assets/image_card_2.png'
import _5 from "@/assets/rectangle_10.png"
import bg_tt from "@/assets/bg-titok-1.png"
import MainSection from '@/components/common/MainSection'
import ButtonCustom from '@/components/ButtonCustom'
import { adsTitok, dataTitokSection } from '@/contants/contans'
import clsx from 'clsx'
import RightArrow from '@/icons/RightArrow'
import LeftArrow from '@/icons/LeftArrow'
import gb_ov2 from "@/assets/gbov2.png";
import img_lccdn1 from "@/assets/img-lccdn1.png.png";
import img_lccdn2 from "@/assets/img-lccdn2.png.png";
import img_lccdn3 from "@/assets/img-lccdn3.png.png";
import img_lccdn11 from "@/assets/img-lccdn11.png.png";
import img_lccdn4 from "@/assets/img-lccdn4.png.png";
import img_lccdn5 from "@/assets/img-lccdn5.png.png";
import img_svnew from "@/assets/img-svgnew.png.png"

const AdsTiktok = () => {
    return (
        <>

            {/* ///Section 1 */}
            <div className='w-full bg-cover'
                style={{
                    background: `url(${bg_1.src})  50% / cover no-repeat`
                }}
            >
                <MainSection className='min-h-[921px] flex  flex-col justify-center'>
                    <div className='grid t:grid-cols-2 mb-4'>
                        <div className='w-full'>
                            <h3 className='text-center text-[32px] t:text-[48px]
                            font-700 uppercase leading-48 text-color/1 mb-4
                            '>Tiktok Ads Đem Lại Lợi Ích Gì?</h3>
                            <div className='flex flex-col gap-4'>
                                <p className='text-color/1 font-600 leading-30 text-[24px]
                                
                                '> TikTok Ads đem đến trọn vẹn mô hình hiển thị quảng cáo dạng phễu trong hoạt động Marketing.</p>
                                <p className='text-color/3 font-600 leading-35 text-[24px]'>Bao gồm các tầng nhận thức : </p>
                                <p className='text-color/3 text-[24px] font-600 italic leading-35'>
                                    Nhận diện thương hiệu, Tạo sự quan tâm – Tương tác với brand, thu hút khách hàng tiềm năng và chuyển đổi thành doanh số
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <ButtonCustom title='tìm hiểu thêm' classCustom='rounded-[30px]' />
                    </div>
                </MainSection>
            </div>
            {/* Section 2 */}
            <div className='w-full bg-custom-main-2'>
                <MainSection>
                    <div className='grid grid-cols-1 t:grid-cols-2'>
                        <div className='max-w-[815px] w-full'>
                            <img src={_1.src} alt='Quảng cáo trên TikTok' className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full'>
                            <h3 className='!text-left typography-4 !font-500 text-[40px] mb-3'>Quảng cáo trên TikTok</h3>
                            <p className='!text-left typography-4 text-[25px]'>Có một số điểm nổi bật so với nền tảng khác, đặc biệt là khi nói đến tiếp cận và tương tác</p>
                            <div className='mt-6 pt-6 grid t:grid-cols-2'>
                                <div className='flex justify-between items-start gap-10 flex-col'>
                                    <div className='max-w-[295px] min-h-[117px] w-full py-[27px] px-[18px] flex justify-center items-center rounded-20 bg-color/1 shadow-custom-1'>
                                        <span className='text-[#EBEBEB] text-[14px] font-500 leading-21 '>Chi phí CPM rẻ theo đánh giá của nhiều Ads thủ - Độ phủ thương hiệu rộng, tiếp cận nhiều khách hơn hơn Facebook, Google.</span>
                                    </div>
                                    <div className='max-w-[295px] min-h-[117px] w-full py-[27px] px-[18px] flex justify-center items-center rounded-20 bg-color/1 shadow-custom-1'>
                                        <span className='text-[#EBEBEB] text-[14px] font-500 leading-21 '>{`Tập trung vào video ngắn 15 – 60 giây
ấn tượng, bắt trend dễ khiến người xem thay đổi cảm xúc >> CTA.`}</span>
                                    </div>

                                </div>
                                <div className='flex justify-between items-end'>
                                    <div className='flex flex-col justify-end gap-6'>
                                        <div className='max-w-[391px] w-full'>
                                            <img src={_2.src} alt='Quảng cáo titok' className='w-full h-full' />
                                        </div>
                                    </div>

                                </div>

                                <div className='max-w-[295px] min-h-[117px] w-full py-[27px] px-[18px] flex justify-center items-center rounded-20 bg-color/1 shadow-custom-1 mt-10'>
                                    <span className='text-[#EBEBEB] text-[14px] font-500 leading-21 '>Dễ dàng tiếp cận nhiều khách hàng và
                                        tìm kiếm khách hàng tiềm năng với lượng người dùng  là 1 tỷ người.</span>
                                </div>
                                <div className='max-w-[295px] min-h-[117px] w-full py-[27px] px-[18px] flex justify-center items-center rounded-20 bg-color/1 shadow-custom-1 mt-10'>
                                    <span className='text-[#EBEBEB] text-[14px] font-500 leading-21 '>Tiếp cận dễ dàng đối tượng trẻ thuộc</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </MainSection>
            </div>
            {/* Section3 */}
            <MainSection>
                <div className='w-full flex justify-center items-center'>
                    <h3 className='typography-1 text-[36px] font-600 uppercase mb-6'>
                        Trọn Bộ Giải Pháp Quảng Cáo TikTok Cho Doanh Nghiệp
                    </h3>

                </div>
                <div className='grid grid-cols-1 t:grid-cols-3 gap-6'>
                    <div className='max-w-[411px] w-full mx-auto h-[381px] rounded-[8px] relative'
                        style={{
                            background: `url(${_4.src}) lightgray 50% / contain no-repeat`
                        }}
                    >
                        <div className='absolute bottom-0 left-0 w-full h-[164px] flex justify-center items-center p-10'
                            style={{
                                background: "rgba(2, 101, 255, 0.53)"
                            }}
                        >
                            <h4 className='text-[#fff] text-[20px] font-600 leading-24 uppercase text-center'>Tăng trưởng
                                doanh số cửa hàng bán lẻ</h4>
                        </div>
                    </div>
                    <div className='max-w-[411px] w-full mx-auto h-[381px] rounded-[8px] relative'
                        style={{
                            background: `url(${_3.src}) lightgray 50% / contain no-repeat`
                        }}
                    >
                        <div className='absolute bottom-0 left-0 w-full h-[164px] flex justify-center items-center p-10'
                            style={{
                                background: "rgba(2, 101, 255, 0.53)"
                            }}
                        >
                            <h4 className='text-[#fff] text-[20px] font-600 leading-24 uppercase text-center'>Xây dựng thương hiệu
                                cho các doanh nghiệp, nhãn hàng</h4>
                        </div>
                    </div>
                    <div className='max-w-[411px] w-full mx-auto h-[381px] rounded-[8px] relative'
                        style={{
                            background: `url(${_4.src}) lightgray 50% / contain no-repeat`
                        }}
                    >
                        <div className='absolute bottom-0 left-0 w-full h-[164px] flex justify-center items-center p-10'
                            style={{
                                background: "rgba(2, 101, 255, 0.53)"
                            }}
                        >
                            <h4 className='text-[#fff] text-[20px] font-600 leading-24 uppercase text-center'>Xây dựng thương hiệu
                                cá nhân cho các Creator</h4>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-4'>
                    <ButtonCustom title='T' classCustom='rounded-[30px]' />
                </div>
            </MainSection>

            {/* Section4 */}
            <div className='w-full bg-custom-main-2 ' >
                <MainSection >
                    <div className='text-left  pb-6 '>
                        <h3 className='text-[#fff] text-[35px] font-600 leading-52 uppercase'>Những dạng quảng cáo Tiktok phổ biến nhất hiện nay</h3>
                    </div>
                    <div className='grid grid-cols-2 t:grid-cols-4 gap-6'>
                        <div className='max-w-[370px] min-h-[332px] w-full mx-auto p-6 rounded-20 bg-[#fff] flex flex-col'>
                            <div className='text-color/1 text-[33px] font-500 leading-24 mb-6'>
                                Branding
                            </div>
                            <div className='flex-1 flex justify-center items-center w-full h-full'>
                                <p>Tập trung vào quảng bá thương hiệu, tiếp
                                    cận lượng người dùng tối đa cho tổng chiến dịch. Tối ưu hóa chi phí trong xây dựng thương hiệu. Thường được các nhãn hàng lớn yêu thích.</p>
                            </div>
                        </div>
                        <div className='max-w-[370px] min-h-[332px] w-full mx-auto p-6 rounded-20 bg-[#fff] flex flex-col'>
                            <div className='text-color/1 text-[33px] font-500 leading-24 mb-6'>
                                Brand Take Over Ads
                            </div>
                            <div className='flex-1 flex justify-center items-center w-full h-full'>
                                <p>Quảng cáo có thời lượng từ 3 - 6 giây, được
                                    hiển thị ngay khi người dùng mở Tiktok. Giúp
                                    nhãn hàng xây dựng nhận biết thương hiệu.
                                    Truyền tải thông điệp trong thời gian ngắn.</p>
                            </div>
                        </div>
                        <div className='max-w-[370px] min-h-[332px] w-full mx-auto p-6 rounded-20 bg-[#fff] flex flex-col'>
                            <div className='text-color/1 text-[33px] font-500 leading-24 mb-6'>
                                Top View Ads
                            </div>
                            <div className='flex-1 flex justify-center items-center w-full h-full'>
                                <p>Là quảng cáo dạng video dọc và ngắn, xuất
                                    hiện ngay khi người dùng mở ứng dụng
                                    TikTok, thu hút sự chú ý của users, tạo ra trải
                                    nghiệm tự nhiên và sinh động đối với người
                                    dùng.</p>
                            </div>
                        </div>
                        <div className='max-w-[370px] min-h-[332px] w-full mx-auto p-6 rounded-20 bg-[#fff] flex flex-col'>
                            <div className='text-color/1 text-[30px] font-500 leading-[30px] mb-6'>
                                Reach & Frequency
                                In – Feed Ads
                            </div>
                            <div className='flex-1 flex justify-center items-center w-full h-full'>
                                <p>Định dạng quảng videos ngắn, xuất hiện tự
                                    nhiên trong trang đề xuất người dùng của
                                    app TikTok. Quảng cáo sẽ xuất hiện ở vị trí
                                    thứ 5 sau 4 videos tự nhiên của Tiktok </p>
                            </div>
                        </div>
                    </div>
                </MainSection>
            </div>

            {/* Section5 */}

            <div className='w-full bg-no-repeat bg-[103%] min-h-[768px] mt-[-20px] flex justify-center items-center'
                style={{
                    backgroundImage: `url(${bg_tt.src})`
                }}
            >
                <MainSection>

                    <div className="grid grid-cols-2 t:grid-cols-2 l:grid-cols-4 gap-10">
                        {adsTitok.map((item, index) => (
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

            {/* Section 6 */}

            <div className='w-full min-h-[3000px] mt-[-20px] pb-6'
                style={{
                    background: `url(${_5.src}) -3px -1.002px / 101.354% 100.034% no-repeat`
                }}
            >
                <MainSection>
                    <div className='flex justify-center items-center mb-6 pb-6'>
                        <h3 className='typography-1 text-[40px]
                        font-600'>Dịch Vụ Của Chúng Tôi</h3>
                    </div>
                    <div className='grid grid-cols-2 t:grid-cols-3 gap-4'>
                        {
                            dataTitokSection.map((item, index) => (
                                <div className='max-w-[350px] min-h-[411px] rounded-[62px] bg-[#fff] shadow-custom-2 flex flex-col mx-auto w-full mb-4' key={index}>
                                    <div className='h-[190px]'>
                                        <div className='mt-[-10px] ml-[-10px]'>
                                            <img src={item.img.src} />
                                        </div>
                                    </div>
                                    <div className='flex-1 flex flex-col p-5 gap-4'>
                                        <h3 className='typography-1 !font-400 text-[27px] leading-30 !text-left'>01. Quảng Cáo Chuyển Đổi TikTok</h3>
                                        {item.content}
                                    </div>
                                    <div className='flex justify-end items-center pb-6 px-10'>
                                        <div className='text-[#e08e13]'>Xem thêm</div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </MainSection>

                <MainSection>
                    <div className="w-full text-center flex justify-center flex-col items-center mb-5 py-5">
                        <h3 className="typography-1 mb-3 !text-[28px] !t:text-[40px]">
                            Quy Trình Triển Khai Tiktok Ads
                        </h3>
                        <p className='text-[36px]'>
                            TechNam Marketing vẫn luôn không ngừng cải tiến quy trình để đem đến hiệu quả quảng cáo
                            tốt nhất
                        </p>
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
                                            Bước 1
                                        </h5>
                                        <p className="text-6C6C6C leading-21 text-[16px]">
                                            . Tiếp nhận nhu cầu, nghành nghề và loại hình chiến dịch sẽ chạy. Tư vấn hướng đi tối ưu và phù hợp.
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
                                            Bước 2
                                        </h5>
                                        <p className="text-6C6C6C leading-21 text-[16px]">
                                            . Xác định mục tiêu, ngân sách, thống nhất KPI. Thỏa thuận ký hợp đồng và thông báo khoản chi tiêu
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
                                            Bước 3
                                        </h5>
                                        <p className="text-6C6C6C leading-21 text-[16px]">
                                            . Tiếp nhận các thông tin trang đích, Website, App, shop TMĐT. Tối ưu các điều kiện để phù hợp chính sách, tỉ lệ chuyển đổi chạy quảng cáo Tiktok.
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
                                            Bước 4
                                        </h5>
                                        <p className="text-6C6C6C leading-21 text-[16px]">
                                            . Giai đoạn Test, trong quy trình của chúng tôi bắt buộc phải có giai đoạn này. Nó thường kéo dài từ 15 – 20 ngày giúp đánh giá, tối ưu, loại bỏ những định kiến chủ quan.
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
                                            Bước 5
                                        </h5>
                                        <p className="text-6C6C6C leading-21 text-[16px]">
                                            . Giai đoạn vít ads sẽ được kỹ thuật viên loại bỏ các chiến dịch kém hiệu quả, đẩy mạnh ngân sách vào chiến dịch tốt hơn.
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
                                            Bước 6
                                        </h5>
                                        <p className="text-6C6C6C leading-21 text-[16px]">
                                            . Báo cáo định kỳ theo tuần và tháng, chuyên viên sẽ gửi chi tiết số liệu, ngân sách và kết quả đem lại.
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


            </div>
            <MainSection>
                <h3 className='text-center typography-1 text-[36px]'>
                    Tại sao nên chạy Tiktok Ads tại TechNam Marketing
                </h3>
                <div className='relative'>
                    <img src={img_svnew.src} />
                </div>
            </MainSection>
        </>
    )
}

export default AdsTiktok