import { DetailedHTMLProps, HTMLAttributes } from "react";

interface HeroProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Herot = ({ ...rest }: HeroProps) => {
  return <div {...rest}></div>;
};
