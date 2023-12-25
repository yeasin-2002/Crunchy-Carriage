import { Send } from "lucide-react";
import { DetailedHTMLProps, Fragment, HTMLAttributes } from "react";

import { TextMarquee } from "@/components";
import { barlowCondensed, barlowCondensedLight } from "@/fonts";
import { Checkbox, Input } from "@/ui";

interface NewsletterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Newsletter = ({ ...rest }: NewsletterProps) => {
  return (
    <section className="bg-snowfall mt-4 py-10" {...rest}>
      <TextMarquee text="SUBSCRIBE" className="my-10" />
      <div className="flex flex-col items-center justify-center gap-y-4  ">
        <h3 className={`title    text-gray-dark ${barlowCondensed.className}`}>
          JOIN FOR HOT OFFERS
        </h3>
        <p
          className={`text-center text-gray-500 mt-2 ${barlowCondensedLight.className}`}
        >
          If we go all out… We do it well! Subscribe to the newsletter
          <br />
          to get the most exclusive promos.
        </p>

        <div className="space-y-3 mt-10">
          <div className="flex gap-x-2 justify-center items-center  ">
            <Input
              className="w-full  min-w-96 py-6 "
              type="email"
              placeholder="Enter your email"
            />
            <button className="btn-green   h-full  flex items-center gap-x-1 py-3 ">
              Subscribe
              <Send size={15} />
            </button>
          </div>
          <div className="flex gap-x-2 items-center">
            <Checkbox />
            <p
              className={`  text-gray-600    ${barlowCondensedLight.className}`}
            >
              By signing up you agree to our Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
