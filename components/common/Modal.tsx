"use client";

import useBreakpoint from "@/hooks/useBreakpoint";
import clsx from "clsx";
import React, { ReactNode, useRef } from "react";
interface Props {
  header: React.ReactNode;
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  size?: "default" | "md" | "full";
  isOpen: boolean;
  closable?: boolean;
  onCancel: () => void;
  customContainerClass?: string;
}
const Modal = ({
  header = true,
  title,
  children,
  footer,
  size,
  isOpen,
  closable = true,
  onCancel,
  customContainerClass,
}: Props) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const breakpoint = useBreakpoint();

  return (
    <div
      style={{
        display: isOpen ? "flex" : "none",
      }}
      className={clsx(
        "t:inset-0 fixed left-0 right-0 top-0 z-[100]  max-h-full w-full bg-others-modal-background p-4 t:cursor-pointer h-full",
        "no-scrollbar items-center justify-center t:overflow-y-scroll",
        {
          "!p-0": size === "full",
        }
      )}
    >
      <div
        ref={ref}
        className={clsx(` relative max-h-full w-full`, {
          "max-w-[480px]": size === "default",
          "max-w-full": size === "full",
          "max-w-[720px]": size === "md",
          "!absolute inset-0": size === "full" && breakpoint === "mobile",
        })}
      >
        <div
          className={clsx(
            "relative flex flex-col overflow-hidden bg-[#fff] shadow rounded-[12px]",
            customContainerClass,
            {
              "h-full": size === "full",
              "rounded-none": size === "full",
            }
          )}
        >
          <div
            className={clsx(
              "flex items-center justify-between gap-4 rounded-t p-4"
            )}
          >
            {header && header}
            {title && (
              <h3 className="mobile-heading-h3 t:desktop-heading-h3 font-[800] text-Gray/9">
                {title}
              </h3>
            )}

            {closable && (
              <div
                onClick={onCancel}
                className="hover-text-gray-900 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200"
                data-modal-hide="defaultModal"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </div>
            )}
          </div>

          <div className={clsx("no-scrollbar flex-1 overflow-scroll")}>
            {children}
          </div>
          <div>{footer}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
