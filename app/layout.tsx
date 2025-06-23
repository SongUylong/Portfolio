import type { Metadata } from "next";
import { Chewy } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeWipeProvider } from "@/context/ThemeWipeContext";
import { Toaster } from "@/components/ui/toaster";

const chewy = Chewy({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chewy",
});

export const metadata: Metadata = {
  title: "Uylong Song",
  description: "Portfolio",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chewy.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background antialiased">
        <Toaster />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ThemeWipeProvider>{children}</ThemeWipeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
