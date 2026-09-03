import type { Metadata } from "next";
import { Karla, Instrument_Sans } from "next/font/google";
import "./globals.css";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-karla",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Analog Future — Independent Design & Product Studio",
  description:
    "Analog Future is an independent design and product studio working across brand systems, digital products, and visual communication. Berlin · New York.",
  keywords: [
    "design studio",
    "brand systems",
    "digital products",
    "art direction",
    "visual communication",
    "Analog Future",
  ],
  openGraph: {
    title: "Analog Future — Independent Design & Product Studio",
    description:
      "Art direction, identity, information, and digital product design. Berlin · New York.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${karla.variable} ${instrument.variable}`}>
        {children}
      </body>
    </html>
  );
}
