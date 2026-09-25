"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
} from "@/components/ui/resizable-navbar";
import { useThemeWipe } from "@/context/ThemeWipeContext";
import { useTheme } from "next-themes";
export const ThemeToggleButton = () => {
  const { theme } = useTheme(); // To display the current theme icon
  const { toggleThemeWipe } = useThemeWipe(); // Get the toggle function from context
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid rendering on the server
  }

  return (
    <button
      onClick={toggleThemeWipe} // This will trigger the wipe animation
      className="p-2 rounded hover:scale-105 transition-transform z-50" // Ensure z-index is high enough if fixed, or let Navbar handle it
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};
export default function ResizeNavbar() {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "CV", link: "/Song_Uylong_CV.pdf" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navLinks} />
          <ThemeToggleButton />
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex flex-row gap-2 items-center justify-end">
              <ThemeToggleButton />
              <div className="flex flex-1 items-center justify-end space-x-2 xl:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      className="hover:bg-accent hover:text-accent-foreground"
                      aria-label="Open Navigation Menu"
                    >
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[200px] sm:w-[300px]">
                    <VisuallyHidden>
                      <SheetTitle>Settings</SheetTitle>
                    </VisuallyHidden>
                    <nav className="flex flex-col gap-6 py-6">
                      {navLinks.map((link) => {
                        const isActive = pathname === link.link;
                        const isExternal = link.link.endsWith(".pdf") || link.link.startsWith("http");
                        return isExternal ? (
                          <a
                            key={link.name}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl p-4 pl-8 font-medium hover:text-primary transition-colors flex items-center justify-between"
                          >
                            <span>{link.name}</span>
                            <span className="text-xs bg-primary/20 text-primary px-2.5 py-1 rounded-full font-semibold">
                              PDF
                            </span>
                          </a>
                        ) : (
                          <Link
                            key={link.name}
                            href={link.link}
                            className={`text-xl p-4 pl-8 font-medium hover:text-primary transition-colors  ${isActive && " bg-primary/20 text-primary rounded-full"}`}
                          >
                            {link.name}
                          </Link>
                        );
                      })}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </MobileNavHeader>
        </MobileNav>
      </Navbar>
    </div>
  );
}
