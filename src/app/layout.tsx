import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import AIAssistant from "../components/ai-assistant";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: "../../font/CalSans-SemiBold.woff2",
});
export const metadata: Metadata = {
  title: "Muzammil Ahmad Karimi | CS Engineer & AI Enthusiast",
  description: "Explore the portfolio of Muzammil Ahmad Karimi, an M.Tech student at IIT Patna specializing in AI-integrated web development, Full-Stack solutions, and modern UI/UX design.",
  keywords: ["Muzammil Ahmad Karimi", "IIT Patna", "Computer Science", "AI Developer", "Full Stack Developer", "Next.js Portfolio"],
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
        <AIAssistant />
      </body>
    </html>
  );
}
