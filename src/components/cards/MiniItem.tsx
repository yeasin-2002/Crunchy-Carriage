import productIcon from "@/assets/products/burger.png";
import { Heart } from "lucide-react";
import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const MiniItem = ({ ...rest }: Props) => {
  return (
    <div
      {...rest}
      className="border border-gray-700/25   flex items-center rounded-md"
    >
      <Image
        src={productIcon}
        alt="Picture of the product"
        width={100}
        height={100}
      />
      <div className="flex-1 flex justify-between">
        <div className="flex-1">
          <p className=" text-xs  text-blue-500">#burger</p>
          <h1 className=" text-xl font-bold">Burger</h1>
          <p className=" text-sm text-gray-500">$ 100</p>
        </div>
        <div className="flex items-center justify-between px-2 self-start">
          <button className="bg-blue-500 text-white p-2 rounded-md">
            <Heart className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
