import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Menu = ({ ...rest }: Props) => {
  return <div {...rest}>Menu</div>;
};
