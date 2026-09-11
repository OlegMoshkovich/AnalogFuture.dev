import type { Metadata } from "next";
import { Karla, Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "500", "600"],
  variable: "--font-karla",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-instrument",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Analog Future — Independent Design & Product Studio",
  description:
    "Analog Future is an independent, collaborative practice working across art direction, identity, information, and digital product design. Berlin · New York.",
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
      className={`${karla.variable} ${instrumentSans.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
