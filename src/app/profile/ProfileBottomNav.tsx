import { profileMenu } from "@/data";
import { carroisGothic } from "@/fonts";
import Link from "next/link";

import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ProfileBottomNav = ({ ...rest }: Props) => {
  return (
    <div
      {...rest}
      className="glass-bluer absolute bottom-5 left-0 right-0 mx-auto w-1/4 px-2  flex  items-center justify-between rounded-md"
    >
      {profileMenu.map((item) => {
        return (
          <Link
            href={item.path}
            key={item.name + item.path}
            className={
              "into-center flex-col  text-slate-700 gap-y-2 hover:bg-slate-100 p-2 rounded-xl w-full "
            }
          >
            {item.Icon}
            <span className={"text-sm " + carroisGothic.className}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};
