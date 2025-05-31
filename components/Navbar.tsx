"use client";
import { motion } from "framer-motion";
import Link from "next/link";
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
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-2xl text-primary">Uylong Song</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
