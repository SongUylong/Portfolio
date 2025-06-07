import type { Metadata } from "next";
import { Lato, Noto_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeWipeProvider } from "@/context/ThemeWipeContext";
const lato = Lato({
  weight: ["300", "400", "700", "900"], // Specify the weights you need
  subsets: ["latin"], // Or other subsets like 'latin-ext', 'cyrillic', etc.
  display: "swap", // 'swap' is generally good for performance (alternative to default 'optional')
  variable: "--font-lato", // Optional: Define a CSS variable for easier use with Tailwind CSS
});
const notoSerif = Noto_Serif({
  subsets: ["latin"], // specify subsets you need
  weight: ["400", "700"], // specify weights you want
  variable: "--font-noto-serif", // optional CSS variable
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
      className={`${lato.variable} ${notoSerif.variable}  scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeWipeProvider>{children}</ThemeWipeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
