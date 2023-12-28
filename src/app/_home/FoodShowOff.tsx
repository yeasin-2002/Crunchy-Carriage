import { DisplayFoodItem } from "@/components";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface FoodShowOffProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

import p2 from "@/assets/covers/banner/h1_img.jpg";
import p1 from "@/assets/covers/banner/h1_img4.jpg";

import burger from "@/assets/products/burger.png";
import hotDog from "@/assets/products/hotDog.png";
import pizza from "@/assets/products/pizza.png";

const arr = [
  {
    title: "Pizza",
    price: 12,
    bgImg: p1,
    description: "This is a pizza",
    productImg: pizza,
  },
  {
    title: "Burger",
    price: 12,
    bgImg: p2,
    description: "This is a pizza",
    productImg: burger,
  },
  {
    title: "hot Dog",
    price: 12,
    bgImg: p1,
    description: "This is a pizza",
    productImg: hotDog,
  },
];

export const FoodShowOff = ({ ...rest }: FoodShowOffProps) => {
  return (
    <div {...rest} className="grid grid-cols-3 gap-2    ">
      {arr.map((item, i) => {
        return (
          <DisplayFoodItem
            key={i}
            title={item.title}
            price={item.price}
            bgImg={item.bgImg}
            description={item.description}
            productImg={item.productImg}
          />
        );
      })}
    </div>
  );
};
