import { Menu } from "@/icons";
import { ShoppingBasket } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Logo } from "./Logo";

interface NavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Nav = ({ ...rest }: NavProps) => {
  return (
    <div {...rest} className="flex justify-between py-3 bg-snowfall">
      <div className="flex justify-between items-center gap-x-2 px-4">
        <Menu className="  " />
        <Logo className="w-20 h-20" />
      </div>
      <div className="flex items-center   ">
        <button className="btn-red">Order now</button>
        <button className="btn-green">
          <ShoppingBasket className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
