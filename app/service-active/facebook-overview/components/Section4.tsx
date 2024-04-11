import MainSection from '@/components/common/MainSection'
import img_allaspects1 from "@/assets/img-allaspects1.png.png"
import React from 'react'

const Section4 = () => {
    return (
        <div className='bg-bg-section-img1 w-full t:bg-cover bg-no-repeat  '>
            <MainSection>
                <div className='flex flex-col justify-center text-center w-full pb-10'>
                    <div className='mb-4'>
                        <h3 className='typography-1 text-[40px] mb-3'>Tiết kiệm ngân sách tối đa</h3>
                        <h3 className='typography-1 text-[40px]'>"Nhấn ga" chạy Quảng Cáo Hiệu Quả</h3>
                    </div>
                    <p className='typography-4 text-[24px]'>TechNam Marketing với nhiều năm kinh nghiệm đảm bảo thực thi thành công hơn 10+
                        chiến dịch quảng cáo Facebook thành công cho các doanh nghiệp.
                        Chúng tôi luôn mong muốn đem lại dịch vụ tốt nhất và
                        trở thành người bạn đồng hành đáng tin cậy trên mọi chặng đường phát triển của doanh nghiệp.</p>

                </div>
                <div className='flex justify-center items-center pb-10'>
                    <div className='max-w-[737px]'>
                        <img src={img_allaspects1.src} alt='Technam Marketing' className='w-full h-full object-cover' />
                    </div>

                </div>
                <div className="flex justify-center items-center">
                    <button className="t:min-w-[288px]  h-[47px] p-[13px] flex justify-center items-center rounded-8 bg-custom-main-4 shadow-custom-1">
                        <span className="text-[#fff] font-700 text-[16px] leading-21 uppercase text-center">
                            Gặp chuyên gia của chúng tôi
                        </span>
                    </button>
                </div>
            </MainSection>
        </div>
    )
}

export default Section4