import { cn } from "@/utils";
import { StaticImageData } from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  imgSrc: StaticImageData;
  wrapperClassName?: string;
  className?: string;
  blurValue?: number;
}

export const Blurry = ({
  children,
  imgSrc,
  wrapperClassName,
  className,
  blurValue = 2,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      className={cn(
        "w-full   bg-no-repeat bg-cover bg-center   into-center relative",
        wrapperClassName
      )}
      style={{ backgroundImage: `url(${imgSrc.src})` }}
    >
      <div
        style={{ backdropFilter: `blur(${blurValue}px)` }}
        className={cn(
          "absolute inset-0 bg-black bg-opacity-50 w-full h-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
