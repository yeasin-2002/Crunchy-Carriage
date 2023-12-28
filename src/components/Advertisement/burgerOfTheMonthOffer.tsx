import { barlowCondensedLight } from "@/fonts";
import { cn } from "@/utils";
import Image from "next/image";

import mrBurger from "@/assets/covers/banner/mr-burger.jpg";
import maze from "@/assets/illustration/maze.png";

import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const BurgerOfTheMonth = ({ ...rest }: Props) => {
  return (
    <div {...rest} className={"m-2 grid grid-cols-1 md:grid-cols-2 "}>
      <div
        style={{ backgroundImage: `url(${maze.src})` }}
        className={"h-full w-full rounded-l-md bg-black bg-cover bg-center bg-no-repeat p-8 sm:py-20  2xl:p-20"}
      >
        <p className="pt-20 text-xl font-bold  text-red-600 2xl:text-2xl">THE MENU</p>
        <h4 className={"pt-20 text-4xl font-bold text-gray-50  2xl:text-5xl"}>BURGER OF THE MONTH</h4>
        <p className={cn(" text-lg font-medium text-gray-200 2xl:text-2xl ", barlowCondensedLight.className)}>
          We take pride in crafting each item fresh to order, resulting in a truly distinctive and indulgent taste
          experience for our customers.
        </p>
        <button className="btn-green mt-6 py-4">Check it now</button>
      </div>

      <Image
        src={mrBurger.src}
        width={1000}
        height={1000}
        className="hidden h-full w-full rounded-tr-lg md:block"
        alt="MR BURGER MAN "
        title="MR BURGER MAN"
      />
    </div>
  );
};
