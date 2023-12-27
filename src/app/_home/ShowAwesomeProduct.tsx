"use client";

import { FancyProduct } from "@/components";
// import { DetailedHTMLProps, HTMLAttributes } from "react";

// interface Props
//   extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

// export const ShowAwesomeProduct = ({ ...rest }: Props) => {
//   return (
//     <div {...rest} className="grid grid-cols-4  gap-4 bg-snowfall  mx-2 my-4">
//       <AwesomeProduct />
//       <AwesomeProduct />
//       <AwesomeProduct />
//       <AwesomeProduct />
//     </div>
//   );
// };

export function ShowAwesomeProduct() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4">
        <FancyProduct />
      </div>
    </div>
  );
}
