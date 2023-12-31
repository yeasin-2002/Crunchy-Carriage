import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { navItem } from "@/data";
import { permanentMarker } from "@/fonts";
import { Menu } from "@/icons";
import { Sheet, SheetContent, SheetTrigger } from "@/ui";
import { Logo } from "..";

interface NavMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const NavMenu = ({ ...rest }: NavMenuProps) => {
  return (
    <div {...rest}>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <div className="into-center ">
            <Logo className="size-36 2xl:size-52" />
          </div>
          <div defaultValue="menu">
            <div className="mt-10 flex flex-col gap-y-4 2xl:gap-y-8">
              {navItem.map((item) => {
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={
                      "2xl:text-2xl md:text-lg font-medium text-gray-700 hover:text-gray-900 " +
                      permanentMarker.className
                    }
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
