"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import HangingLotus from "@/components/ui/HangingLotus";

type BreathStateType = "Inhale" | "Hold" | "Exhale" | "HoldAgain";

const slideshowImages = [
  { src: "/images/profile-hero1.jpeg", tag: "LIFE SKILLS FACILITATOR", alt: "Sharath Chandra Kancherla - CST touch" },
  { src: "/images/sck-music.jpeg", tag: "MUSIC THERAPIST", alt: "Sharath Chandra Kancherla - Swara Frequencies" },
  { src: "/images/sck-yoga.jpeg", tag: "YOGA & RAKKENHO", alt: "Sharath Chandra Kancherla - Sole Pressure" },
  { src: "/images/sck-tutuor.jpeg", tag: "NLP COACH & MENTOR", alt: "Sharath Chandra Kancherla - Habit Adjustments" },
  { src: "/images/sck-cool.jpeg", tag: "VEDIC ASTROLOGER", alt: "Sharath Chandra Kancherla - Chart Reading" }
];

export default function Hero() {
  const [cycleTime, setCycleTime] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const hasSeen = typeof window !== "undefined" && sessionStorage.getItem("hasSeenIntro") === "true";
    
    let timerId: any = null;
    const startTimer = () => {
      if (timerId) return;
      timerId = setInterval(() => {
        setCycleTime((t) => (t + 1) % 18);
      }, 1000);
    };

    if (hasSeen) {
      startTimer();
    } else {
      const handleIntroComplete = () => {
        startTimer();
      };
      window.addEventListener("intro-complete", handleIntroComplete);
      return () => {
        if (timerId) clearInterval(timerId);
        window.removeEventListener("intro-complete", handleIntroComplete);
      };
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, []);

  let breathState: BreathStateType = "Inhale";
  let breathCount = 6;

  if (cycleTime < 6) {
    breathState = "Inhale";
    breathCount = 6 - cycleTime;
  } else if (cycleTime < 10) {
    breathState = "Hold";
    breathCount = 4 - (cycleTime - 6);
  } else if (cycleTime < 16) {
    breathState = "Exhale";
    breathCount = 6 - (cycleTime - 10);
  } else {
    breathState = "HoldAgain";
    breathCount = 2 - (cycleTime - 16);
  }

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
      <HangingLotus align="right" />
      <HangingLotus align="right" offset="right-16 sm:right-28" className="top-8 opacity-75 scale-90" />
      <HangingLotus align="right" offset="right-28 sm:right-44" className="top-16 opacity-50 scale-75" />
      <HangingLotus align="right" offset="right-36 sm:right-56" className="top-24 opacity-30 scale-[0.6]" />

      <div className="absolute top-0 left-0 w-full h-[1px] bg-stone/70" />
      
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
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col justify-center items-center w-full order-last lg:order-first"
          >
            <div className="relative w-full max-w-[380px] aspect-[4/5] bg-stone-light/50 border-culture p-4 shadow-xl">
              <div className="absolute inset-0 border border-gold/25 m-2.5 pointer-events-none" />
              
              <div className="relative w-full h-full overflow-hidden border border-stone">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={slideshowImages[imgIndex].src}
                      alt={slideshowImages[imgIndex].alt}
                      fill
                      priority
                      className="object-cover"
                      sizes="(min-width: 1024px) 30vw, 85vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="absolute -bottom-4 right-6 bg-clay text-paper text-[9px] font-mono tracking-widest font-bold px-4 py-1.5 shadow-md min-w-[150px] text-center z-30 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={imgIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="block"
                  >
                    {slideshowImages[imgIndex].tag}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-soft">
                Biodynamic Breath &bull; Sound Touch
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 w-full"
          >
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
              
              <p className="mt-4 font-serif italic text-xs tracking-wider text-ink-soft bg-stone-light/40 border-l border-clay/60 pl-4 py-1 max-w-xl mx-auto lg:mx-0">
                <span className="font-hindi not-italic font-normal block mb-1 text-[13.5px]">&ldquo;असतो मा सद्गमय &bull; तमसो मा ज्योतिर्गमय &bull; मृत्योर्मा अमृतं गमय&rdquo;</span>
                <span className="text-[11.5px] font-sans tracking-wide text-ink-soft/80 block mt-1 not-italic">
                  Lead me from ignorance to truth, from darkness to light, from death to immortality.
                </span>
              </p>
            </div>

            <div className="max-w-xl w-full">
              <p className="text-sm leading-relaxed text-ink-soft font-light">
                I integrate restorative bio-dynamic CranioSacral touch, rhythmic foot pressure, vocal harmonics, and chart guidance to realign the body. This is a dedicated sanctuary crafted for your body to recall its innate pattern of rest.
              </p>
              <div className="text-center lg:text-right mt-4 w-full">
                <span className="font-hindi font-bold text-clay text-lg sm:text-xl block">
                  — Sharath Chandra Kancherla
                </span>
              </div>
            </div>

             <div className="w-full max-w-xl border border-stone bg-paper p-5.5 rounded-none shadow-sm relative overflow-hidden mx-auto lg:mx-0">
              <div className="flex items-center gap-5 relative z-10">
                <div className="relative flex items-center justify-center shrink-0">
                  <motion.div
                    animate={{
                      scale: (breathState === "Inhale" || breathState === "Hold") ? 1.22 : 1,
                    }}
                    transition={{
                      duration: (breathState === "Inhale" || breathState === "Exhale") ? 6 : (breathState === "Hold" ? 4 : 2),
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

             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2 justify-center lg:justify-start">
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
