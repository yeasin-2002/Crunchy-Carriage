"use client";

import { motion } from "framer-motion";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { barlowCondensed } from "@/fonts";

import foodImg from "@/assets/covers/pizza/pizza3D-noBg.png";
import Image from "next/image";
import bgVideo from "../../assets/video/coocking.mp4";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Hero = ({ ...rest }: Props) => {
  return (
    <div {...rest} className={"   relative w-full  min-h-full "}>
      <div className="w-full grid grid-cols-2    place-items-center p-4 h-full  absolute top-0 left-0   bg-black/80    text-gray-100 ">
        <div className="space-y-4">
          <p className="text-rose-700 text-lg font-bold   px-2">
            Hot and Special
          </p>
          <h2
            className={
              "  text-4xl lg:text-5xl font-bold text-gray-100   px-2 " +
              barlowCondensed.className
            }
          >
            THE BEST FOOD SERVICE
            <br />
            IN YOUR{" "}
            {"TOWN".split("").map((car, index) => {
              return (
                <motion.span
                  key={car}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 * index },
                  }}
                >
                  {car}
                </motion.span>
              );
            })}
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            harum nulla, cupiditate nam accusamus id rerum vel quae ea odit?
          </p>
          <button className="btn-green px-6   py-4">Order Now</button>
        </div>
        <div className="hidden md:block">
          <Image
            src={foodImg}
            alt="Burger"
            width={1000}
            height={1000}
            className="size-72 "
          />
        </div>
      </div>

      <video
        src={bgVideo}
        className="w-full h-full object-cover "
        muted
        autoPlay
        loop
      />
    </div>
  );
};
