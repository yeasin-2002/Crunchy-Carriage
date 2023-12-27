import product from "@/assets/products/burger.png";
import { permanentMarker } from "@/fonts";
import { cn } from "@/utils";
import Image from "next/image";

import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AwesomeProduct = ({ ...rest }: Props) => {
  return (
    <div
      className="group transition-all hover:bg-yellow-500 duration-500 bg-white  rounded-md w-full h-full p-4 min-h-[30rem] relative left-0 top-0  border border-teal-800 group-hover:translate-y-40 "
      {...rest}
    >
      <p
        className={cn(
          "text-3xl   text-center font-bold  duration-200 group-hover:translate-y-0 translate-y-3/4 absolute h-full bottom-0 left-0 w-full  z-10 ",
          permanentMarker.className
        )}
      >
        Burger Bold
      </p>
      <Image src={product} alt="burger" className="z-20" />
    </div>
  );
};
