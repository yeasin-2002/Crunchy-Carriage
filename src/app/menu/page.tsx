import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

 const Menu = ({ ...rest }: Props) => {
   return <div {...rest}>Menu</div>;
 };

 export default Menu;