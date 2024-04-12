import clsx from "clsx";
import React from "react";

interface Props {
  title: string;
  classCustom?: string;
}
const ButtonCustom = ({ title, classCustom }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className={clsx(
          "t:min-w-[240px]  h-[47px] p-[13px] flex justify-center items-center rounded-8 bg-custom-main-4 shadow-custom-1",
          classCustom
        )}
      >
        <span className="text-[#fff] font-700 text-[16px] leading-21 uppercase text-center">
          {title}
        </span>
      </button>
    </div>
  );
};

export default ButtonCustom;
