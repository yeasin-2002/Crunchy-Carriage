import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui";

import { CircleUserRound, LogOut, User } from "lucide-react";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const NavProfile = ({ ...rest }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" mb-2  rounded-lg bg-slate-200 p-3  cursor-pointer  ">
        <User className="text-black" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="-translate-x-8 translate-y-3">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href={"/profile/settings"}
            className="cursor-pointer flex items-center gap-x-3"
          >
            <CircleUserRound className="size-5" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-x-3">
          <LogOut className="size-5" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
