"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Sessions", href: "#sessions" },
  { label: "Contact", href: "#contact" },
];

const sessionCategories = [
  { id: "therapy", label: "Therapy Sessions" },
  { id: "consultation", label: "1-on-1 Consultations" },
  { id: "class", label: "Music Classes" },
  { id: "workshop", label: "Workshops" },
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
      "--color-paper": "#F0F3FA",
      "--color-ink": "#13163A",
      "--color-ink-soft": "#3E4473",
      "--color-clay": "#D97706",
      "--color-moss": "#2563EB",
      "--color-moss-dark": "#1D4ED8",
      "--color-stone": "#CBD5E1",
      "--color-stone-light": "#E2E8F0",
      "--color-gold": "#F59E0B",
      "--color-border-active": "#13163A",
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
  const [heroTemplate, setHeroTemplate] = useState<"template1" | "template2">("template1");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTemplate = localStorage.getItem("hero-template");
    if (savedTemplate === "template2") {
      setHeroTemplate("template2");
    }
    const handleTemplateChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ template: "template1" | "template2" }>;
      if (customEvent.detail && customEvent.detail.template) {
        setHeroTemplate(customEvent.detail.template);
      }
    };
    window.addEventListener("change-hero-template", handleTemplateChange);
    return () => window.removeEventListener("change-hero-template", handleTemplateChange);
  }, []);

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

  const handleSelectCategory = (tabId: string) => {
    window.dispatchEvent(new CustomEvent("select-session-tab", { detail: { tab: tabId } }));
    const sessionsElem = document.getElementById("sessions");
    if (sessionsElem) {
      sessionsElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isTemplate2 = heroTemplate === "template2";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isTemplate2 
        ? isScrolled 
          ? "bg-[#090A0F]/95 text-paper border-b border-white/10 backdrop-blur-md shadow-lg py-3.5" 
          : "bg-transparent text-paper border-none py-5" 
        : isScrolled
          ? "bg-paper/95 text-ink border-b border-stone backdrop-blur-md shadow-sm py-3.5"
          : "bg-transparent text-ink border-none py-5"
    }`}>
      <Container className="flex items-center justify-between">
        <a 
          href="#top" 
          className="group flex flex-col items-start transition-opacity hover:opacity-90"
        >
          <span className={`font-display text-xl sm:text-2xl font-medium tracking-tight ${
            isTemplate2 ? "text-paper" : "text-ink"
          }`}>
            Sharath Chandra <span className="font-serif italic font-normal text-clay">Kancherla</span>
          </span>
          <span className={`text-[9px] font-mono tracking-[0.25em] uppercase font-semibold mt-0.5 ${
            isTemplate2 ? "text-paper/60" : "text-ink-soft/70"
          }`}>
            EST. 2012 / HOLISTIC MENTOR
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 sm:flex" aria-label="Primary">
            {navLinks.map((link) => {
              if (link.label === "Sessions") {
                return (
                  <div key={link.href} className="relative group inline-flex items-center">
                    <a
                      href={link.href}
                      className={`text-xs uppercase tracking-widest font-medium transition-colors inline-flex items-center gap-1 leading-none ${
                        isTemplate2 ? "text-paper/80 hover:text-paper" : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180 text-clay" />
                    </a>

                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 min-w-[200px]">
                      <div className="bg-paper border border-stone shadow-xl p-2 flex flex-col gap-1">
                        {sessionCategories.map((cat) => (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => handleSelectCategory(cat.id)}
                            className="px-3 py-2 text-[11px] font-mono tracking-wider text-ink-soft hover:bg-stone-light hover:text-ink text-left transition-colors cursor-pointer"
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors inline-flex items-center leading-none ${
                    isTemplate2 ? "text-paper/80 hover:text-paper" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4 border-l border-stone/40 pl-6 py-1">
            <div className="flex items-center gap-1.5 font-mono text-[10px]">
              <span className={`uppercase tracking-wider font-medium mr-1 ${isTemplate2 ? "text-paper/60" : "text-ink-soft/70"}`}>Hero:</span>
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("change-hero-template", { detail: { template: "template1" } }));
                  localStorage.setItem("hero-template", "template1");
                }}
                className={`px-1.5 py-0.5 tracking-wider transition-colors cursor-pointer ${
                  !isTemplate2 ? "font-bold text-clay underline underline-offset-4" : "text-paper/60 hover:text-paper"
                }`}
              >
                T1
              </button>
              <span className={isTemplate2 ? "text-paper/30" : "text-stone"}>|</span>
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("change-hero-template", { detail: { template: "template2" } }));
                  localStorage.setItem("hero-template", "template2");
                }}
                className={`px-1.5 py-0.5 tracking-wider transition-colors cursor-pointer ${
                  isTemplate2 ? "font-bold text-clay underline underline-offset-4" : "text-ink-soft hover:text-ink"
                }`}
              >
                T2
              </button>
            </div>

            <div className="flex items-center gap-2 border-l border-stone pl-4">
              <span className="text-[9px] uppercase tracking-wider font-mono font-medium text-ink-soft/70 mr-1">Palette:</span>
              <div className="flex gap-2">
                {Object.entries(palettes).map(([key, palette]) => (
                  <button
                    key={key}
                    onClick={() => changePalette(key as any)}
                    className="w-4 h-4 rounded-full border transition-all duration-300 relative group cursor-pointer"
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
              {navLinks.map((link) => {
                if (link.label === "Sessions") {
                  return (
                    <div key={link.href} className="flex flex-col gap-1">
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-md px-3 py-2.5 text-sm uppercase tracking-wider font-medium text-ink-soft hover:bg-stone-light hover:text-ink transition-all flex items-center justify-between"
                      >
                        <span>{link.label}</span>
                      </a>
                      <div className="pl-4 flex flex-col gap-1 border-l-2 border-stone/60 ml-3 mb-2">
                        {sessionCategories.map((cat) => (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => {
                              setMenuOpen(false);
                              handleSelectCategory(cat.id);
                            }}
                            className="px-3 py-2 text-xs font-mono text-ink-soft hover:text-clay text-left transition-colors cursor-pointer"
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md px-3 py-3 text-sm uppercase tracking-wider font-medium text-ink-soft hover:bg-stone-light hover:text-ink transition-all"
                  >
                    {link.label}
                  </a>
                );
              })}
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
