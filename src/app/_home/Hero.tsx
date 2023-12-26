import cover from "@/assets/covers/add1_cover.jpg";
import starImg from "@/assets/covers/banner/smoke.jpg";
import burgerImg from "@/assets/covers/burger/bugerOnHand.jpg";
import { Blurry } from "@/components";

import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface HeroProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Hero = ({ ...rest }: HeroProps) => {
  return (
    <div {...rest} className="grid grid-cols-2">
      <Blurry imgSrc={burgerImg} className="into-center">
        <h2 className="text-6xl font-bold text-center  text-gray-100">
          THE BEST BURGER
        </h2>
      </Blurry>
      <Blurry imgSrc={starImg} className="into-center">
        <h2 className="text-6xl font-bold text-center  text-gray-100  translate-y-16">
          IN YOUR TOWN
        </h2>
      </Blurry>
    </div>
  );
};
