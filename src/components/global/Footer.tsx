import { DetailedHTMLProps, HTMLAttributes } from "react";

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({ ...rest }: FooterProps) => {
  return <footer {...rest}></footer>;
};
