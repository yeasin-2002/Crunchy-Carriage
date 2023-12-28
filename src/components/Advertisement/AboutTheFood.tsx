import { barlowCondensed, barlowCondensedLight } from "@/fonts";
import { cn } from "@/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import burgerImg from "@/assets/illustration/burger.png";
import chickenFry from "@/assets/products/chickenFry.png";
import Image from "next/image";

interface AboutTheFoodProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AboutTheFood = ({ ...rest }: AboutTheFoodProps) => {
  return (
    <div {...rest} className="relative py-10">
      <div className="flex justify-center flex-col items-center   2xl:py-10  h-full w-full min-h-[35rem] bg-snowfall  text-gray-60 *:z-10 ">
        <h4
          className={cn(
            "text-6xl font-semibold  text-center text-black/90 ",
            barlowCondensed.className
          )}
        >
          BEST BURGER IDEAS & <br />
          TRADITIONS FROM THE <br /> WHOLE WORLD
        </h4>
        <p
          className={cn(
            "my-9 text-2xl 2xl:text-4xl text-center 2xl:w-2/3   w-1/2",
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
      <Image
        src={chickenFry.src}
        width={1000}
        height={1000}
        alt="chicken fry"
        className="absolute bottom-0 left-0-0 z-0 2xl:size-96 size-80"
      />
      <Image
        src={burgerImg.src}
        width={100}
        height={100}
        alt="chicken fry"
        className="absolute bottom-10 right-10 z-0  size-32"
      />
    </div>
  );
};
