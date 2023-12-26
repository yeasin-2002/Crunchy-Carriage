import cover from "@/assets/covers/add1_cover.jpg";
import starImg from "@/assets/covers/banner/smoke.jpg";
import burgerImg from "@/assets/covers/burger/bugerOnHand.jpg";

import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface HeroProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Hero = ({ ...rest }: HeroProps) => {
  return (
    <div {...rest} className="grid grid-cols-2">
      <Image
        src={burgerImg.src}
        width={1000}
        height={1000}
        alt="burger"
        className="w-full h-screen object-cover"
      />
      <div
        className=" flex-col text-gray-50 relative"
        style={{
          backgroundImage: `url(${cover.src})`,
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex into-center"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <h2 className="text-6xl font-bold text-center  text-gray-100">
            THE BEST BURGER <br /> IN YOUR TOWN
          </h2>
        </div>
      </div>
    </div>
  );
};
