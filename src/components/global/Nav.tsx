import { DetailedHTMLProps, HTMLAttributes } from "react";

import { FoodContact, NavMenu, WishListItemBox } from "../drawers";
import { Logo } from "./Logo";

interface NavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Nav = ({ ...rest }: NavProps) => {
  return (
    <div {...rest} className="flex justify-between py-3 bg-snowfall px-4">
      <div className="flex justify-between items-center gap-x-2 ">
        <NavMenu />
        <Logo className="sm:size-20 size-14 2xl:size-32" />
      </div>
      <div className="flex items-center     ">
        <button className="btn-red hidden sm:block">Order now</button>
        <WishListItemBox />
        <FoodContact />
      </div>
    </div>
  );
};
