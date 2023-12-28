import { barlowCondensed, barlowCondensedLight } from "@/fonts";
import { cn } from "@/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import burgerImg from "@/assets/illustration/burger.png";
import chickenFry from "@/assets/products/chickenFry.png";
import Image from "next/image";

interface AboutTheFoodProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AboutTheFood = ({ ...rest }: AboutTheFoodProps) => {
  return (
    <div {...rest} className="relative py-4 md:py-10">
      <div className="text-gray-60 flex h-full min-h-[35rem]   w-full  flex-col items-center justify-center bg-snowfall  *:z-10 2xl:py-10 ">
        <h4
          className={cn(
            "title text-center   text-black/90 sm:text-4xl lg:text-5xl",
            barlowCondensed.className
          )}
        >
          BEST BURGER IDEAS & <br className="inline sm:hidden " />
          TRADITIONS FROM <br />
          THE WHOLE WORLD
        </h4>
        <p
          className={cn(
            "my-9 w-full px-4 text-start text-2xl lg:w-3/4 md:w-3/4   md:text-center  2xl:w-2/3 2xl:text-4xl lg:text-2xl ",
            barlowCondensedLight.className
          )}
        >
          The mouth-watering aroma of sizzling burgers now fills the streets of
          Birmingham thanks to the passionate pursuit of three brothers, the
          British founders of Faz food. After over 50 years of experience in the
          culinary industry between them, they set out on a journey to discover
          the ultimate burger.
        </p>
        <button className="btn-green my-10 sm:px-8 sm:py-6 sm:text-xl">
          SHOP NOW
        </button>
      </div>
      <Image
        src={chickenFry.src}
        width={1000}
        height={1000}
        alt="chicken fry"
        className="left-0-0 absolute bottom-0 z-0 hidden  size-80  sm:left-3  sm:block sm:size-52 sm:px-4 2xl:size-96 md:size-64 "
      />
      <Image
        src={burgerImg.src}
        width={100}
        height={100}
        alt="chicken fry"
        className="absolute bottom-10 right-10 z-0  size-32 "
      />
    </div>
  );
};
