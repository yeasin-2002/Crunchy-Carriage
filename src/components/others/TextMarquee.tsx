import { barlowCondensed } from "@/fonts";
import { cn } from "@/utils";
import Marquee from "react-fast-marquee";

interface TextMarqueeProps {
  text: string;
  length?: number;
  className?: string;
  marqueeClassName?: string;
  separator?: string;
}

export const TextMarquee = ({
  text,
  length = 10,
  className,
  marqueeClassName,
  separator = "•",
}: TextMarqueeProps) => {
  return (
    <Marquee className={cn("flex my-5 gap-x-10", marqueeClassName)}>
      {Array.from({ length }).map((_, i) => {
        return (
          <p
            key={i}
            className={cn(
              "marqueeTextFillColor mx-5 font-bold text-5xl capitalize ",
              barlowCondensed.className,
              className
            )}
          >
            {text} {separator}
          </p>
        );
      })}
    </Marquee>
  );
};
