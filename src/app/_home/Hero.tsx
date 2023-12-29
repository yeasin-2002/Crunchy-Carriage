"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";

import { barlowCondensed, carroisGothic } from "@/fonts";

import foodImg from "@/assets/covers/pizza/pizza3D-noBg.png";
import Image from "next/image";
import bgVideo from "../../assets/video/coocking.mp4";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Hero = ({ ...rest }: Props) => {
  return (
    <div {...rest} className={"   relative w-full    min-h-screen"}>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2    place-items-center p-2 sm:p-4 h-full  absolute top-0 left-0   bg-black/80    text-gray-100 ">
        <div className="space-y-4 2xl:space-y-7 pl-1 md:pl-4  sm:pl-2  lg:pl-6 2xl:pl-8 ">
          <p className="text-rose-700 text-lg  font-bold 2xl:text-2xl">
            Hot and Special
          </p>
          <h2
            className={
              "text-4xl lg:text-5xl 2xl:text-7xl font-bold text-gray-100   " +
              barlowCondensed.className
            }
          >
            THE BEST FOOD SERVICE
            <br className="hidden md:block" />
            IN YOUR TOWN
          </h2>
          <p className={"2xl:text-2xl 2xl:px-10" + carroisGothic.className}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            harum nulla, cupiditate nam accusamus id rerum vel quae ea odit?
          </p>
          <button
            className={"btn-green px-6 py-4 2xl:px-10 2xl:py-8 2xl:text-3xl"}
          >
            Order Now
          </button>
        </div>
        <div className="hidden sm:block">
          <Image
            src={foodImg}
            alt="Burger"
            width={1000}
            height={1000}
            className="sm:size-56 md:size-60 lg:size-72  2xl:size-96"
          />
        </div>
      </div>

      <video
        src={bgVideo}
        className="w-full h-screen object-cover  "
        muted
        autoPlay
        loop
      />
    </div>
  );
};
