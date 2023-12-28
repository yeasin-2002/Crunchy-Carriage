import product from "@/assets/products/burger.png";
import { permanentMarker } from "@/fonts";
import { cn } from "@/utils";
import Image from "next/image";

import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AwesomeProduct = ({ ...rest }: Props) => {
  return (
    <div
      className="group relative left-0 top-0 h-full  min-h-[30rem] w-full rounded-md border border-teal-800 bg-white p-4 transition-all  duration-500 hover:bg-yellow-500 group-hover:translate-y-40 "
      {...rest}
    >
      <p
        className={cn(
          "absolute   bottom-0 left-0  z-10 h-full w-full translate-y-3/4 text-center text-3xl font-bold duration-200  group-hover:translate-y-0 ",
          permanentMarker.className
        )}
      >
        Burger Bold
      </p>
      <Image src={product} alt="burger" className="z-20" />
    </div>
  );
};
