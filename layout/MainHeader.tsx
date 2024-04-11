/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { menus } from "@/contants/contans";
import clsx from "clsx";
import NavDrawer from "./components/NavDrawer";

const MainHeader = () => {
const [isDrawer,setIsDrawer] = useState(false)

  return (
    <nav
      className={clsx(
        "bg-main-header h-[88px] flex-shrink-0  w-full top-0 z-[999] absolute",
        
      )}
    >
      <div className=" flex  items-center justify-between mx-auto py-4 px-8">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <div className="w-[200px] h-[50px]  flex-shrink-0 ">
            <img
              src={logo?.src}
              className="w-full h-full"
              alt="Tech name logo"
            />
          </div>
        </Link>
        <button
          onClick={()=>setIsDrawer(true)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#fff] rounded-lg l:hidden"
        >
          <svg
            className="w-10 h-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full l:block t:w-auto" id="navbar">
          <ul className="font-medium flex flex-col p-4 t:p-0 mt-4 t:flex-row t:space-x-8 rtl:space-x-reverse t:mt-0  ">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link
                  href={menu.key}
                  className="block py-2 px-3 text-[#fff]  rounded  text-shadow-1  uppercase text-[14px]  d:text-[16px] font-lato"
                  aria-current="page"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <NavDrawer open={isDrawer} onClose={()=>setIsDrawer(false)}/>
      </div>
    </nav>
  );
};

export default MainHeader;
