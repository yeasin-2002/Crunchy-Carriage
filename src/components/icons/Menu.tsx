import { DetailedHTMLProps, HTMLAttributes } from "react";

interface MenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Menu = ({ ...rest }: MenuProps) => {
  return (
    <div {...rest} className=" flex flex-col items-center gap-y-1 group ">
      <span className="w-6 h-[2.5px] inline-block group-hover:bg-rose-700 duration-300   bg-gray-800"></span>
      <span className="w-4  group-hover:w-6  group-hover:bg-rose-700  duration-300 self-start transition-all  h-[2.5px]  inline-block bg-gray-800"></span>
      <span className="w-2  group-hover:w-6 h-[2.5px]  group-hover:bg-rose-700  duration-300 self-start duration-400 inline-block bg-gray-800"></span>
    </div>
  );
};
