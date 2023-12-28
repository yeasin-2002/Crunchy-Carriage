import { Send } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { TextMarquee } from "@/components";
import { barlowCondensed, barlowCondensedLight } from "@/fonts";
import { Checkbox, Input, Label } from "@/ui";

interface NewsletterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Newsletter = ({ ...rest }: NewsletterProps) => {
  return (
    <section className="bg-snowfall  py-10" {...rest}>
      <TextMarquee text="SUBSCRIBE" className="my-10" />
      <div className="flex flex-col items-center justify-center gap-y-4  px-4 ">
        <h3 className={`title    text-gray-dark ${barlowCondensed.className}`}>
          JOIN FOR HOT OFFERS
        </h3>
        <p
          className={`text-center 2xl:text-3xl text-gray-500 mt-2 ${barlowCondensedLight.className}`}
        >
          If we go all out… We do it well! Subscribe to the newsletter
          <br className="hidden md:block" />
          to get the most exclusive promos.
        </p>

        <div className="space-y-3 mt-10">
          <div className="flex gap-x-2 justify-center items-center  ">
            <Input
              className="w-full  md:min-w-96 py-6 flex-1  "
              type="email"
              placeholder="Enter your email"
            />
            <button className="btn-green      h-full  flex items-center gap-x-1 py-3 px-2 sm:px-3 ">
              Subscribe
              <Send size={15} className="hidden sm:block" />
            </button>
          </div>
          <div className="flex gap-x-2 items-center">
            <Checkbox id="newsletter" className="2xl:p-4 " />
            <Label
              htmlFor="newsletter"
              className={`  text-gray-600 cursor-pointer  2xl:text-3xl   ${barlowCondensedLight.className}`}
            >
              By signing up you agree to our Privacy Policy
            </Label>
          </div>
        </div>
      </div>
    </section>
  );
};
