import { barlowCondensedMedium } from "@/fonts";
import { Sheet, SheetContent, SheetTrigger } from "@/ui";
import { cn } from "@/utils";
import { ShoppingBag } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface WishListItemBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const WishListItemBox = ({ ...rest }: WishListItemBoxProps) => {
  return (
    <div {...rest}>
      <Sheet>
        <SheetTrigger className="btn-green ">
          <ShoppingBag className="size-6 sm:size-8 sm:p-1" />
        </SheetTrigger>
        <SheetContent className={`h-full w-full `}>
          <h4 className={cn("text-3xl font-bold 2xl:text-5xl", barlowCondensedMedium.className)}>Wishlist </h4>
        </SheetContent>
      </Sheet>
    </div>
  );
};
