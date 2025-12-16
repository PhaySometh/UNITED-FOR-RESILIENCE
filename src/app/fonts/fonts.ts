import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const cadtMonoDisplay = localFont({
  src: "./CADTMonoDisplay-Regular.ttf",
  display: "swap",
  variable: "--font-cadtmono",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-poppins",
});
