/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import hero_img from "@/assets/bg-hero.png";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main className=" w-full mx-auto">
        <div className="w-full h-full ">
          <img
            src={hero_img.src}
            alt="Hero section technam marketing"
            className="w-full h-full"
          />
        </div>
        {children}
      </main>
      <MainFooter />
    </>
  );
};

export default MainLayout;
