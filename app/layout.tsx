import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeWipeProvider } from "@/context/ThemeWipeContext";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background antialiased font-sans">
        <Toaster />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ThemeWipeProvider>{children}</ThemeWipeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
