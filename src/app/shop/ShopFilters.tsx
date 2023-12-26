import { allCategories } from "@/data";
import { barlowCondensed, barlowCondensedLight } from "@/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui";
import { cn } from "@/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ShopFilters = ({ ...rest }: Props) => {
  return (
    <div {...rest}>
      <Accordion type="multiple">
        <AccordionItem value="category" defaultChecked>
          <AccordionTrigger
            className={cn("accordion-title ", barlowCondensed.className)}
          >
            Category
          </AccordionTrigger>
          <AccordionContent>
            {allCategories.map((c) => {
              return (
                <p
                  key={c.title + c.url}
                  className={cn(
                    "text-xl font-semibold text-gray-700cursor-pointer my-2",
                    barlowCondensedLight.className
                  )}
                >
                  {c.title}
                </p>
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
