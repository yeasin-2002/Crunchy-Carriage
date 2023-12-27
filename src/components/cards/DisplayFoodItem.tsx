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
  price,
  title,
  description,
  productImg,
  ...rest
}: DisplayFoodItemProps) => {
  return (
    <div
      {...rest}
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="bg-cover bg-center w-full h-96 min-h-96      rounded-md p-2 flex flex-col justify-center text-white gap-y-4  relative     *:z-10"
    >
      <h4 className="text-4xl font-bold text-white">FASH FOOD MEALS</h4>
      <p>New Burger</p>
      <p className="text-yellow-400 text-4xl font-bold ">12</p>
      <button className="bg-white text-black px-4 py-2 rounded-md w-32">
        Order now
      </button>
      <Image
        src={productImg}
        alt={title}
        className="absolute bottom-2 right-1 w-1/2 !z-0"
      />
    </div>
  );
};
