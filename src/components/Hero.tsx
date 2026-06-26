"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="top"
      className="relative pb-24 pt-20 sm:pt-28 sm:pb-36 bg-paper overflow-hidden"
    >
      {/* Decorative Traditional Border Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-stone/70" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-stone/70" />

      {/* Vertical grid line accents to frame the layout (very premium editorial feel) */}
      <div className="absolute left-[5%] top-0 h-full w-[1px] bg-stone/30 hidden xl:block" />
      <div className="absolute right-[5%] top-0 h-full w-[1px] bg-stone/30 hidden xl:block" />

      {/* Soft circular Mandala background pattern (CSS generated) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-clay/5 flex items-center justify-center opacity-30 select-none pointer-events-none">
        <div className="w-[450px] h-[450px] rounded-full border border-dashed border-gold/10 flex items-center justify-center">
          <div className="w-[300px] h-[300px] rounded-full border border-clay/10 flex items-center justify-center">
            <div className="w-[150px] h-[150px] rounded-full border border-dashed border-gold/15" />
          </div>
        </div>
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Centered Saffron Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-clay bg-stone/60 px-4 py-1.5 border border-stone/80 rounded-none shadow-sm">
              EST. 2012 / HOLISTIC HEALER &amp; MENTOR
            </span>
          </motion.div>

          {/* Headline - Editorial Brand Aura */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl">
            <h1 className="font-display text-4xl sm:text-7xl font-light tracking-tight leading-[1.05] text-ink">
              SHARATH CHANDRA <br />
              <span className="font-serif italic font-normal text-3xl sm:text-6xl text-ink-soft/90 block mt-3">
                &ldquo;A space for the body to remember how to rest.&rdquo;
              </span>
            </h1>
            
            {/* Sanskrit Quote Ribbon */}
            <p className="font-serif italic text-xs tracking-[0.25em] text-clay/80 mt-6 select-none">
              वसुधैव कुटुम्बकम् &bull; The World is One Family
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-16 h-[1px] bg-clay/60 my-10"
          />

          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full mt-4">
            
            {/* Left Column: Portrait */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex flex-col gap-3 group w-full"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-stone bg-stone-light/40 shadow-md p-3.5 transition-shadow duration-500 hover:shadow-lg">
                {/* Traditional corner border accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-clay" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-clay" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-clay" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-clay" />
                
                <div className="relative w-full h-full overflow-hidden border border-stone/40">
                  <Image
                    src="/images/profile-hero1.jpeg"
                    alt="Portrait of Sharath Chandra Kancherla"
                    fill
                    priority
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-103"
                    sizes="(min-width: 1024px) 35vw, 90vw"
                  />
                </div>
              </div>
              <div className="flex justify-between px-1 text-[9px] font-mono tracking-widest text-ink-soft/75 uppercase">
                <span>SHARATH CHANDRA KANCHERLA</span>
                <span className="text-clay font-bold">HYDERABAD, INDIA</span>
              </div>
            </motion.div>

            {/* Right Column: Biography Summary & Actions */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="border-l-2 border-clay/60 pl-6 py-2 flex flex-col gap-6.5">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] font-bold text-moss mb-2">
                    Healing &bull; Wisdom &bull; Music
                  </p>
                  <p className="text-sm leading-relaxed text-ink-soft font-light max-w-xl">
                    I empower individuals with practical tools for{" "}
                    <span className="highlight-marker">holistic well-being</span>{" "}
                    and physical restoration. Integrating restorative biodynamic touch, traditional Japanese bodywork, Carnatic sound therapy, and celestial guidance, I help you restore clarity and realign your spirit.
                  </p>
                  <p className="text-sm leading-relaxed text-ink-soft font-light max-w-xl mt-3">
                    Over the past decade, my work has focused on blending ancient eastern practices with modern scientific stress-management methodologies to cultivate deep healing and true inner stillness.
                  </p>
                </div>

                {/* Core Pillars List with Sanskrit/Yogic touches */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] font-bold uppercase tracking-widest text-ink">
                  <span>CST Therapy</span>
                  <span className="text-clay select-none font-sans">&bull;</span>
                  <span>Rakkenho Therapy</span>
                  <span className="text-clay select-none font-sans">&bull;</span>
                  <span>Sound Healing</span>
                  <span className="text-clay select-none font-sans">&bull;</span>
                  <span>Vedic Wisdom</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
                  <a
                    href="#sessions"
                    className="group inline-flex items-center justify-center gap-3 bg-ink text-paper px-8 py-4.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-[#2E1E16] hover:-translate-y-0.5 active:translate-y-0 shadow-sm border border-ink"
                  >
                    Explore Offerings
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center justify-center bg-transparent text-ink px-8 py-4.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-stone/50 hover:-translate-y-0.5 active:translate-y-0 border border-stone"
                  >
                    Read Biography
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}
