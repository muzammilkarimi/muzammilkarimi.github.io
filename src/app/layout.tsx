import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Modern, tech-focused font
import Head from "next/head";
import "./globals.css";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import AIAssistant from "../components/ai-assistant";

const outfit = Outfit({ subsets: ["latin"] }); // Primary font
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
      <body className={outfit.className}>
        <NextTopLoader />
        {children}
        <AIAssistant />
      </body>
    </html>
  );
}
