import { DisplayFoodItem } from "@/components/cards/DisplayFoodItem";
import { FoodItemData } from "@/data/Temp/FoodItemData";

import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ItemShowcase = ({ ...rest }: Props) => {
  return (
    <div
      {...rest}
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-4 px-2"
    >
      {FoodItemData.map((item) => {
        return <DisplayFoodItem key={item.title} {...item} />;
      })}
    </div>
  );
};
