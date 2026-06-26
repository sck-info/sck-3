"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import HangingLotus from "@/components/ui/HangingLotus";

type StateKey = "mind" | "body" | "heart" | "soul" | "voice";

interface SomaticState {
  key: StateKey;
  label: string;
  icon: string;
  shortDesc: string;
  recommendedService: string;
  serviceId: string;
  explanation: string;
  formUrl: string;
  benefits: string[];
}

const somaticStates: SomaticState[] = [
  {
    key: "mind",
    label: "Mind & Focus",
    icon: "🧠",
    shortDesc: "Mental exhaustion, brain fog, or persistent stress.",
    recommendedService: "CranioSacral Therapy (CST)",
    serviceId: "cst",
    explanation: "Your mind is seeking quietude. CranioSacral Therapy works through gentle touch to regulate your central nervous system, helping ease mental fatigue, chronic stress, and sleep blockages by restoring somatic stillness.",
    formUrl: "https://forms.gle/REPLACE_WITH_THERAPY_FORM",
    benefits: ["Nervous system regulation", "Deep mental decompression", "Alleviation of stress-induced headaches"]
  },
  {
    key: "body",
    label: "Body & Posture",
    icon: "🪵",
    shortDesc: "Muscular stiffness, lower back tension, or postural misalignment.",
    recommendedService: "Rakkenho Therapy",
    serviceId: "rakkenho",
    explanation: "Your body is holding structural strain. Rakkenho Therapy utilizes rhythmic, mindful foot pressure to target circulation and release physical tension, helping restore postural alignment and muscle ease.",
    formUrl: "https://forms.gle/REPLACE_WITH_THERAPY_FORM",
    benefits: ["Relief of deep muscular tension", "Postural alignment support", "Enhanced blood and lymphatic flow"]
  },
  {
    key: "heart",
    label: "Heart & Emotion",
    icon: "🫁",
    shortDesc: "Emotional weight, anxiety, or internal stagnation.",
    recommendedService: "Music Therapy & Sound Touch",
    serviceId: "music-therapy",
    explanation: "Your heart is seeking emotional flow. Music Therapy combines resonant sound frequencies, vocalizations, and custom harmonics to clear blockages, balancing your energetic body and establishing mental clarity.",
    formUrl: "https://forms.gle/REPLACE_WITH_THERAPY_FORM",
    benefits: ["Vibrational energy balancing", "Release of emotional blockages", "Calming of acute anxiety and panic"]
  },
  {
    key: "soul",
    label: "Soul & Direction",
    icon: "🧭",
    shortDesc: "Life transitions, career uncertainty, or path alignment.",
    recommendedService: "Vedic Astrology Reading",
    serviceId: "vedic-astrology",
    explanation: "Your path is seeking cosmic clarity. A Vedic Astrology chart reading maps planetary dashas and transits to discover your innate potential, decode life phases, and align actions with your soul's purpose.",
    formUrl: "https://forms.gle/REPLACE_WITH_CONSULTATION_FORM",
    benefits: ["Planetary period analysis", "Directional career guidance", "Remedial recommendations for obstacles"]
  },
  {
    key: "voice",
    label: "Voice & Habit",
    icon: "🗣️",
    shortDesc: "Creative blocks, expression issues, or limiting habits.",
    recommendedService: "NLP & Vocal Training",
    serviceId: "nlp",
    explanation: "Your expression is seeking release. A combination of classical vocal swara appreciation and Neuro-Linguistic Programming (NLP) aligns conscious and subconscious habits, clearing blockages in communication and creative flow.",
    formUrl: "https://forms.gle/REPLACE_WITH_WORKSHOPS_FORM",
    benefits: ["Limiting habit reframing", "Confidence and expression release", "Subconscious behavior remodeling"]
  }
];

export default function SomaticPathwayFinder() {
  const [selectedState, setSelectedState] = useState<StateKey>("mind");

  const activeState = somaticStates.find((s) => s.key === selectedState)!;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="pathway-finder" className="border-t border-stone py-24 sm:py-32 bg-paper relative overflow-hidden">
      <HangingLotus align="left" />
      <HangingLotus align="right" />

      <div className="absolute top-[10%] left-[-8%] w-80 h-80 text-stone/10 select-none pointer-events-none transform -rotate-45">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C50 0 35 30 35 60 C35 80 50 100 50 100 C50 100 65 80 65 60 C65 30 50 0 50 0 Z" opacity="0.25" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-light/60 border border-stone rounded-none mb-4">
            <span className="text-clay text-[10px]" aria-hidden="true">&#10047;</span>
            <span className="text-[9px] font-mono tracking-[0.25em] font-bold text-moss">
              SOMATIC CHECK-IN &bull; DEHA MANAS
            </span>
          </div>

          <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            How does your <span className="font-serif italic font-normal text-clay">body</span> feel today?
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-ink-soft leading-relaxed font-light">
            Somatic awareness is the first step to holistic health. Select the area that resonates with your current state to identify your path to balance.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {somaticStates.map((state) => {
            const isSelected = state.key === selectedState;
            return (
              <motion.div
                key={state.key}
                variants={itemVariants}
                className={`border transition-all duration-300 flex flex-col relative rounded-none ${
                  isSelected
                    ? "border-clay bg-stone-light/20 shadow-sm"
                    : "border-stone bg-paper hover:border-clay/40"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-clay" />
                )}
                <button
                  type="button"
                  onClick={() => setSelectedState(state.key)}
                  className="p-6 text-left cursor-pointer w-full flex-1 flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-2xl block mb-4" role="img" aria-label={state.label}>
                      {state.icon}
                    </span>
                    <h3 className="font-display text-lg font-medium text-ink">
                      {state.label}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-ink-soft font-light">
                      {state.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-light flex items-center justify-between w-full">
                    <span className="text-[9.5px] uppercase font-mono tracking-widest text-clay">
                      Check In
                    </span>
                    <span className={`text-[10px] transition-transform duration-300 ${
                      isSelected ? "translate-x-1 text-clay" : "text-ink-soft group-hover:translate-x-1"
                    }`}>
                      &rarr;
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="block lg:hidden border-t border-stone bg-stone-light/10 p-6 overflow-hidden w-full"
                    >
                      <span className="text-[10px] uppercase font-mono tracking-widest text-clay font-bold block mb-2">
                        Recommended Path &bull; {state.recommendedService}
                      </span>
                      <p className="text-xs leading-relaxed text-ink-soft font-light">
                        {state.explanation}
                      </p>

                      <div className="mt-4 flex flex-col gap-2">
                        {state.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2">
                            <span className="text-clay text-xs" aria-hidden="true">&#10047;</span>
                            <span className="text-xs text-ink font-sans tracking-wide">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-col gap-3">
                        <a
                          href="#sessions"
                          className="inline-flex items-center justify-center text-center bg-ink text-paper px-4 py-3 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-[#201715] border border-ink"
                        >
                          Explore Sessions
                        </a>
                        <a
                          href={state.formUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center text-center bg-transparent text-ink px-4 py-3 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-stone-light border border-stone"
                        >
                          Register Now
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-8 border border-stone bg-stone-light/15 p-8 sm:p-10 relative hidden lg:block">
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-clay/30" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-clay/30" />

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedState}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8">
                <span className="text-[10px] uppercase font-mono tracking-widest text-clay font-bold block mb-2">
                  Recommended Path &bull; {activeState.recommendedService}
                </span>
                <p className="text-sm leading-relaxed text-ink-soft font-light">
                  {activeState.explanation}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {activeState.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <span className="text-clay text-xs" aria-hidden="true">&#10047;</span>
                      <span className="text-xs text-ink font-sans tracking-wide">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 w-full shrink-0">
                <a
                  href="#sessions"
                  className="inline-flex items-center justify-center text-center bg-ink text-paper px-6 py-4 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-[#201715] hover:-translate-y-0.5 border border-ink"
                >
                  Explore Sessions
                </a>
                <a
                  href={activeState.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-center bg-transparent text-ink px-6 py-4 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-stone-light hover:-translate-y-0.5 border border-stone"
                >
                  Register Now
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
