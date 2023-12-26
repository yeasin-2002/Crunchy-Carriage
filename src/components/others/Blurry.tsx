import { cn } from "@/utils";
import { StaticImageData } from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  imgSrc: StaticImageData;
  wrapperClassName?: string;
  className?: string;
}

export const Blurry = ({
  children,
  imgSrc,
  wrapperClassName,
  className,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      className={cn(
        "w-full   bg-no-repeat bg-cover bg-center  min-h-[35rem] into-center relative",
        wrapperClassName
      )}
      style={{ backgroundImage: `url(${imgSrc.src})` }}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black bg-opacity-50 w-full h-full",
          className
        )}
        style={{ backdropFilter: "blur(2px)" }}
      >
        {children}
      </div>
    </div>
  );
};
