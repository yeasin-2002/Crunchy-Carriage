import bgImg from "@/assets/covers/brooke-lark-4J059aGa5s4-unsplash.jpg";
import { Blurry, Input } from "@/components";
import { aboutUsContacts } from "@/data/aboutUsContacts";
import {
  barlowCondensed,
  barlowCondensedLight,
  barlowCondensedMedium,
} from "@/fonts";
import { cn } from "@/utils";
import React from "react";
import { Newsletter } from "../_home";

const ContactUs = () => {
  return (
    <div className="bg-snowfall">
      <Blurry
        wrapperClassName="min-h-72"
        imgSrc={bgImg}
        className="into-center text-4xl font-bold text-gray-50  "
      >
        CONTACT US
      </Blurry>

      <div>
        <h1 className={cn("title  mt-10", barlowCondensed.className)}>
          GET IN TOUCH WITH US
        </h1>
        <p className="w-3/4 mx-auto text-center text-slate-800 text-lg mt-5 font-semibold">
          Get in touch to discuss your employee wellbeing needs today. Please
          give us a call, drop us an email or fill out the contact form and
          we’ll get back to you.
        </p>
        <div className="grid grid-cols-3 py-6 items-center">
          {aboutUsContacts.map((content, i) => {
            return (
              <div className="*:text-center">
                <div className="into-center">{content.Icon}</div>
                <p
                  className={cn(
                    "text-2xl font-bold text-slate-800",
                    barlowCondensedMedium.className
                  )}
                >
                  {content.title}
                </p>
                <div className={barlowCondensedLight.className}>
                  <p>{content.desc1}</p>
                  <p>{content.desc2}</p>
                </div>
                <p className={cn("font-bold", content.footerStyle)}>
                  {content.footer}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="*:my-3 mt-32 w-3/4 mx-auto  ">
        <h2 className="title pb-12    ">SEND A MESSAGE</h2>
        <div className="flex items-center gap-x-2 ">
          <input placeholder="YOUR NAME" type="text" className="input-area" />
          <input placeholder="YOUR EMAIL" type="email" className="input-area" />
        </div>
        <input placeholder="SUBJECT" type="text" className="input-area" />
        <textarea placeholder="MESSAGE" className="input-area  min-h-64" />
        <div className="flex justify-center">
          <button className="btn-green py-3 font-semibold px-5">SEND</button>
        </div>
      </div>
      <hr />
      <Newsletter />
    </div>
  );
};

export default ContactUs;
