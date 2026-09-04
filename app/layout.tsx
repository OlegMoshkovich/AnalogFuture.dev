import type { Metadata } from "next";
import { Inter, Instrument_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-instrument",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
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
    <html
      lang="en"
      className={`${inter.variable} ${instrument.variable} ${playfair.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
