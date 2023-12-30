import { DetailedHTMLProps, HTMLAttributes } from "react";

import bgImg from "@/assets/covers/burger/fresh-burger.jpg";
import { Blurry } from "@/components";
import { ShopFilters } from "./ShopFilters";
import { ShowFilteredResult } from "./showFilteredResult";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Shop = ({ ...rest }: Props) => {
  return (
    <div {...rest} className="bg-snowfall">
      <Blurry
        wrapperClassName="min-h-72"
        imgSrc={bgImg}
        className="into-center text-4xl font-bold text-gray-50  "
      >
        Shop
      </Blurry>
      <div className="flex  mt-4">
        <ShopFilters className="w-64 px-4 py-2" />
        <ShowFilteredResult className="flex-1" />
      </div>
    </div>
  );
};

export default Shop;
