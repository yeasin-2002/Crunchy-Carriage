import starImg from "@/assets/covers/banner/smoke.jpg";
import burgerImg from "@/assets/covers/burger/bugerOnHand.jpg";
import { Blurry } from "@/components";

import { DetailedHTMLProps, HTMLAttributes } from "react";

interface HeroProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Hero = ({ ...rest }: HeroProps) => {
  return (
    <div {...rest} className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <Blurry imgSrc={burgerImg} className="into-center">
        <h2 className=" text-4xl lg:text-6xl font-bold text-center  text-gray-100">
          THE BEST BURGER
          <br className="md:hidden" />
          <span className="md:hidden">IN YOUR TOWN</span>
        </h2>
      </Blurry>
      <Blurry
        imgSrc={starImg}
        className="into-center hidden md:flex "
        wrapperClassName="hidden  md:block"
      >
        <h2 className="text-4xl lg:text-6xl font-bold text-center  text-gray-100  translate-y-16">
          IN YOUR TOWN
        </h2>
      </Blurry>
    </div>
  );
};
