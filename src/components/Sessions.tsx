"use client";

import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import SessionCard from "@/components/SessionCard";
import { sessions } from "@/data/sessions";
import HangingLotus from "@/components/ui/HangingLotus";

type CategoryType = "therapy" | "consultation" | "class" | "workshop";

interface TabConfig {
  id: CategoryType;
  label: string;
  subLabel: string;
  sanskritQuote: string;
  englishQuote: string;
  formUrl: string;
  buttonText: string;
}

const tabsConfig: TabConfig[] = [
  {
    id: "therapy",
    label: "Therapy Sessions",
    subLabel: "CST, Rakkenho & Sound Therapy",
    sanskritQuote: "शरीरमाद्यं खलु धर्मसाधनम् • आरोग्यं परमं भाग्यं स्वास्थ्यं सर्वार्थसाधनम्",
    englishQuote: "The body is the primary vehicle for life's purpose. Complete physical and emotional restoration is the ultimate fortune, and absolute wellness is the key to achieving all tasks.",
    formUrl: "https://forms.gle/REPLACE_WITH_THERAPY_FORM",
    buttonText: "Register for Therapy Sessions",
  },
  {
    id: "consultation",
    label: "1-on-1 Consultations",
    subLabel: "Astrology & Palmistry Readings",
    sanskritQuote: "ज्योतिषं ज्ञानचक्षुषां मार्गदर्शकम् • तमसो मा ज्योतिर्गमय",
    englishQuote: "Vedic insight is the guiding eye of knowledge. Lead me from the darkness of uncertainty to the light of cosmic clarity, mapping out relationships and hand structures to align our life directions.",
    formUrl: "https://forms.gle/REPLACE_WITH_CONSULTATION_FORM",
    buttonText: "Book a 1-on-1 Consultation",
  },
  {
    id: "class",
    label: "Music Classes",
    subLabel: "Carnatic & Light Music Training",
    sanskritQuote: "नादब्रह्म परानन्दः • संगीतं मुक्तिदायकम्",
    englishQuote: "Sound resonance is the supreme bliss. Dedicated musical practice purifies the soul and unlocks emotional harmony and vocal mastery.",
    formUrl: "https://forms.gle/REPLACE_WITH_CLASSES_FORM",
    buttonText: "Register for Music Classes",
  },
  {
    id: "workshop",
    label: "Workshops",
    subLabel: "NLP Coaching & Lifestyle Seminars",
    sanskritQuote: "ज्ञानेन हि सदृशं पवित्रमिह न विद्यते",
    englishQuote: "There is no purifier in this world like mindful learning. We adjust subconscious habits, cognitive focus, and nutrition to cultivate balanced life energy.",
    formUrl: "https://forms.gle/REPLACE_WITH_WORKSHOPS_FORM",
    buttonText: "Register for Workshops",
  },
];

export default function Sessions() {
  const [activeTab, setActiveTab] = useState<CategoryType>("therapy");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleSelectTab = (e: Event) => {
      const customEvent = e as CustomEvent<{ tab: CategoryType }>;
      if (customEvent.detail && customEvent.detail.tab) {
        setActiveTab(customEvent.detail.tab);
      }
    };
    window.addEventListener("select-session-tab", handleSelectTab);
    return () => window.removeEventListener("select-session-tab", handleSelectTab);
  }, []);

  const activeSessions = sessions.filter((session) => session.category === activeTab);

  const activeTabConfig = tabsConfig.find((tab) => tab.id === activeTab)!;

  return (
    <section
      id="sessions"
      className="border-t border-stone py-24 sm:py-32 bg-paper relative"
    >
      <HangingLotus align="left" />
      <HangingLotus align="right" />
      <Container>
        <div className="flex flex-col items-center text-center">
          <span className="text-[10px] font-mono tracking-[0.25em] font-bold text-moss uppercase bg-stone-light/60 px-4 py-1.5 border border-stone inline-flex items-center gap-2">
            DEHA MANAS &bull; OUR OFFERINGS
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink">
            Choose Your{" "}
            <span className="font-serif italic font-normal text-clay">
              Pathway
            </span>
          </h2>
          <p className="mt-4 max-w-prose text-sm sm:text-base text-ink-soft leading-relaxed font-light">
            Select a category below. Hover over any session card to reveal
            details and focus your wellness selection.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-stone">
          {tabsConfig.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  setHoveredId(null);
                }}
                className="relative flex flex-col items-center text-center py-6 px-3 cursor-pointer transition-all duration-300 overflow-hidden outline-none border-b sm:border-b-0 sm:border-r border-stone last:border-r-0"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-[#1C1613]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                <span
                  className={`relative z-10 font-display text-base sm:text-lg font-medium transition-colors duration-300 ${
                    isActive ? "text-paper" : "text-ink hover:text-clay"
                  }`}
                >
                  {tab.label}
                </span>

                <span
                  className={`relative z-10 text-[10px] sm:text-[11px] font-mono mt-1 tracking-wider uppercase transition-colors duration-300 ${
                    isActive ? "text-paper/70" : "text-ink-soft"
                  }`}
                >
                  {tab.subLabel}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 border-x border-b border-stone p-8 sm:p-10 bg-stone-light/15 relative text-center flex flex-col gap-3">
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-clay/30" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-clay/30" />
          <p className="font-hindi text-xl sm:text-2xl text-clay font-normal tracking-wide leading-relaxed">
            &ldquo;{activeTabConfig.sanskritQuote}&rdquo;
          </p>
          <p className="font-sans text-sm sm:text-base italic text-ink-soft leading-relaxed max-w-3xl mx-auto font-light">
            {activeTabConfig.englishQuote}
          </p>
        </div>

        <div className="mt-12">
          <motion.div
            layout
            className={`grid grid-cols-1 gap-8 transition-all duration-300 ${
              activeSessions.length >= 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            <AnimatePresence mode="popLayout">
              {activeSessions.map((session) => (
                <motion.div
                  key={session.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <SessionCard
                    session={session}
                    isHovered={hoveredId === session.id}
                    isAnyHovered={hoveredId !== null}
                    onHover={() => setHoveredId(session.id)}
                    onLeave={() => setHoveredId(null)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-stone pt-12 flex flex-col items-center gap-6">
          <div className="border border-clay/60 p-6 sm:p-8 bg-stone-light/35 text-center max-w-2xl mx-auto relative">
            <span className="absolute top-0 left-0 bg-clay text-paper text-[9px] uppercase tracking-widest font-bold px-3 py-1">
              Scheduling Note
            </span>
            <p className="text-sm uppercase tracking-widest font-semibold text-ink mt-2">
              Payment &amp; Coordination
            </p>
            <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-ink-soft font-light">
              Pricing details are listed directly within the registration forms.
              Once you submit the form and complete your payment, our team will
              reach out within{" "}
              <span className="highlight-marker">48 to 72 hours</span> to
              schedule and confirm your booking.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            href={activeTabConfig.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 bg-ink text-paper px-10 py-5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-[#2E1E16] rounded-none border border-ink shadow-md"
          >
            {activeTabConfig.buttonText}
            <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-clay" />
          </motion.a>
        </div>
      </Container>
    </section>
  );
}
