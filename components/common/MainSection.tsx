import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string
}
const MainSection: React.FC<Props> = ({ children,className }) => {
  return (
    <section className={clsx("my-5 p-4 t:p-[50px] l:p-[100px]",className)}>{children}</section>
  );
};

export default MainSection;
