import pizzaImg from "@/assets/covers/pizza/ivan-torres-MQUqbmszGGM-unsplash.jpg";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface VideoIntroProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const VideoIntro = ({ ...rest }: VideoIntroProps) => {
  return (
    <div
      {...rest}
      className="w-full   bg-no-repeat bg-cover bg-center  min-h-[35rem] into-center relative"
      style={{ backgroundImage: `url(${pizzaImg.src})` }}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <h4 className="text-6xl font-bold  text-center text-gray-100 ">
          MAKE THE THING ANYTHING
          <br />
          IS POSSIBLE
        </h4>
      </div>
    </div>
  );
};
