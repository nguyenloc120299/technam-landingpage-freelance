/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { menus } from "@/contants/contans";
import clsx from "clsx";
import NavDrawer from "./components/NavDrawer";
import useOnClickOutside from "@/hooks/useClickOutside";

const MainHeader = () => {
  const [isDrawer, setIsDrawer] = useState(false);
  const [checkWidth, setCheckWidth] = useState(0);
  const ref1 = useRef<any>()
  const ref2 = useRef<any>()
  const ref3 = useRef<any>()

  const [isShowDropdownMenu, setIsShowDropdownMenu] = useState(false);
  const [isShowDropdownMenu1, setIsShowDropdownMenu1] = useState(false);
  const [isShowDropdownMenu2, setIsShowDropdownMenu2] = useState(false);

  useOnClickOutside(ref1,()=>{
    setIsShowDropdownMenu(false)
    setIsShowDropdownMenu1(false)
    setIsShowDropdownMenu2(false)
  })

  useEffect(() => {
    const handleResize = () => {
      setCheckWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "bg-main-header h-[88px] flex-shrink-0  w-full top-0 z-[999] absolute"
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
          onClick={() => setIsDrawer(true)}
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
        <div className="hidden w-full l:block t:w-1/2" id="navbar">
          <ul className="font-medium flex flex-col p-4 t:p-0 mt-4 t:flex-row t:space-x-8 rtl:space-x-reverse t:mt-0  ">
            {menus.map((menu, index) => (
              <>
                {!menu?.subMenus ? (
                  <li key={index}>
                    <Link
                      href={menu.key}
                      className="block py-2 px-3 text-[#fff]  rounded  text-shadow-1  uppercase text-[14px]  d:text-[16px] font-lato"
                      aria-current="page"
                    >
                      {menu.name}
                    </Link>
                  </li>
                ) : (
                  <li key={index}>
                    <div
                      className="block py-2 px-3 text-[#fff]  rounded  text-shadow-1  uppercase text-[14px]  d:text-[16px] font-lato relative"
                      aria-current="page"
                      onClick={() => setIsShowDropdownMenu(true)}
                    >
                      {menu.name}
                    </div>
                    <div
                    ref={ref1}
                      className={clsx(
                        "z-10 absolute bg-[#fff] divide-y divide-gray-100 rounded-10 shadow w-[200px]",
                        {
                          hidden: !isShowDropdownMenu,
                          block: isShowDropdownMenu,
                        }
                      )}
                    >
                      <ul className="font-medium flex flex-col p-4 t:p-0 mt-4  ">
                        {menu?.subMenus.map((submenu, index) => (
                          <>
                            {!submenu?.subMenus ? (
                              <li key={index}>
                                <Link
                                  href={submenu.key}
                                  className="block py-2 px-3 text-[#000]  rounded  text-shadow-1  uppercase text-[14px]  d:text-[16px] font-lato"
                                  aria-current="page"
                                  onClick={()=>setIsShowDropdownMenu(false)}
                                >
                                  {submenu.name}
                                </Link>
                              </li>
                            ) : (
                              <li key={index}>
                                <div
                                  onClick={() => setIsShowDropdownMenu1(true)}
                                  className="block py-2 px-3 text-[#000]  rounded  text-shadow-1  uppercase text-[14px]  d:text-[16px] font-lato relative"
                                  aria-current="page"
                                >
                                  {submenu.name}
                                  <div
                                    className={clsx(
                                      "z-10 absolute bg-[#fff] divide-y divide-gray-100 rounded-10 shadow w-[200px]  top-0",
                                      {
                                        "right-[-205px]": checkWidth > 1560,
                                        "left-[-205px]": checkWidth < 1560,
                                        hidden: !isShowDropdownMenu1,
                                        block: isShowDropdownMenu1,
                                      }
                                    )}
                                  >
                                    <ul className="font-medium flex flex-col p-4 ">
                                      {submenu?.subMenus?.map((sub1, index) => (
                                        <>
                                          {!sub1?.subMenus ? (
                                            <li key={index}>
                                              <Link
                                                href={sub1.key}
                                                className="block py-2 px-3 text-[#000]  rounded  text-shadow-1  uppercase text-[14px]  d:text-[16px] font-lato"
                                                aria-current="page"
                                                onClick={()=>{
                                                  setIsShowDropdownMenu(false)
                                                  setIsShowDropdownMenu1(false)
                                                  setIsShowDropdownMenu2(false)
                                                }}
                                                
                                              >
                                                {sub1.name}
                                              </Link>
                                            </li>
                                          ) : (
                                            <li key={index}>
                                              <div
                                                className="block py-2 px-3 text-[#000]  rounded  text-shadow-1  uppercase text-[14px]  d:text-[16px] font-lato relative"
                                                aria-current="page"
                                                onClick={() =>
                                                  setIsShowDropdownMenu2(true)
                                                }
                                              >
                                                {sub1.name}
                                                <div
                                                  className={clsx(
                                                    "z-10 absolute bg-[#fff] divide-y divide-gray-100 rounded-10 shadow w-[200px]  top-0",
                                                    {
                                                      "right-[-220px]":
                                                        checkWidth > 1560,
                                                      "left-[-220px]":
                                                        checkWidth < 1560,
                                                      hidden:
                                                        !isShowDropdownMenu2,
                                                      block:
                                                        isShowDropdownMenu2,
                                                    }
                                                  )}
                                                >
                                                  <ul className="font-medium flex flex-col p-4 ">
                                                    {sub1?.subMenus?.map(
                                                      (sub2, index) => (
                                                        <li key={index}>
                                                          <Link
                                                            href={sub2.key}
                                                            className="block py-2 px-3 text-[#000]  rounded  text-shadow-1  uppercase text-[14px]  d:text-[16px] font-lato"
                                                            aria-current="page"
                                                            onClick={()=>{
                                                              setIsShowDropdownMenu(false)
                                                              setIsShowDropdownMenu1(false)
                                                              setIsShowDropdownMenu2(false)
                                                            }}
                                                          >
                                                            {sub2.name}
                                                          </Link>
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                </div>
                                              </div>
                                            </li>
                                          )}
                                        </>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            )}
                          </>
                        ))}
                      </ul>
                    </div>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
        <NavDrawer open={isDrawer} onClose={() => setIsDrawer(false)} />
      </div>
    </nav>
  );
};

export default MainHeader;
