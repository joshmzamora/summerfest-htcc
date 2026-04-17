import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Holy Trinity Summer Fest 2026",
  description:
    "Holy Trinity Summer Fest 2026 is a family-friendly Catholic church festival benefitting Holy Trinity Catholic Church's building fund.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
