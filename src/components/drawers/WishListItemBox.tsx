import { barlowCondensedMedium } from "@/fonts";
import { Sheet, SheetContent, SheetTrigger } from "@/ui";
import { cn } from "@/utils";
import { ShoppingBag } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface WishListItemBoxProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const WishListItemBox = ({ ...rest }: WishListItemBoxProps) => {
  return (
    <div {...rest}>
      <Sheet>
        <SheetTrigger>
          <button className="btn-green">
            <ShoppingBag className="w-6 h-6" />
          </button>
        </SheetTrigger>
        <SheetContent className={`w-full h-full `}>
          <h4
            className={cn(
              "font-bold text-3xl",
              barlowCondensedMedium.className
            )}
          >
            Wishlist{" "}
          </h4>
        </SheetContent>
      </Sheet>
    </div>
  );
};
