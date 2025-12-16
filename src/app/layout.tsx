import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

// CADTMonoDisplay for titles
const CADTMono = localFont({
  src: "/fonts/CADTMonoDisplay-Regular.ttf",
  variable: "--font-title",
  display: "swap",
});

// Poppins for body
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400", // make sure to include a weight
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${CADTMono.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}