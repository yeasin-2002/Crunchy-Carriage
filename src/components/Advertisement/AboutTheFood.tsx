import { barlowCondensed, barlowCondensedLight } from "@/fonts";
import { cn } from "@/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import burgerImg from "@/assets/illustration/burger.png";
import chickenFry from "@/assets/products/chickenFry.png";

interface AboutTheFoodProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AboutTheFood = ({ ...rest }: AboutTheFoodProps) => {
  return (
    <div {...rest} className="relative">
      <div className="flex justify-center flex-col items-center h-full w-full min-h-[35rem] bg-snowfall  text-gray-60 *:z-10 ">
        <h4
          className={cn(
            "text-6xl font-extralight  text-center text-gray-800 ",
            barlowCondensed.className
          )}
        >
          BEST BURGER IDEAS & <br />
          TRADITIONS FROM THE <br /> WHOLE WORLD
        </h4>
        <p
          className={cn(
            "my-9 text-2xl text-center w-1/2 *: ",
            barlowCondensedLight.className
          )}
        >
          The mouth-watering aroma of sizzling burgers now fills the streets of
          Birmingham thanks to the passionate pursuit of three brothers, the
          British founders of Faz food. After over 50 years of experience in the
          culinary industry between them, they set out on a journey to discover
          the ultimate burger.
        </p>
        <button className="btn-green my-10">SHOP NOW</button>
      </div>
      <img
        src={chickenFry.src}
        alt="chicken fry"
        className="absolute bottom-0 left-0-0 z-0  size-80"
      />
      <img
        src={burgerImg.src}
        alt="chicken fry"
        className="absolute bottom-10 right-10 z-0  size-32"
      />
    </div>
  );
};
