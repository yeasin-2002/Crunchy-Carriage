"use client";

import { ProductItem, TextMarquee } from "@/components";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { barlowCondensed } from "@/fonts";
import { cn } from "@/utils";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface BestSellingDishesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const BestSellingDishes = ({ ...rest }: BestSellingDishesProps) => {
  const arr = Array.from({ length: 10 });
  return (
    <div {...rest} className="bg-snowfall py-8 px-2">
      <TextMarquee text="POPULAR DISHES" />
      <h2
        className={cn(
          "my-5 px-2 text-center text-4xl font-bold text-gray-800 md:text-6xl mt-20 mb-10",
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
