import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: "../../font/CalSans-SemiBold.woff2",
});
export const metadata: Metadata = {
  title: "Muzammil Ahmad Karimi",
  description: "Muzammil Ahmad Karimi's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
}
