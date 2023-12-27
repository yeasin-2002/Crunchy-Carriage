import { Barlow_Condensed, Inter, Permanent_Marker, Sevillana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "800",
});

export const barlowCondensedLight = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export const barlowCondensedMedium = Barlow_Condensed({
  subsets: ["latin"],
  weight: "600",
});

export const sevillana = Sevillana({
  subsets: ["latin"],
  weight: "400",
});

export const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});
