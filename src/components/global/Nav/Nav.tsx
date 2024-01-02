"use client";

import { usePathname } from "next/navigation";
import { DetailedHTMLProps, Fragment, HTMLAttributes } from "react";

import Link from "next/link";
import { FoodContact, NavMenu, WishListItemBox } from "../../drawers";
import { Logo } from "../Logo";
import { NavProfile } from "./NavProfile";

interface NavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Nav = ({ ...rest }: NavProps) => {
  const pathName = usePathname();
  const hiddenPaths = ["/profile", "/profile/wishlist", "/profile/settings"];

  const isAuth = false;
  return (
    <Fragment>
      {hiddenPaths.includes(pathName) || (
        <div {...rest} className="flex justify-between bg-snowfall px-4 py-3">
          <div className="flex items-center justify-between gap-x-2 ">
            <NavMenu />
            <Logo className="size-14 sm:size-20 2xl:size-32 " />
          </div>
          <div className="flex items-center      ">
            {isAuth ? (
              <button className="btn-red hidden sm:block">Order now</button>
            ) : (
              <Link href={"/singup"} className="btn-red hidden sm:block">
                Sing Up
              </Link>
            )}
            <WishListItemBox />
            {isAuth ? <NavProfile /> : <FoodContact />}
          </div>
        </div>
      )}
    </Fragment>
  );
};
