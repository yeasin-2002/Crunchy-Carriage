import { DetailedHTMLProps, HTMLAttributes } from "react";

interface FoodShowOffProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FoodShowOff = ({ ...rest }: FoodShowOffProps) => {
  return <div {...rest}></div>;
};
