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
  metadataBase: new URL("https://portfolio.uylonglab.xyz"),
  title: "Song Uylong | Full-Stack Developer & Tech Innovator",
  description:
    "Portfolio of Song Uylong (Uylong Song) — Full-Stack Developer, MIS student at Paragon International University, Co-creator of Bac.ai (Top 3 UniPreneur), developing scalable web apps with Next.js, Nuxt.js, NestJS, Laravel, and TypeScript.",
  keywords: [
    "Song Uylong",
    "Uylong Song",
    "Full-Stack Developer",
    "Software Engineer",
    "Cambodia Developer",
    "Next.js",
    "Nuxt.js",
    "NestJS",
    "Laravel",
    "TypeScript",
    "Bac.ai",
    "CamboConnect",
    "Paragon International University",
  ],
  authors: [{ name: "Song Uylong", url: "https://github.com/SongUylong" }],
  creator: "Song Uylong",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.uylonglab.xyz",
    title: "Song Uylong | Full-Stack Developer & Tech Innovator",
    description:
      "Designing interfaces, architecting APIs, and shipping features. Full-Stack Developer experienced in Next.js, Nuxt.js, NestJS, Laravel, and AI-driven educational tech.",
    siteName: "Song Uylong Portfolio",
    images: [
      {
        url: "/uylongsong.png",
        width: 800,
        height: 800,
        alt: "Song Uylong Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Song Uylong | Full-Stack Developer & Tech Innovator",
    description:
      "Full-Stack Developer, MIS student at Paragon International University, Co-creator of Bac.ai.",
    images: ["/uylongsong.png"],
  },
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
