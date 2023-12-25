import { ProductItem } from "@/components";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface RenderProduct_tempProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const RenderProduct_temp = ({ ...rest }: RenderProduct_tempProps) => {
  return (
    <div {...rest} className="grid grid-cols-3 bg-snowfall py-5 gap-5 p-4">
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};
