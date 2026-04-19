import type { Metadata } from "next";
import localFont from "next/font/local";
import { Barlow } from "next/font/google";

import { SiteMotionProvider } from "@/components/FestivalMotion";
import { ShareSavePrompt } from "@/components/ShareSavePrompt";
import { siteContent } from "@/data/site-content";

import "./globals.css";

const festivalDisplay = localFont({
  src: "./fonts/moor-vantage-texas-cowboy-beer..otf",
  variable: "--font-display",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Summer Fest at Holy Trinity",
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
      <body className={`${festivalDisplay.variable} ${barlow.variable}`}>
        <SiteMotionProvider>
          {children}
          <ShareSavePrompt eventName={siteContent.eventName} config={siteContent.sharePrompt} />
        </SiteMotionProvider>
      </body>
    </html>
  );
}
