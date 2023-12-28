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
      className={cn("p-4 bg-snowfall", barlowCondensedLight.className)}
    >
      <div className="flex  flex-col md:flex-row        items-start">
        <div className=" flex flex-col sm:flex-row  sm:gap-x-5    md:gap-x-1 flex-1 ">
          <div>
            <Logo />
            <p className="footer-mini-title">Mirpur 14,Dhaka - 1206</p>
            <p className="footer-mini-title">crunchy.carriage@gmail.com</p>
            <p className="text-red-700 font-bold footer-mini-title ">
              01632227965
            </p>
          </div>
          <div className="flex flex-col sm:flex-row  md:justify-evenly flex-1">
            <div>
              <p className="footer-subtitle">Product</p>
              <div className="grid grid-cols-2 ">
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
          <div className="flex gap-x-2 mt-2 ">
            {contactInfo.map((info) => {
              return (
                <Link
                  key={info.name}
                  href={info.value}
                  className="p-1 rounded-full bg-slate-200 border border-slate-800 *:size-5 "
                >
                  {info.Icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <p className="text-center mt-10 border-t-2 border-gray-500/40 py-2">
        Copyright ©{year}
        <span className="text-red-600 mx-1 font-medium ">Crunchy Carriage</span>
        <br /> All rights reserved
      </p>
    </footer>
  );
};
