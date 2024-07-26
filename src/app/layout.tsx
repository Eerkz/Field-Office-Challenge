import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Favicon from "/public/favicon.ico";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Streamforge",
  description: "The ultimate influencer discovery platform.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
