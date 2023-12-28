"use client";

import { DisplayFoodItem } from "@/components/cards/DisplayFoodItem";
import { FoodItemData } from "@/data/Temp/FoodItemData";
import { Swiper, SwiperSlide } from "swiper/react";

// import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const ItemShowcase = () => {
  // className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-4 px-2"
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {FoodItemData.map((item) => {
        return (
          <SwiperSlide
            key={item.title}
            className="px-2"

            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // modules={[Navigation, Pagination, Scrollbar, A11y]}
          >
            <DisplayFoodItem className="px-2 " key={item.title} {...item} />;
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
