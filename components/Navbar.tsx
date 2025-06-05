"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Resume", href: "/resume" },
  ];
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 14, delay: 0.2 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 items-center px-4 sm:px-6 lg:px-8">
        {/* desktop navigation */}
        <div className="mr-4 hidden md:flex justify-between w-full">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-2xl text-primary">Uylong Song</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 + index * 0.1 }} // Staggered animation for links
              >
                <Link
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
        {/* mobile navigation */}
        <div className="flex flex-1 items-center justify-end space-x-2 md:hidden">
          <ThemeToggle />
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <VisuallyHidden>
                <SheetTitle>Settings</SheetTitle>
              </VisuallyHidden>
              <nav className="flex flex-col gap-6 py-6">
                <Link href="/" className="pb-6 border-b">
                  <span className="font-bold text-2xl text-primary">
                    Uylong Song
                  </span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex flex-1 justify-end">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
