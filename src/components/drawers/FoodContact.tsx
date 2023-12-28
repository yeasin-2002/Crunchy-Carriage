"use client";

import Image from "next/image";
import { DetailedHTMLProps, Fragment, HTMLAttributes } from "react";
import { RiMenuSearchFill } from "react-icons/ri";

import { contactInfo } from "@/data";
import { Sheet, SheetContent, SheetTrigger } from "@/ui";

import food1 from "@/assets/covers/burger/mae-mu-I7A_pHLcQK8-unsplash.jpg";
import food4 from "@/assets/covers/drink/victoria-shes-8OpyEpJVgiQ-unsplash.jpg";
import food5 from "@/assets/covers/light-snacks/gallery-4.jpg";
import food2 from "@/assets/covers/meat/alex-munsell-auIbTAcSH6E-unsplash.jpg";
import food0 from "@/assets/covers/pizza/gallery-5.jpg";
import food3 from "@/assets/covers/sweet/luisana-zerpa.jpg";

interface FoodContactProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FoodContact = ({ ...rest }: FoodContactProps) => {
  const year = new Date().getFullYear();
  const allFood = [food0, food1, food2, food3, food4, food5];

  return (
    <div {...rest}>
      <Sheet>
        <SheetTrigger>
          <RiMenuSearchFill className="mx-3 size-6 " />
        </SheetTrigger>
        <SheetContent>
          <div className="flex h-full w-full flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-center text-base font-bold  lg:text-lg 2xl:text-2xl">
                WE MAKE THE BEST BURGER IN YOUR TOWN
              </h3>
              <p className="font-medium 2xl:text-xl">
                The mouth-watering aroma of sizzling burgers now fills the streets of Birmingham thanks to the
                passionate pursuit of three brothers
              </p>
            </div>
            <div className="my-4 grid grid-cols-3 gap-2">
              {allFood.map((url, i) => {
                return (
                  <Image key={i} src={url} alt="Food Image" className="aspect-square w-full  rounded-lg bg-cover  " />
                );
              })}
            </div>
            <div className="mt-10 ">
              <div className="mb-3 flex items-center gap-x-1">
                {contactInfo.map((item) => {
                  return <Fragment key={item.name}>{item.Icon}</Fragment>;
                })}
              </div>

              <p className="2xl:text-lg">Copyright © {year} Crunchy Carriage.</p>
              <p className="2xl:text-lg"> All rights reserved</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
