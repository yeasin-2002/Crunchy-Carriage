import imgUrl from "@/assets/products/burger.png";
import { barlowCondensedLight, barlowCondensedMedium } from "@/fonts";
import { cn } from "@/utils";
import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ProductItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ProductItem = ({ ...rest }: ProductItemProps) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden " {...rest}>
      <div className="bg-white  into-center ">
        <Image
          width={200}
          height={200}
          src={imgUrl.src}
          alt="burger"
          className="bg-transparent z-10"
        />
      </div>
      <div className="py-2 bg-[#fefeff] px-3 ">
        <div className="flex justify-between my-4">
          <h3
            className={cn(
              "text-xl font-semibold text-gray-800",
              barlowCondensedMedium.className
            )}
          >
            Burger
          </h3>
          <button>
            <Heart />
          </button>
        </div>
        <p className={cn("text-gray-600", barlowCondensedLight.className)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo
          harum! In facilis provident obcaecati repudiandae blanditiis at
          quisquam minima!
        </p>
        <div className="flex items-center justify-between">
          <p className="font-bold text-red-600 text-2xl my-5">৳ 5</p>
          <button className="btn-green">
            <ShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
};
