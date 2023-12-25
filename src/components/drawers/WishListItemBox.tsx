import { barlowCondensed } from "@/fonts";
import { Sheet, SheetContent, SheetTrigger } from "@/ui";
import { ShoppingBasket } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface WishListItemBoxProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const WishListItemBox = ({ ...rest }: WishListItemBoxProps) => {
  return (
    <div {...rest}>
      <Sheet>
        <SheetTrigger>
          <button className="btn-green">
            <ShoppingBasket className="w-6 h-6" />
          </button>
        </SheetTrigger>
        <SheetContent className={`w-full h-full `}>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </SheetContent>
      </Sheet>
    </div>
  );
};
