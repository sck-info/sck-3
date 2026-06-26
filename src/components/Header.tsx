"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Sessions", href: "#sessions" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone bg-paper/80 backdrop-blur-md transition-all duration-300">
      <Container className="flex items-center justify-between py-5">
        <a 
          href="#top" 
          className="font-display text-xl font-medium tracking-tight text-ink hover:opacity-80 transition-opacity"
        >
          Sharath Chandra <span className="font-serif italic font-normal">Kancherla</span>
        </a>

        <nav className="hidden gap-8 sm:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-ink-soft hover:text-ink transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-ink hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="sm:hidden p-1 text-ink hover:opacity-75 transition-opacity"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </Container>

      {menuOpen && (
        <nav
          className="border-t border-stone bg-paper/95 backdrop-blur-md sm:hidden animate-in fade-in slide-in-from-top-4 duration-200"
          aria-label="Primary mobile"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm uppercase tracking-wider font-medium text-ink-soft hover:bg-stone-light hover:text-ink transition-all"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
