/* eslint-disable @next/next/no-img-element */
import React from "react";
import thumbnail from "@/assets/thumnail.png";
const About = () => {
  return (
    <div className="grid grid-cols-1 d:grid-cols-2 px-4 gap-4">
      <div className="flex flex-col gap-2">
        <div className="text-[20px] text-[#353434] text-custom-app-1 italic font-[500] uppercase">
          Về chúng tôi
        </div>
        <div className="flex items-center ">
          <div className="w-[165px]">
            <h4 className="text-[#0358FF] text-[30px] font-[400]">TECHNAM</h4>
          </div>
          <h4 className="text-[#0358FF] text-[30px] font-[900] leading-7 t:leading-[20px]">
            ĐÓN ĐẦU XU HƯỚNG
          </h4>
        </div>
        <h4 className="text-[#0358FF] text-[30px] font-[900] leading-7 t:leading-[20px] mb-2">
          CÔNG NGHỆ CHUYỂN ĐỔI SỐ &
        </h4>
        <h4 className="text-[#0358FF] text-[30px] font-[900] leading-7 t:leading-[20px] mb-2">
          TRUYỀN THÔNG MARKETING
        </h4>
        <div className="w-[150px] h-[5px] rounded-[2px] bg-[#0040FC]"></div>
        <div className="mt-6">
          <p className="text-[#353434] font-[500] leading-6">
            {`Chính thức đi vào hoạt động từ năm 2015, đến nay TechNam đã có gần
            10 năm kinh nghiệm trong lĩnh vực Marketing - Truyền thông. Các giải
            pháp Marketing Online của TechNam góp phần rất lớn trong quá trình
            xây dựng và phát triển thương hiệu, tăng trưởng doanh thu cho hàng
            trăm doanh nghiệp lớn nhỏ. Nắm giữ nhiều công nghệ hàng đầu, TechNam
            sở hữu quy trình làm việc chuyên nghiệp và đội ngũ kỹ thuật giàu
            kinh nghiệm, tự tin mang đến những sản phẩm chất lượng, dịch vụ tốt
            nhất cho khách hàng. TechNam - Giúp doanh nghiệp chinh phục khách
            hàng ở mọi điểm chạm online.`}
          </p>
          <br />
          <p className="text-[#353434] font-[500] leading-6">
            {`Officially launched in 2015, TechNam has accumulated nearly 10 years of experience in the field of Marketing and Communications. TechNam's Online Marketing solutions have played a significant role in building and developing brands, as well as increasing revenue for hundreds of businesses, both large and small. With access to cutting-edge technologies and a professional workflow, TechNam possesses an experienced technical team, confidently delivering high-quality products and the best services to its customers. TechNam - Helping businesses conquer customers at every online touchpoint.`}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-start mt-[-75px] t:mt-[-30%] mb-[-75px] md:mb-0">
        <img src={thumbnail.src} alt="Video giới thiệu TechNam Marketing" />
      </div>
    </div>
  );
};

export default About;
