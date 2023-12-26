"use client";

import { ProductItem } from "@/components";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui";
import { FaListUl } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ShowFilteredResult = ({ ...rest }: Props) => {
  const arr = Array.from({ length: 10 });
  const sortItem = [
    {
      value: "popularity",
      label: "Sort by popularity",
    },
    {
      value: "average-rating",
      label: "Sort by average rating",
    },
    {
      value: "latest",
      label: "Sort by latest",
    },
    {
      value: "lowToHigh",
      label: "Sort by price: low to high",
    },
    {
      value: "highToLow",
      label: "Sort by price: high to low",
    },
  ];

  return (
    <div {...rest}>
      <div className="flex justify-between py-4 items-center px-4 ">
        <p>Showing 1–12 of 27 results</p>
        <div className="flex gap-x-2 items-center">
          <div className="flex gap-x-3 items-center">
            <FaListUl />
            <HiOutlineViewGrid />
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {sortItem.map((val) => {
                return <SelectItem value={val.value}>{val.label} </SelectItem>;
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {arr.map((_, i) => (
          <ProductItem key={i} />
        ))}
      </div>
    </div>
  );
};