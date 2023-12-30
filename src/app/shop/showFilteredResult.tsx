"use client";

import { ProductItem } from "@/components";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui";
import { cn } from "@/utils";
import { FaListUl } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";

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
        <p>Showing 1–12 of 27 results</p>
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-3 ">
            <FaListUl
              className={cn(
                " p-2 rounded-md  text-black size-8 cursor-pointer",
                {
                  "bg-green-600": viewSystemIsList,
                }
              )}
              onClick={() => setViewSystemIsList(true)}
            />
            <HiOutlineViewGrid
              className={cn(
                " p-2 rounded-md  text-black size-8 cursor-pointer",
                {
                  "bg-green-600": !viewSystemIsList,
                }
              )}
              onClick={() => setViewSystemIsList(false)}
            />
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
      <div className="grid grid-cols-3 gap-3 p-2">
        {arr.map((_, i) => (
          <ProductItem key={i} />
        ))}
      </div>
    </div>
  );
};
