import { barlowCondensedLight } from "@/fonts";
import { cn } from "@/utils";
import Image from "next/image";

import mrBurger from "@/assets/covers/banner/mr-burger.jpg";
import maze from "@/assets/illustration/maze.png";

import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const BurgerOfTheMonth = ({ ...rest }: Props) => {
  return (
    <div {...rest} className={"grid grid-cols-1 md:grid-cols-2 m-2"}>
      <div
        style={{ backgroundImage: `url(${maze.src})` }}
        className={
          "bg-no-repeat bg-cover bg-center w-full h-full p-8 2xl:p-20 rounded-l-md bg-black "
        }
      >
        <p className="text-xl font-bold text-red-600  2xl:text-2xl pt-20">
          THE MENU
        </p>
        <h4 className={"text-4xl font-bold text-gray-50 2xl:text-5xl  pt-20"}>
          BURGER OF THE MONTH
        </h4>
        <p
          className={cn(
            " text-lg font-medium text-gray-200 2xl:text-2xl ",
            barlowCondensedLight.className
          )}
        >
          We take pride in crafting each item fresh to order, resulting in a
          truly distinctive and indulgent taste experience for our customers.
        </p>
        <button className="btn-green py-4 mt-6">Check it now</button>
      </div>

      <Image
        src={mrBurger.src}
        width={1000}
        height={1000}
        className="w-full h-full rounded-tr-lg hidden md:block"
        alt="MR BURGER MAN "
        title="MR BURGER MAN"
      />
    </div>
  );
};
