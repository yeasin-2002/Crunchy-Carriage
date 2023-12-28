import { FancyText, FlowerBottomSvg, FlowerTopSvg } from "@/components/icons";
import Image from "next/image";

// export default function FancyProduct() {
//   return (
//     <div className="container mx-auto">
//       <div className="grid grid-cols-4">
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>
//     </div>
//   );
// }

export function FancyProduct() {
  return (
    <div className="group min-w-max cursor-pointer overflow-hidden bg-white transition-all hover:bg-[#f2a735]">
      <div className="stack-content h-full">
        <div className="stack-content h-full">
          <div className="my-auto">
            <div className="h-36" />
            <div className="stack-content">
              <a
                href="https://demo2.wpopal.com/fazfood/product-category/specials/"
                title="Specials"
                className="mx-auto"
              >
                <Image
                  decoding="async"
                  width={320}
                  height={320}
                  src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/11/h1_cat1.png"
                  alt="Specials"
                />
              </a>
              <div className="-z-[1] m-auto">
                <div className="translate-x-4 translate-y-4 opacity-100 transition-all group-hover:-translate-y-20 group-hover:translate-x-32 group-hover:opacity-100">
                  <FlowerTopSvg />
                </div>
                <div className="-translate-x-6 -translate-y-6 opacity-100 transition-all group-hover:-translate-x-24 group-hover:translate-y-16 group-hover:opacity-100">
                  <FlowerBottomSvg />
                </div>
              </div>
            </div>
            <div className="h-36" />
          </div>
          <div className="relative h-full w-full">
            <div className="absolute top-[75%] flex w-full  scale-[.80] items-center justify-center text-black opacity-30 transition-all group-hover:top-[5%] group-hover:text-white group-hover:opacity-100">
              <FancyText />
            </div>
            <div className="absolute bottom-[10%] mx-auto w-full text-center font-sans text-3xl  font-bold text-white opacity-0 transition-all group-hover:opacity-100">
              <div>
                <a href="https://demo2.wpopal.com/fazfood/product-category/specials/" title="Specials">
                  <span>Specials</span>
                </a>
              </div>
              <span className="cat-total">3Products </span>
            </div>
          </div>
        </div>
        <div className="-z-[1] my-auto hidden justify-center group-hover:flex ">
          <div className="grid max-w-max -rotate-[30deg] text-center font-sans text-3xl  font-bold uppercase leading-relaxed text-[#EAEAEA] transition-all [word-spacing:1.5rem] group-hover:opacity-30">
            <span>hot dog</span>
            <span>hot dog</span>
            <span>hot dog</span>
            <span>hot dog</span>
            <span>hot dog</span>
            <span>hot dog</span>
          </div>
        </div>
      </div>
    </div>
  );
}
