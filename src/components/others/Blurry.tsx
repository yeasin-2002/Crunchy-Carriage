import { cn } from "@/utils";
import { StaticImageData } from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  imgSrc: StaticImageData;
  wrapperClassName?: string;
  className?: string;
  blurValue?: number;
}

export const Blurry = ({ children, imgSrc, wrapperClassName, className, blurValue = 2, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={cn("into-center   relative w-full bg-cover   bg-center bg-no-repeat", wrapperClassName)}
      style={{ backgroundImage: `url(${imgSrc.src})` }}
    >
      <div
        style={{ backdropFilter: `blur(${blurValue}px)` }}
        className={cn("absolute inset-0 h-full w-full bg-black bg-opacity-50", className)}
      >
        {children}
      </div>
    </div>
  );
};
