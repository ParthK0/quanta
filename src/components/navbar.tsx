"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "[ HOME ]", href: "/" },
  { name: "[ TEAM ]", href: "/team" },
  { name: "[ EVENTS ]", href: "/events" },
  { name: "[ GALLERY ]", href: "/gallery" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-[#0B1120]/95 backdrop-blur-md selection:bg-[#00E5FF] selection:text-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <img
            src="/logo.png"
            alt="Quanta Logo"
            className="h-24 md:h-32 w-auto object-contain brightness-0 invert group-hover:drop-shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono font-bold tracking-[0.2em] uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-all hover:text-[#00E5FF] py-2",
                pathname === link.href ? "text-[#00E5FF] border-b-2 border-[#00E5FF]" : "text-white/50 border-b-2 border-transparent"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <button
          className="md:hidden p-2 text-white/50 hover:text-[#00E5FF] transition-colors border border-transparent hover:border-[#00E5FF]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/20 bg-[#0B1120] overflow-hidden"
          >
            <nav className="flex flex-col space-y-0 text-center font-mono text-sm tracking-[0.2em] uppercase font-bold">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "py-6 border-b border-white/10 transition-colors hover:bg-white/5 hover:text-[#00E5FF]",
                    pathname === link.href ? "text-[#00E5FF] bg-white/5" : "text-white/50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
