import { DetailedHTMLProps, HTMLAttributes } from "react";

interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Menu = ({ ...rest }: MenuProps) => {
  return (
    <div {...rest} className=" group flex flex-col items-center gap-y-1 ">
      <span className="inline-block h-[2.5px] w-6 bg-gray-800 duration-300   group-hover:bg-rose-700"></span>
      <span className="inline-block  h-[2.5px]  w-4  self-start bg-gray-800 transition-all  duration-300  group-hover:w-6 group-hover:bg-rose-700"></span>
      <span className="duration-400  inline-block h-[2.5px]  w-2  self-start bg-gray-800 duration-300 group-hover:w-6 group-hover:bg-rose-700"></span>
    </div>
  );
};
