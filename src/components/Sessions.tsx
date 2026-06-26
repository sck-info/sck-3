"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import SessionCard from "@/components/SessionCard";
import { sessions } from "@/data/sessions";
import HangingLotus from "@/components/ui/HangingLotus";

type CategoryType = "therapy" | "consultation" | "classes_workshops";

interface TabConfig {
  id: CategoryType;
  label: string;
  subLabel: string;
  explanation: string;
  formUrl: string;
  buttonText: string;
}

const tabsConfig: TabConfig[] = [
  {
    id: "therapy",
    label: "Therapy Sessions",
    subLabel: "CST, Rakkenho & Sound Therapy",
    explanation:
      "Physical and emotional restoration through gentle touch, traditional Japanese rhythmic foot pressure, and sound frequency therapy. Designed to regulate the nervous system, release deeply held physical trauma, and guide the body into deep relaxation.",
    formUrl: "https://forms.gle/REPLACE_WITH_THERAPY_FORM",
    buttonText: "Register for Therapy Sessions",
  },
  {
    id: "consultation",
    label: "1-on-1 Consultations",
    subLabel: "Astrology & Palmistry Readings",
    explanation:
      "Timeless planetary charts, hand structures, and questions-based horary analysis to map life paths, relationships, and health tendencies. These consultations offer deep, customized insights and guidance without requiring complex details.",
    formUrl: "https://forms.gle/REPLACE_WITH_CONSULTATION_FORM",
    buttonText: "Book a 1-on-1 Consultation",
  },
  {
    id: "classes_workshops",
    label: "Classes & Workshops",
    subLabel: "Music, NLP & Lifestyle Coaching",
    explanation:
      "Accelerated growth programs featuring Carnatic vocal training, Neuro-Linguistic programming (NLP) subconscious habit adjustments, and a comprehensive nutrition course to help you cultivate balance, energy, and mental agility.",
    formUrl: "https://forms.gle/REPLACE_WITH_WORKSHOPS_FORM",
    buttonText: "Register for Classes & Workshops",
  },
];

export default function Sessions() {
  const [activeTab, setActiveTab] = useState<CategoryType>("therapy");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeSessions = sessions.filter((session) => {
    if (activeTab === "therapy") return session.category === "therapy";
    if (activeTab === "consultation")
      return session.category === "consultation";
    return session.category === "class" || session.category === "workshop";
  });

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
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-clay bg-stone/40 px-3.5 py-1.5 border border-stone">
            Our Offerings
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Choose Your{" "}
            <span className="font-serif italic font-normal text-clay">
              Pathway
            </span>
          </h2>
          <p className="mt-4 max-w-prose text-xs sm:text-sm text-ink-soft leading-relaxed font-light">
            Select a category below. Hover over any session card to reveal
            details and focus your wellness selection.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 border border-stone">
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
                className="relative flex flex-col items-center text-center py-6 px-4 cursor-pointer transition-all duration-300 overflow-hidden outline-none"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-[#1C1613]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                <span
                  className={`relative z-10 font-display text-lg font-medium transition-colors duration-300 ${
                    isActive ? "text-paper" : "text-ink hover:text-clay"
                  }`}
                >
                  {tab.label}
                </span>

                <span
                  className={`relative z-10 text-[10px] font-mono mt-1 tracking-wider uppercase transition-colors duration-300 ${
                    isActive ? "text-paper/70" : "text-ink-soft"
                  }`}
                >
                  {tab.subLabel}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 border-x border-b border-stone p-8 sm:p-10 bg-stone-light/15 relative">
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-clay/30" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-clay/30" />
          <p className="font-serif text-sm italic text-ink-soft leading-relaxed text-center max-w-3xl mx-auto">
            &ldquo;{activeTabConfig.explanation}&rdquo;
          </p>
        </div>

        <div className="mt-12">
          <motion.div
            layout
            className={`grid grid-cols-1 gap-8 transition-all duration-300 ${
              activeTab === "consultation"
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
          <div className="border border-clay/60 p-6 bg-stone-light/35 text-center max-w-2xl mx-auto relative">
            <span className="absolute top-0 left-0 bg-clay text-paper text-[8px] uppercase tracking-widest font-bold px-2.5 py-0.5">
              Scheduling Note
            </span>
            <p className="text-xs uppercase tracking-widest font-semibold text-ink mt-2">
              Payment &amp; Coordination
            </p>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft font-light">
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
