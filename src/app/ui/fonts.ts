import { Inter, Lusitana } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const ppNeueMachina = localFont({
  src: [
    {
      path: "../../../public/fonts/PPNeueMachina-InktrapRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/PPNeueMachina-InktrapUltrabold.otf",
      weight: "400",
      style: "bold",
    },
  ],
  variable: "--font-pp-neue-machina",
  display: "swap",
});
