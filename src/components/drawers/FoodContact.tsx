"use client";

import Image from "next/image";
import { DetailedHTMLProps, Fragment, HTMLAttributes } from "react";
import { RiMenuSearchFill } from "react-icons/ri";

import { contactInfo } from "@/data";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui";

import food0 from "@/assets/covers/alex-munsell-auIbTAcSH6E-unsplash.jpg";
import food1 from "@/assets/covers/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg";
import food3 from "@/assets/covers/chad-montano--GFCYhoRe48-unsplash.jpg";
import food4 from "@/assets/covers/egg-fry.jpg";
import food5 from "@/assets/covers/emy-XoByiBymX20-unsplash.jpg";
import food2 from "@/assets/covers/victoria-shes-8OpyEpJVgiQ-unsplash.jpg";

interface FoodContactProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FoodContact = ({ ...rest }: FoodContactProps) => {
  const year = new Date().getFullYear();
  const allFood = [food0, food1, food2, food3, food4, food5];

  return (
    <div {...rest}>
      <Sheet>
        <SheetTrigger>
          <RiMenuSearchFill className="size-6 mx-3" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col justify-between h-full w-full">
            <div className="space-y-4">
              <h3>WE MAKE THE BEST BURGER IN YOUR TOWN</h3>
              <p>
                The mouth-watering aroma of sizzling burgers now fills the
                streets of Birmingham thanks to the passionate pursuit of three
                brothers
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 my-4">
              {allFood.map((url) => {
                return (
                  <Image
                    src={url}
                    alt="Food Image"
                    className="rounded-lg w-full  bg-cover aspect-square "
                  />
                );
              })}
            </div>
            <div className="mt-10 ">
              <div className="flex items-center gap-x-1 mb-3">
                {contactInfo.map((item) => {
                  return <Fragment>{item.Icon}</Fragment>;
                })}
              </div>

              <p>Copyright © {year} Crunchy Carriage.</p>
              <p> All rights reserved</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
