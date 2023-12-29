import {
  Advent_Pro,
  Barlow_Condensed,
  Barlow_Semi_Condensed,
  Carrois_Gothic,
  Gruppo,
  Inter,
  Itim,
  Permanent_Marker,
  Playfair_Display,
  Roboto_Slab,
  Sevillana,
} from "next/font/google";

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

// Extra

export const advent_Pro = Advent_Pro({
  subsets: ["latin"],
  weight: "600",
});

export const BarlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: "600",
});

export const carroisGothic = Carrois_Gothic({
  subsets: ["latin"],
  weight: "400",
});

export const gruppo = Gruppo({
  subsets: ["latin"],
  weight: "400",
});

export const itim = Itim({
  subsets: ["latin"],
  weight: "400",
});

export const PlayfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
});
export const playfairDisplay = Roboto_Slab({
  subsets: ["latin"],
  weight: "600",
});
