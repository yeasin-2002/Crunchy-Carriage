import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { barlowCondensed, barlowCondensedLight } from "@/fonts";
import { cn } from "@/utils";

import burgerImg from "@/assets/illustration/burger.png";
import priedRice from "@/assets/illustration/h1_vector1.png";
import leaf from "@/assets/illustration/leaf.png";
import pizza from "@/assets/illustration/pizza.png";

interface AboutTheFoodProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

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
        <button className="btn-green my-10 sm:px-7 sm:py-5 sm:text-lg">
          SHOP NOW
        </button>
      </div>
      <Image
        src={burgerImg.src}
        width={100}
        height={100}
        alt="chicken fry"
        className="absolute bottom-10 left-0 md:left-4   z-0  size-24 md:size-28 lg:size-32 "
      />
      <Image
        src={leaf.src}
        width={100}
        height={100}
        alt="chicken fry"
        className="absolute bottom-10 right-10 z-0  size-20 "
      />
      <Image
        src={pizza.src}
        width={100}
        height={100}
        alt="chicken fry"
        className="absolute top-10 right-0 md:right-4 z-0  size-24 md:size-28 lg:size-32 "
      />
      <Image
        src={priedRice.src}
        width={100}
        height={100}
        alt="chicken fry"
        className="absolute top-10 left-0 md:left-4   z-0  size-24 md:size-28 lg:size-32 "
      />
    </div>
  );
};
