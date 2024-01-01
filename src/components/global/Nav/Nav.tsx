"use client";

import { usePathname } from "next/navigation";
import { DetailedHTMLProps, Fragment, HTMLAttributes } from "react";

import { FoodContact, NavMenu, WishListItemBox } from "../../drawers";
import { Logo } from "../Logo";
import { NavProfile } from "./NavProfile";

interface NavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Nav = ({ ...rest }: NavProps) => {
  const pathName = usePathname();
  const isAuth = true;
  return (
    <Fragment>
      {pathName === "/profile" || (
        <div {...rest} className="flex justify-between bg-snowfall px-4 py-3">
          <div className="flex items-center justify-between gap-x-2 ">
            <NavMenu />
            <Logo className="size-14 sm:size-20 2xl:size-32 " />
          </div>
          <div className="flex items-center      ">
            <button className="btn-red hidden sm:block">Order now</button>
            <WishListItemBox />
            {isAuth ? <NavProfile /> : <FoodContact />}
          </div>
        </div>
      )}
    </Fragment>
  );
};
