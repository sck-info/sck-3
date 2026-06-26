"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Sessions", href: "#sessions" },
  { label: "Contact", href: "#contact" },
];

const palettes = {
  current: {
    name: "Earth Warmth",
    previewColor: "#D36037",
    colors: {
      "--color-paper": "#FCF8F5",
      "--color-ink": "#201715",
      "--color-ink-soft": "#63534E",
      "--color-clay": "#D36037",
      "--color-moss": "#3A6655",
      "--color-moss-dark": "#2B4F41",
      "--color-stone": "#EFE4DC",
      "--color-stone-light": "#F7EFE8",
      "--color-gold": "#D4A346",
      "--color-border-active": "#D36037",
    }
  },
  "sck-4": {
    name: "Royal Indigo",
    previewColor: "#1C1F4A",
    colors: {
      "--color-paper": "#FAF7F2",
      "--color-ink": "#1C1F4A",
      "--color-ink-soft": "#5A5E7A",
      "--color-clay": "#B86A16",
      "--color-moss": "#6B8F71",
      "--color-moss-dark": "#4E6B52",
      "--color-stone": "#EAE3D5",
      "--color-stone-light": "#F4EDE2",
      "--color-gold": "#E8962E",
      "--color-border-active": "#B86A16",
    }
  },
  "forest-zen": {
    name: "Serene Amethyst",
    previewColor: "#9A6A92",
    colors: {
      "--color-paper": "#F6F5F8",
      "--color-ink": "#1C1625",
      "--color-ink-soft": "#5A5265",
      "--color-clay": "#9A6A92",
      "--color-moss": "#6A8D9A",
      "--color-moss-dark": "#486772",
      "--color-stone": "#E8E4EB",
      "--color-stone-light": "#F1EDF3",
      "--color-gold": "#C5A56A",
      "--color-border-active": "#9A6A92",
    }
  }
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePalette, setActivePalette] = useState<"current" | "sck-4" | "forest-zen">("current");

  useEffect(() => {
    const saved = localStorage.getItem("selected-palette");
    if (saved && saved in palettes) {
      const key = saved as keyof typeof palettes;
      setActivePalette(key);
      const palette = palettes[key].colors;
      Object.entries(palette).forEach(([variable, value]) => {
        document.documentElement.style.setProperty(variable, value);
      });
    }
  }, []);

  const changePalette = (key: "current" | "sck-4" | "forest-zen") => {
    setActivePalette(key);
    const palette = palettes[key].colors;
    Object.entries(palette).forEach(([variable, value]) => {
      document.documentElement.style.setProperty(variable, value);
    });
    localStorage.setItem("selected-palette", key);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone bg-paper/80 backdrop-blur-md transition-all duration-300">
      <Container className="flex items-center justify-between py-5">
        <a 
          href="#top" 
          className="font-display text-xl font-medium tracking-tight text-ink hover:opacity-80 transition-opacity"
        >
          Sharath Chandra <span className="font-serif italic font-normal">Kancherla</span>
        </a>

        <div className="flex items-center gap-6">
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

          <div className="hidden sm:flex items-center gap-2 border-l border-stone pl-6 py-1">
            <span className="text-[9px] uppercase tracking-wider font-mono font-medium text-ink-soft/70 mr-1">Palette:</span>
            <div className="flex gap-2">
              {Object.entries(palettes).map(([key, palette]) => (
                <button
                  key={key}
                  onClick={() => changePalette(key as any)}
                  className="w-4 h-4 rounded-full border transition-all duration-300 relative group"
                  style={{ 
                    backgroundColor: palette.previewColor,
                    borderColor: activePalette === key ? "var(--color-clay)" : "rgba(0, 0, 0, 0.15)"
                  }}
                  title={palette.name}
                  aria-label={`Switch to ${palette.name} theme`}
                >
                  {activePalette === key && (
                    <span className="absolute inset-0 rounded-full border border-paper scale-75 block" />
                  )}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[8px] tracking-wide font-mono bg-ink text-paper opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity rounded whitespace-nowrap z-50">
                    {palette.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

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
          <Container className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-1">
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
            </div>

            <div className="border-t border-stone pt-4 px-3 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider font-mono font-medium text-ink-soft">Palette:</span>
              <div className="flex gap-3">
                {Object.entries(palettes).map(([key, palette]) => (
                  <button
                    key={key}
                    onClick={() => changePalette(key as any)}
                    className="flex items-center gap-2 rounded px-2.5 py-1.5 border text-[9px] font-mono tracking-wide uppercase font-semibold transition-all duration-300"
                    style={{ 
                      backgroundColor: activePalette === key ? "var(--color-stone-light)" : "transparent",
                      borderColor: activePalette === key ? "var(--color-clay)" : "var(--color-stone)"
                    }}
                    aria-label={`Switch to ${palette.name} theme`}
                  >
                    <span 
                      className="w-2.5 h-2.5 rounded-full inline-block shrink-0" 
                      style={{ backgroundColor: palette.previewColor }}
                    />
                    <span>{palette.name.split(" ")[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
