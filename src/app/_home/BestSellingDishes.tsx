"use client";

import { ProductItem, TextMarquee } from "@/components";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { barlowCondensed } from "@/fonts";
import { cn } from "@/utils";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface BestSellingDishesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const BestSellingDishes = ({ ...rest }: BestSellingDishesProps) => {
  const arr = Array.from({ length: 10 });
  return (
    <div {...rest} className="bg-snowfall py-4">
      <TextMarquee text="POPULAR DISHES" />
      <h2
        className={cn(
          "text-center text-4xl px-2 md:text-6xl font-bold text-gray-800 my-5",
          barlowCondensed.className
        )}
      >
        BEST SELLING DISHES
      </h2>

      <Swiper
        className="mySwiper mt-10"
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {arr.map((_, i) => {
          return (
            <SwiperSlide key={i}>
              <ProductItem />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
