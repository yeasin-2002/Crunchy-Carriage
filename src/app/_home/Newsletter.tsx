import { Send } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { TextMarquee } from "@/components";
import { barlowCondensed, barlowCondensedLight } from "@/fonts";
import { Checkbox, Input, Label } from "@/ui";

interface NewsletterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Newsletter = ({ ...rest }: NewsletterProps) => {
  return (
    <section className="bg-snowfall  py-10" {...rest}>
      <TextMarquee text="NEWSLETTER" className="my-10 text-5xl 2xl:text-6xl" />
      <div className="flex flex-col items-center justify-center gap-y-4  px-4 ">
        <h3
          className={`title  lg:text-6xl md:text-5xl   text-gray-dark ${barlowCondensed.className}`}
        >
          JOIN FOR HOT OFFERS
        </h3>
        <p
          className={`mt-2 text-center lg:text-3xl md:text-2xl text-gray-500 2xl:text-3xl ${barlowCondensedLight.className}`}
        >
          If we go all out… We do it well! Subscribe to the newsletter
          <br className="hidden md:block" />
          to get the most exclusive promos.
        </p>

        <div className="mt-10 space-y-3">
          <div className="flex items-center justify-center gap-x-2   ">
            <Input
              className="w-full  flex-1 py-6 md:min-w-96  lg:py-8 rounded-lg "
              type="email"
              placeholder="Enter your email"
            />
            <button className="btn-green md:text-base      flex  h-full items-center gap-x-1 px-2 py-3 sm:px-3   lg:py-5 lg:translate-y-1">
              Subscribe
              <Send size={15} className="hidden sm:block lg:size-6" />
            </button>
          </div>
          <div className="flex items-center gap-x-2 ">
            <Checkbox id="newsletter" className="2xl:p-4 md:size-6 " />
            <Label
              htmlFor="newsletter"
              className={`  cursor-pointer text-gray-600  md:text-xl 2xl:text-3xl   ${barlowCondensedLight.className}`}
            >
              By signing up you agree to our Privacy Policy
            </Label>
          </div>
        </div>
      </div>
    </section>
  );
};
