import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BubbleBackground from "./components/BubbleBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syifa Rafifah - Portfolio",
  description: "Software Engineering Student & Front-End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BubbleBackground />
        {children}
      </body>
    </html>
  );
}