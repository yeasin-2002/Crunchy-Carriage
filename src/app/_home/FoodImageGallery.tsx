import { DetailedHTMLProps, HTMLAttributes } from "react";

interface FoodImageGellaryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FoodImageGallery = ({ ...rest }: FoodImageGellaryProps) => {
  return <div {...rest}>FoodImageGallery</div>;
};
