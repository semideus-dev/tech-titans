import { Barlow, Montserrat, Quicksand } from "next/font/google";

export const primary = Barlow({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const secondary = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
});
