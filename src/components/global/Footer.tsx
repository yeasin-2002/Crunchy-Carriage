import { CategoryItem, contactInfo, navItem } from "@/data";
import { barlowCondensedLight } from "@/fonts";
import { cn } from "@/utils";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Logo } from "..";

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({ ...rest }: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer
      {...rest}
      className={cn("bg-snowfall p-4", barlowCondensedLight.className)}
    >
      <div className="flex  flex-col items-start        md:flex-row">
        <div className=" flex flex-1 flex-col  sm:flex-row    sm:gap-x-5 md:gap-x-1  ">
          <div>
            <Logo />
            <p className="footer-mini-title">Mirpur 14,Dhaka - 1206</p>
            <p className="footer-mini-title font-bold text-red-700 ">
              crunchy.carriage@gmail.com
            </p>
          </div>
          <div className="flex flex-1 flex-col  sm:flex-row md:justify-evenly w-full   ">
            <div>
              <p className="footer-subtitle">Product</p>
              <div className="grid grid-cols-2  ">
                {CategoryItem.map((item) => {
                  return (
                    <p key={item.title} className="footer-mini-title">
                      {item.title}
                    </p>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="footer-subtitle">QUICK LINKS</p>
              <div>
                {navItem.map((item) => {
                  return (
                    <p
                      key={item.name}
                      className="footer-mini-title   uppercase "
                    >
                      {item.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="justify-self-end ">
          <h6 className={cn(" !footer-subtitle ")}>OPENING HOURS</h6>
          <p className="footer-mini-title">
            Monday – Friday: <span className="text-red-700"> 8am – 4pm</span>
          </p>
          <p className="footer-mini-title">
            Saturday: <span className="text-red-700"> 8am – 12am</span>
          </p>
          <div className="mt-2 flex gap-x-2 ">
            {contactInfo.map((info) => {
              return (
                <Link
                  key={info.name}
                  href={info.value}
                  className="rounded-full border border-slate-800 bg-slate-200 p-1 *:size-5 "
                >
                  {info.Icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <p className="mt-10 border-t-2 border-gray-500/40 py-2 text-center">
        Copyright ©{year}
        <span className="mx-1 font-medium text-red-600 ">Crunchy Carriage</span>
        <br /> All rights reserved
      </p>
    </footer>
  );
};
