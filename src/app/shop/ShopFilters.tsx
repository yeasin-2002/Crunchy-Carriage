"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";

import { allCategories } from "@/data";
import { barlowCondensed, barlowCondensedLight } from "@/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui";
import { cn } from "@/utils";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ShopFilters = ({ ...rest }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div {...rest}>
      <Accordion type="single" defaultValue={"category"}>
        <AccordionItem value="category">
          <AccordionTrigger
            className={cn("accordion-title ", barlowCondensed.className)}
          >
            Category
          </AccordionTrigger>
          <AccordionContent>
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
                    <AnimatePresence>
                      {selectedCategory === c.title && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                        >
                          <CheckCircle className="text-green-900" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <p>{c.title}</p>
                </div>
              );
            })}
          </AccordionContent>
        </AccordionItem>

        {/* Price */}
        <AccordionItem value="price">
          <AccordionTrigger
            className={cn("accordion-title ", barlowCondensed.className)}
          >
            Filter By Price
          </AccordionTrigger>
          <AccordionContent>Price</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
