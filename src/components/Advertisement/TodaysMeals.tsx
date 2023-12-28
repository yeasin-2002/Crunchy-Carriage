import cover from "@/assets/covers/add1_cover.jpg";
import { barlowCondensed, barlowCondensedLight } from "@/fonts";
import { cn } from "@/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface TodaysMealsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const TodaysMeals = ({ ...rest }: TodaysMealsProps) => {
  return (
    <div
      {...rest}
      className="flex justify-center flex-col items-center h-full w-full min-h-[35rem]   relative text-gray-50"
      style={{
        backgroundImage: `url(${cover.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h4
        className={cn(
          "text-6xl font-extrabold  2xl:text-7xl text-center text-gray-50",
          barlowCondensed.className
        )}
      >
        {"TODAY'S "}A <br /> {"STACKIN' "}DAY
      </h4>
      <p
        className={cn(
          "my-9  text-2xl 2xl:text-4xl text-center",
          barlowCondensedLight.className
        )}
      >
        *Additional charge for premium toppings.{" "}
        <br className="hidden 2xl:block" /> Minimum of 2 required.
      </p>

      <button className="btn-green my-10">SHOP NOW</button>
    </div>
  );
};
