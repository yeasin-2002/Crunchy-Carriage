import imgUrl from "@/assets/products/burger.png";
import { ShoppingBag } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ProductItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ProductItem = ({ ...rest }: ProductItemProps) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden " {...rest}>
      <div className="bg-white  ">
        <img src={imgUrl.src} alt="burger" className="bg-transparent z-10" />
      </div>
      <div className="py-2 bg-white px-3 ">
        <h3 className="text-xl font-semibold text-gray-800">Burger</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo
          harum! In facilis provident obcaecati repudiandae blanditiis at
          quisquam minima!
        </p>
        <div className="flex items-center justify-between">
          <p className="font-bold text-red-600 text-2xl my-5">$5</p>
          <button className="btn-green">
            <ShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
};
