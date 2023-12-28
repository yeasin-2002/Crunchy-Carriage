import cover from "@/assets/covers/add1_cover.jpg";
import { barlowCondensed, barlowCondensedLight } from "@/fonts";
import { cn } from "@/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface TodaysMealsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const TodaysMeals = ({ ...rest }: TodaysMealsProps) => {
  return (
    <div
      {...rest}
      className="relative flex h-full min-h-[35rem] w-full flex-col items-center   justify-center text-gray-50"
      style={{
        backgroundImage: `url(${cover.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h4
        className={cn(
          "text-center text-6xl  font-extrabold text-gray-50 2xl:text-7xl",
          barlowCondensed.className
        )}
      >
        {"TODAY'S "}A <br /> {"STACKIN' "}DAY
      </h4>
      <p
        className={cn(
          "my-9   text-center text-2xl 2xl:text-4xl sm:mt-16",
          barlowCondensedLight.className
        )}
      >
        *Additional charge for premium toppings.{" "}
        <br className="hidden sm:block" /> Minimum of 2 required.
      </p>

      <button className="btn-green     px-6 py-4">SHOP NOW</button>
    </div>
  );
};
