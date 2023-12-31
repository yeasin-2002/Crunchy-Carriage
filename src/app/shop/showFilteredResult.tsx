"use client";

import { CheckCircle, ListFilter } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { FaListUl } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";

import { ProductItem } from "@/components";
import { allCategories } from "@/data";
import { cn } from "@/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ShowFilteredResult = ({ ...rest }: Props) => {
  const [viewSystemIsList, setViewSystemIsList] = useState(false);
  const arr = Array.from({ length: 10 });
  const sortItem = [
    {
      value: "popularity",
      label: " popularity",
    },
    {
      value: "average-rating",
      label: "average rating",
    },
    {
      value: "latest",
      label: "latest",
    },
    {
      value: "lowToHigh",
      label: "price: low to high",
    },
    {
      value: "highToLow",
      label: "price: high to low",
    },
  ];

  return (
    <div {...rest}>
      <div className="flex items-center justify-between px-4 py-4 ">
        <div>
          <p className="hidden md:block">Showing 1–12 of 27 results</p>

          <Sheet>
            <SheetTrigger className="p-2 rounded-md cursor-pointer bg-slate-200 text-black">
              <ListFilter />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Select Category </SheetTitle>
                <SheetDescription className="text-start">
                  {allCategories.map((item) => {
                    return (
                      <p key={item.title} className="flex gap-x-2 my-2">
                        <span>
                          <CheckCircle />
                        </span>
                        <span>{item.title}</span>
                      </p>
                    );
                  })}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center gap-x-3 ">
          <div className="flex items-center gap-x-3 transition-all ">
            <span
              className={cn(
                " p-2 rounded-md  text-black size-8 cursor-pointer",
                {
                  "bg-green-600": viewSystemIsList,
                  "bg-transparent": !viewSystemIsList,
                }
              )}
              onClick={() => setViewSystemIsList(true)}
            >
              <FaListUl />
            </span>
            <span
              className={cn(
                " p-2 rounded-md  text-black size-8 cursor-pointer",
                {
                  "bg-green-600": !viewSystemIsList,
                  "bg-transparent": viewSystemIsList,
                }
              )}
              onClick={() => setViewSystemIsList(false)}
            >
              <HiOutlineViewGrid />
            </span>
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              {sortItem.map((val) => {
                return (
                  <SelectItem
                    key={val.value}
                    value={val.value}
                    className="font-normal text-sm"
                  >
                    {val.label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 p-2 min-h-screen ">
        {arr.map((_, i) => (
          <ProductItem key={i} />
        ))}
      </div>
    </div>
  );
};
