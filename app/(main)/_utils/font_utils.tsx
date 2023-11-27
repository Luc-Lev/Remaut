import { Permanent_Marker } from "next/font/google";
import localFont from "next/font/local";

export const featureFont = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});

export const mainFont = localFont({
  src: "../../../public/fonts/tt_drugs/regular.otf",
});

export const titleFont = localFont({
  src: "../../../public/fonts/dream_avenue/regular.otf",
});
