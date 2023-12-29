import { cn } from "@/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface MenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  childClassName?: string;
  className?: string;
}

export const Menu = ({ childClassName, className, ...rest }: MenuProps) => {
  const commonClassName =
    "inline-block xl:h-[3px] h-[2.5px]  bg-gray-800  group-hover:bg-rose-700 group-hover:w-6  duration-300  self-start ";

  return (
    <p
      {...rest}
      className={cn(" group flex flex-col items-center gap-y-1 ", className)}
    >
      <span
        className={cn("w-6  xl:w-8 ", commonClassName, childClassName)}
      ></span>
      <span
        className={cn(
          "w-4  xl:w-6  transition-all ",
          commonClassName,
          childClassName
        )}
      ></span>
      <span
        className={cn(
          "duration-400 xl:w-4   w-2   ",
          commonClassName,
          childClassName
        )}
      ></span>
    </p>
  );
};
