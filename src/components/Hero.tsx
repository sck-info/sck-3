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
  const [template, setTemplate] = useState<"template1" | "template2">("template1");

  useEffect(() => {
    const saved = localStorage.getItem("hero-template");
    if (saved === "template2") {
      setTemplate("template2");
    }

    const handleTemplateChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ template: "template1" | "template2" }>;
      if (customEvent.detail && customEvent.detail.template) {
        setTemplate(customEvent.detail.template);
      }
    };
    window.addEventListener("change-hero-template", handleTemplateChange);
    return () => window.removeEventListener("change-hero-template", handleTemplateChange);
  }, []);

  useEffect(() => {
    if (template === "template2") return;
    const slideTimer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, [template]);

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

  const isTemplate2 = template === "template2";

  return (
    <section
      id="top"
      className={`relative overflow-hidden transition-all duration-500 ${
        isTemplate2
          ? "bg-[#090A0F] text-paper py-16 sm:py-24 md:min-h-[calc(100vh-80px)] flex items-center justify-center"
          : "bg-aura text-ink pb-24 pt-16 sm:pt-24 sm:pb-32"
      }`}
    >
      <AnimatePresence>
        {isTemplate2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 z-0 hidden md:block pointer-events-none"
          >
            <div className="absolute top-0 right-0 w-[55%] h-full">
              <Image
                src="/images/profile-hero1.jpeg"
                alt="Sharath Chandra Kancherla Balcony Photo"
                fill
                priority
                className="object-cover object-top lg:object-center opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#090A0F] via-[#090A0F]/60 to-transparent" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#090A0F] via-[#090A0F] to-transparent w-[55%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-[#090A0F]/50" />
          </motion.div>
        )}
      </AnimatePresence>

      <HangingLotus align="right" />
      <HangingLotus align="right" offset="right-16 sm:right-28" className="top-8 opacity-75 scale-90" />
      <HangingLotus align="right" offset="right-28 sm:right-44" className="top-16 opacity-50 scale-75" />
      <HangingLotus align="right" offset="right-36 sm:right-56" className="top-24 opacity-30 scale-[0.6]" />

      <div className="absolute top-0 left-0 w-full h-[1px] bg-stone/70 z-10" />

      <Container className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center ${
            isTemplate2 ? "md:max-w-6xl md:mx-auto" : ""
          }`}
        >
          <motion.div
            variants={itemVariants}
            className={`lg:col-span-5 flex-col justify-center items-center w-full order-last lg:order-first ${
              isTemplate2 ? "hidden md:hidden lg:hidden" : "flex"
            }`}
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
            className={`flex flex-col items-center lg:items-start text-center lg:text-left gap-8 w-full ${
              isTemplate2
                ? "lg:col-span-8 max-w-2xl text-left"
                : "lg:col-span-7"
            }`}
          >
            <div>
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 border rounded-none mb-4 ${
                isTemplate2 ? "bg-paper/10 border-paper/20" : "bg-stone-light/60 border-stone"
              }`}>
                <span className="text-clay text-xs select-none" aria-hidden="true">&#10047;</span>
                <span className={`text-[10px] font-mono tracking-[0.25em] font-bold uppercase ${
                  isTemplate2 ? "text-gold" : "text-moss"
                }`}>
                  WELCOME &bull; SWAAGATAM
                </span>
              </div>
              
              <h1 className={`font-display text-4xl sm:text-6xl font-light tracking-tight leading-[1.08] ${
                isTemplate2 ? "text-paper" : "text-ink"
              }`}>
                Inspire. <br />
                <span className="font-serif italic font-normal text-clay">Heal. Uplift.</span>
              </h1>
              
              <p className={`mt-4 font-serif italic text-sm tracking-wider border-l pl-4 py-1.5 max-w-xl ${
                isTemplate2 
                  ? "text-paper/90 bg-paper/5 border-gold/60 mx-auto lg:mx-0" 
                  : "text-ink-soft bg-stone-light/40 border-clay/60 mx-auto lg:mx-0"
              }`}>
                <span className="font-hindi not-italic font-normal block mb-1 text-base sm:text-lg">&ldquo;असतो मा सद्गमय &bull; तमसो मा ज्योतिर्गमय &bull; मृत्योर्मा अमृतं गमय&rdquo;</span>
                <span className={`text-xs sm:text-sm font-sans tracking-wide block mt-1 not-italic ${
                  isTemplate2 ? "text-paper/80" : "text-ink-soft/80"
                }`}>
                  Lead me from ignorance to truth, from darkness to light, from death to immortality.
                </span>
              </p>
            </div>

            <div className="max-w-xl w-full">
              <p className={`text-base sm:text-lg leading-relaxed font-light ${
                isTemplate2 ? "text-paper/90" : "text-ink-soft"
              }`}>
                Sharath Chandra Kancherla is a Life Skills Facilitator, Mind &amp; Breath Expert, Holistic Wellness Coach &amp; Professional Singer. Inspiring 1.5 lakh+ lives across 10+ countries.
              </p>
            </div>

             <div className={`w-full max-w-xl border p-5.5 rounded-none shadow-sm relative overflow-hidden mx-auto lg:mx-0 transition-colors ${
               isTemplate2 
                 ? "border-gold/30 bg-[#090A0F]/90 backdrop-blur-md" 
                 : "border-stone bg-paper"
             }`}>
              <div className="flex items-center gap-5 relative z-10 text-left">
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
                        ? "bg-clay/20 border-clay"
                        : breathState === "Hold"
                        ? "bg-gold/20 border-gold"
                        : breathState === "Exhale"
                        ? "bg-moss/20 border-moss"
                        : isTemplate2 ? "bg-paper/10 border-paper/30" : "bg-stone-light border-stone"
                    }`}
                  >
                    <span className={`text-sm font-mono font-bold ${isTemplate2 ? "text-paper" : "text-ink"}`}>{breathCount}s</span>
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
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-clay font-bold">
                    Pranayama Breathing Guide
                  </h4>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={breathState}
                      initial={{ opacity: 0, y: 3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -3 }}
                      transition={{ duration: 0.2 }}
                      className={`text-base font-serif italic font-semibold mt-1 ${
                        isTemplate2 ? "text-paper" : "text-ink"
                      }`}
                    >
                      {breathState === "Inhale" && "Breath In: Draw in quiet energy..."}
                      {breathState === "Hold" && "Hold: Suspend and feel the peace..."}
                      {breathState === "Exhale" && "Breath Out: Let go of all strain..."}
                      {breathState === "HoldAgain" && "Hold Again: Rest in the empty space..."}
                    </motion.p>
                  </AnimatePresence>
                  <p className={`text-xs sm:text-sm leading-normal font-light mt-1 ${
                    isTemplate2 ? "text-paper/80" : "text-ink-soft/90"
                  }`}>
                    Take a moment to align with this pattern before exploring my offerings.
                  </p>
                </div>
              </div>
            </div>

             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2 justify-center lg:justify-start">
              <a
                href="#sessions"
                className={`group inline-flex items-center justify-center gap-3 px-8 py-4.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-md border ${
                  isTemplate2
                    ? "bg-clay text-paper border-clay hover:bg-gold hover:border-gold"
                    : "bg-ink text-paper border-ink hover:bg-[#201715]"
                }`}
              >
                View Sessions
                <ArrowRight className={`h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 ${
                  isTemplate2 ? "text-paper" : "text-clay"
                }`} />
              </a>
              <a
                href="#about"
                className={`inline-flex items-center justify-center px-8 py-4.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 border ${
                  isTemplate2
                    ? "bg-paper/10 text-paper border-paper/30 hover:bg-paper/20"
                    : "bg-transparent text-ink border-stone hover:bg-stone-light"
                }`}
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
