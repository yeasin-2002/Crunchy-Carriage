import starImg from "@/assets/covers/banner/smoke.jpg";
import burgerImg from "@/assets/covers/burger/bugerOnHand.jpg";
import { Blurry } from "@/components";

import { DetailedHTMLProps, HTMLAttributes } from "react";

interface HeroProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const HeroOld = ({ ...rest }: HeroProps) => {
  return (
    <div {...rest} className="grid h-screen grid-cols-1 md:grid-cols-2">
      <Blurry imgSrc={burgerImg} className="into-center">
        <h2 className=" text-center text-4xl font-bold text-gray-100  lg:text-6xl">
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
        <h2 className="translate-y-16 text-center text-4xl font-bold  text-gray-100  lg:text-6xl">
          IN YOUR TOWN
        </h2>
      </Blurry>
    </div>
  );
};
