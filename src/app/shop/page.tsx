import { DetailedHTMLProps, HTMLAttributes } from "react";

import bgImg from "@/assets/covers/burger/fresh-burger.jpg";
import { Blurry } from "@/components";
import { ShopFilters } from "./ShopFilters";
import { ShowFilteredResult } from "./showFilteredResult";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Shop = ({ ...rest }: Props) => {
  return (
    <div {...rest} className="bg-snowfall">
      <Blurry
        wrapperClassName="min-h-72"
        imgSrc={bgImg}
        className="into-center  text-gray-50  flex-col "
      >
        <h1 className="text-4xl font-bold">SHOP</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mt-6">
          Get Quality <span className="text-gray-500">Food</span> at your
          Doorstep
        </h2>
      </Blurry>
      <div className="flex  mt-4">
        <ShopFilters className="w-64 px-4 py-2 hidden md:block" />
        <ShowFilteredResult className="flex-1" />
      </div>
    </div>
  );
};

export default Shop;
