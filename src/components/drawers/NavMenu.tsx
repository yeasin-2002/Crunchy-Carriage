import { navItem } from "@/data";
import { Menu } from "@/icons";
import { Sheet, SheetContent, SheetTrigger, Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Logo } from "..";

interface NavMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const NavMenu = ({ ...rest }: NavMenuProps) => {
  return (
    <div {...rest}>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <div className="into-center ">
            <Logo className="w-36" />
          </div>
          <Tabs defaultValue="menu" className="w-[400px] ">
            <TabsList className="bg-transparent ">
              <TabsTrigger value="menu">Menu</TabsTrigger>
              <TabsTrigger value="category">category</TabsTrigger>
            </TabsList>
            <TabsContent value="menu">
              <div className="mt-10 flex flex-col gap-y-4">
                {navItem.map((item) => {
                  return (
                    <Link key={item.name} href={item.path}>
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </TabsContent>
            <TabsContent value="category">Change your category here.</TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </div>
  );
};
