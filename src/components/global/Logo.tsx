import logoImg from "@/assets/Brand/logo-transparent.png";
import { cn } from "@/utils";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}
export const Logo = ({ ...rest }: LogoProps) => {
  return (
    <Link href={"/"}>
      <Image
        {...rest}
        src={logoImg}
        alt="Crunchy Carriage logo"
        width={100}
        height={100}
        className={cn("aspect-auto", rest.className)}
      />
    </Link>
  );
};
