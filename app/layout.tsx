import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hanif Aslam Febru Putra | Web & Mobile Developer",
  description:
    "Personal portfolio of Hanif Aslam Febru Putra, a Web and Mobile Developer with a Neo Brutalist design approach",
  generator: "v0.dev",
   icons: {
    icon: "photos/favicon-2.png", // Letakkan file ini di folder /public
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
