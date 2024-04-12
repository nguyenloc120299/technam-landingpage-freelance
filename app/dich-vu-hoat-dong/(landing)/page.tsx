/* eslint-disable @next/next/no-img-element */
import MainSection from "@/components/common/MainSection";
import { services } from "@/contants/contans";
import Link from "next/link";
import React from "react";

const ServiceActive = () => {
  return (
    <MainSection>
      <div className="w-full text-center mb-5 py-5">
        <h3 className="typography-1">Dịch vụ Digital Marketing</h3>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 t:grid-cols-2 l:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="min-h-[397px] w-full rounded-[10px]  flex flex-col gap-2">
                <div className="flex justify-center items-center">
                  <img src={item.img.src} alt={item.title} />
                </div>
                <div className="text-center">
                  <h4 className="text-color/1 text-[19px] font-700">
                    {item.title}
                  </h4>
                </div>
                <div className="max-w-[202px] w-full mx-auto text-center">
                  <p className="text-0A0A0A text-[15px] leading-24">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainSection>
  );
};

export default ServiceActive;
