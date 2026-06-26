"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

type BreathStateType = "Inhale" | "Hold" | "Exhale" | "HoldAgain";

export default function Hero() {
  // Pranayama Box Breathing: Inhale (4s) -> Hold (4s) -> Exhale (4s) -> Hold (4s) = 16s cycle
  const [cycleTime, setCycleTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCycleTime((t) => (t + 1) % 16);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const phaseIndex = Math.floor(cycleTime / 4);
  const breathCount = 4 - (cycleTime % 4);
  
  const states: BreathStateType[] = ["Inhale", "Hold", "Exhale", "HoldAgain"];
  const breathState = states[phaseIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="top"
      className="relative pb-24 pt-16 sm:pt-24 sm:pb-32 overflow-hidden bg-aura"
    >
      {/* Large Lotus coming from the top-right corner inwards */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 text-clay/10 select-none pointer-events-none transform translate-x-10 -translate-y-10">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M100 0 C70 15 50 40 50 60 C50 75 65 90 80 90 C80 90 70 75 70 60 C70 40 90 15 100 0 Z" />
          <path d="M100 20 C75 30 60 50 60 70 C60 82 72 90 85 90 C85 90 75 80 75 70 C75 50 90 30 100 20 Z" opacity="0.8" />
          <path d="M100 40 C80 50 70 65 70 80 C70 88 80 90 90 90 C90 90 80 85 80 80 C80 65 90 50 100 40 Z" opacity="0.6" />
          <path d="M100 60 C85 70 80 80 80 90 M100 80 C90 85 88 90 88 90" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        </svg>
      </div>

      {/* Decorative Traditional Border Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-stone/70" />
      
      {/* Background traditional graphics (SVG drawn lotus silhouette) */}
      <div className="absolute top-[10%] left-[-5%] w-72 h-72 text-stone/20 select-none pointer-events-none transform -rotate-12">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C50 0 35 30 35 60 C35 80 50 100 50 100 C50 100 65 80 65 60 C65 30 50 0 50 0 Z" opacity="0.4" />
          <path d="M50 20 C50 20 20 40 20 70 C20 85 35 100 50 100 C50 100 35 85 35 70 C35 40 50 20 50 20 Z" opacity="0.25" />
          <path d="M50 20 C50 20 80 40 80 70 C80 85 65 100 50 100 C50 100 65 85 65 70 C65 40 50 20 50 20 Z" opacity="0.25" />
        </svg>
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center"
        >
          {/* LEFT COLUMN: Large Framed Portrait */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col justify-center items-center w-full order-last lg:order-first"
          >
            <div className="relative w-full max-w-[380px] aspect-[4/5] bg-stone-light/50 border-culture p-4 shadow-xl">
              {/* Sacred geometric frame accent */}
              <div className="absolute inset-0 border border-gold/25 m-2.5 pointer-events-none" />
              
              <div className="relative w-full h-full overflow-hidden border border-stone">
                <Image
                  src="/images/profile-hero.jpg"
                  alt="Sharath Chandra Kancherla"
                  fill
                  priority
                  className="object-cover transition-transform duration-[1200ms] hover:scale-103"
                  sizes="(min-width: 1024px) 30vw, 85vw"
                />
              </div>
              
              {/* Sandalwood Accent Tag */}
              <div className="absolute -bottom-4 right-6 bg-clay text-paper text-[9px] font-mono tracking-widest font-bold px-4 py-1.5 shadow-md">
                PRANIC INSTRUCTOR
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-soft">
                Biodynamic Breath &bull; Sound Touch
              </span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Redesigned Editorial Typography & Pranayama Guide */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col items-start gap-8"
          >
            {/* Spiritual Greeting Header (No sparkles) */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-light/60 border border-stone rounded-none mb-4">
                <span className="text-clay text-[10px]" aria-hidden="true">&#10047;</span>
                <span className="text-[9px] font-mono tracking-[0.25em] font-bold text-moss">
                  WELCOME &bull; SWAAGATAM
                </span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-6xl font-light tracking-tight leading-[1.08] text-ink">
                Cultivate Serenity. <br />
                <span className="font-serif italic font-normal text-clay">Reclaim Stillness.</span>
              </h1>
              
              {/* Sanskrit Mantra Quote block */}
              <p className="mt-4 font-serif italic text-xs tracking-wider text-ink-soft bg-stone-light/40 border-l border-clay/60 pl-4 py-1 max-w-xl">
                &ldquo;असतो मा सद्गमय &bull; तमसो मा ज्योतिर्गमय &bull; मृत्योर्मा अमृतं गमय&rdquo;<br />
                <span className="text-[10px] font-sans tracking-wide text-ink-soft/80 block mt-1 not-italic">
                  Lead me from ignorance to truth, from darkness to light, from death to immortality.
                </span>
              </p>
            </div>

            {/* Core Message */}
            <div className="max-w-xl">
              <p className="text-sm leading-relaxed text-ink-soft font-light">
                I am <span className="font-semibold text-ink">Sharath Chandra Kancherla</span>. I integrate restorative bio-dynamic CranioSacral touch, rhythmic foot pressure, vocal harmonics, and chart guidance to realign the body. This is a dedicated sanctuary crafted for your body to recall its innate pattern of rest.
              </p>
            </div>

            {/* INTERACTIVE COMPONENT: Pranayama Breath Centering (4-Phase Box Breathing) */}
            <div className="w-full max-w-xl border border-stone bg-paper p-5.5 rounded-none shadow-sm relative overflow-hidden">
              {/* No right end circle which is of no use */}
              <div className="flex items-center gap-5 relative z-10">
                {/* Pulsing circular indicator */}
                <div className="relative flex items-center justify-center shrink-0">
                  <motion.div
                    animate={{
                      scale: (breathState === "Inhale" || breathState === "Hold") ? 1.22 : 1,
                    }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className={`w-14 h-14 rounded-full border flex items-center justify-center transition-colors duration-500 ${
                      breathState === "Inhale"
                        ? "bg-clay/10 border-clay"
                        : breathState === "Hold"
                        ? "bg-gold/10 border-gold"
                        : breathState === "Exhale"
                        ? "bg-moss/10 border-moss"
                        : "bg-stone-light border-stone"
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-ink">{breathCount}s</span>
                  </motion.div>
                  
                  {/* Outer radiating aura */}
                  <span className={`absolute inset-0 rounded-full animate-ping opacity-25 ${
                    breathState === "Inhale" 
                      ? "bg-clay" 
                      : breathState === "Hold" 
                      ? "bg-gold" 
                      : breathState === "Exhale" 
                      ? "bg-moss" 
                      : "bg-stone"
                  }`} />
                </div>

                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-clay font-bold">
                    Pranayama Breathing Guide
                  </h4>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={breathState}
                      initial={{ opacity: 0, y: 3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm font-serif italic text-ink font-semibold mt-1"
                    >
                      {breathState === "Inhale" && "Breath In: Draw in quiet energy..."}
                      {breathState === "Hold" && "Hold: Suspend and feel the peace..."}
                      {breathState === "Exhale" && "Breath Out: Let go of all strain..."}
                      {breathState === "HoldAgain" && "Hold Again: Rest in the empty space..."}
                    </motion.p>
                  </AnimatePresence>
                  <p className="text-[10.5px] leading-normal text-ink-soft/90 font-light mt-1">
                    Take a moment to align with this pattern before exploring my offerings.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA Block */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <a
                href="#sessions"
                className="group inline-flex items-center justify-center gap-3 bg-ink text-paper px-8 py-4.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-[#201715] hover:-translate-y-0.5 active:translate-y-0 shadow-md border border-ink"
              >
                View Sessions
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 text-clay" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center bg-transparent text-ink px-8 py-4.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-stone-light hover:-translate-y-0.5 active:translate-y-0 border border-stone"
              >
                Our Journey
              </a>
            </div>

          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
