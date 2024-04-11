import { menus } from "@/contants/contans";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}
const NavDrawer = ({ open, onClose }: Props) => {
  return (
    <div
      className={clsx(
        "fixed top-0  z-40 h-screen p-4 overflow-y-auto transition-transform   bg-white w-80 bg-[#fff]",
        {
          "right-0": open,
          "right-[-100%] translate-x-full": !open,
        }
      )}
    >
      <button
        type="button"
        onClick={onClose}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center  "
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="flex flex-col gap-4">
        <ul className="font-medium flex flex-col p-4  mt-4 ">
          {menus.map((menu, index) => (
            <li key={index}>
              <Link
                onClick={onClose}
                href={menu.key}
                className="block py-2 px-3 text-color/2    text-shadow-1  uppercase text-[16px] font-700"
                aria-current="page"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavDrawer;
