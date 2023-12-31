"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";

import { allCategories } from "@/data";
import { barlowCondensed, barlowCondensedLight } from "@/fonts";


import { cn } from "@/utils";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ShopFilters = ({ ...rest }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div {...rest}>
      <div>
        <p className={cn("accordion-title ", barlowCondensed.className)}>
          Category
        </p>
        <div>
          {allCategories.map((c) => {
            return (
              <div
                key={c.title + c.url}
                className={cn(
                  "text-gray-700cursor-pointer my-2 text-xl font-normal flex  items-center cursor-pointer gap-x-2",
                  barlowCondensedLight.className
                )}
                onClick={() => {
                  selectedCategory === c.title
                    ? setSelectedCategory("")
                    : setSelectedCategory(c.title);
                }}
              >
                <div className="min-w-6 ">
                  {selectedCategory === c.title && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >
                      <CheckCircle className="text-green-900" />
                    </motion.span>
                  )}
                </div>
                <p>{c.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <p className={cn("accordion-title ", barlowCondensed.className)}>
          Filter By Price
        </p>
        <div className="mt-5">
          <label
            htmlFor="minmax-range"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            $ 0
          </label>
          <input
            id="minmax-range"
            type="range"
            min="0"
            max="10000"
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};
