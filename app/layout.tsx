import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const lato = Lato({
  weight: ["300", "400", "700", "900"], // Specify the weights you need
  subsets: ["latin"], // Or other subsets like 'latin-ext', 'cyrillic', etc.
  display: "swap", // 'swap' is generally good for performance (alternative to default 'optional')
  variable: "--font-lato", // Optional: Define a CSS variable for easier use with Tailwind CSS
});

export const metadata: Metadata = {
  title: "Uylong Song",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background antialiased">{children}</body>
    </html>
  );
}
