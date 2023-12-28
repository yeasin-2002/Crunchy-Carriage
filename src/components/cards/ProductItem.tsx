import imgUrl from "@/assets/products/burger.png";
import { barlowCondensedLight, barlowCondensedMedium } from "@/fonts";
import { cn } from "@/utils";
import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ProductItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ProductItem = ({ ...rest }: ProductItemProps) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg " {...rest}>
      <div className="into-center  bg-white ">
        <Image width={200} height={200} src={imgUrl.src} alt="burger" className="z-10 bg-transparent" />
      </div>
      <div className="bg-[#fefeff] px-3 py-2 ">
        <div className="my-4 flex justify-between">
          <h3 className={cn("text-xl font-semibold text-gray-800", barlowCondensedMedium.className)}>Burger</h3>
          <button>
            <Heart />
          </button>
        </div>
        <p className={cn("text-gray-600", barlowCondensedLight.className)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo harum! In facilis provident obcaecati
          repudiandae blanditiis at quisquam minima!
        </p>
        <div className="flex items-center justify-between">
          <p className="my-5 text-2xl font-bold text-red-600">৳ 5</p>
          <button className="btn-green">
            <ShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
};
