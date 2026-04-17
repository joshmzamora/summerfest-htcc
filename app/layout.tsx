import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";

import "./globals.css";

const festivalDisplay = localFont({
  src: "./fonts/moor-vantage-texas-cowboy-beer..otf",
  variable: "--font-display",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Holy Trinity Summer Fest",
  description:
    "Summer Fest is a family-friendly Catholic church festival benefitting Holy Trinity Catholic Church's building fund.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${festivalDisplay.variable} ${nunitoSans.variable}`}>{children}</body>
    </html>
  );
}
