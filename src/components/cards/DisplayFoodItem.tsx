import { itim } from "@/fonts";
import { cn } from "@/utils";
import Image, { StaticImageData } from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface DisplayFoodItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  price: number;
  bgImg: StaticImageData;
  productImg: StaticImageData;
  description?: string;
}

export const DisplayFoodItem = ({
  bgImg,
  title,
  productImg,
  ...rest
}: DisplayFoodItemProps) => {
  return (
    <div
      {...rest}
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="group relative flex h-96 lg:h-[30rem] min-h-96        w-full flex-col   justify-center gap-y-4 rounded-md bg-cover bg-center  p-4    text-white *:z-10 lg:p-10"
    >
      <h4 className="text-4xl   font-bold text-white">FASH FOOD MEALS</h4>
      <p>New Burger</p>
      <p className="text-4xl font-bold text-yellow-400 ">12</p>
      <button
        className={cn(
          "w-32 font-semibold rounded-md bg-white px-4 py-2 text-black lg:py-4 lg:text-xl lg:px-2 mt-2 md:mt-8  lg:mt-14 xl:mt-16 2xl:mt-28",
          itim.className
        )}
      >
        Order now
      </button>
      <Image
        src={productImg}
        alt={title}
        className="absolute bottom-2  right-1 !z-0  sm:w-1/2 lg:w-5/12 w-7/12 transition-all duration-500 ease-in-out group-hover:scale-110 "
      />
    </div>
  );
};
