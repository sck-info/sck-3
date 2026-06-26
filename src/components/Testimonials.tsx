"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    name: "Sriram",
    role: "Software Architect",
    text: "The CranioSacral sessions with Sharath have been deeply restorative. I walked in with chronic stress and neck tension from desk work, and left feeling an incredible sense of space, lightness, and deep alignment. His gentle touch is truly therapeutic.",
    therapy: "CranioSacral Therapy",
  },
  {
    name: "Gokul",
    role: "Yoga Instructor",
    text: "As a long-time practitioner of yoga, I was amazed by the effectiveness of Rakkenho. The rhythmic foot pressure completely released tension in my lower back that years of stretching couldn't touch. An ancient art masterfully applied.",
    therapy: "Rakkenho Therapy",
  },
  {
    name: "Sanjana",
    role: "Creative Director",
    text: "Sharath's vocal harmonics and sound healing sessions helped me navigate a period of severe anxiety. The frequencies resonance created a safe space for emotional release and profound mental clarity. Highly recommended for inner peace.",
    therapy: "Music Therapy",
  },
  {
    name: "Usha",
    role: "Entrepreneur",
    text: "The Vedic astrology reading was eye-opening. Sharath doesn't just read charts; he translates planetary patterns into practical life guidance. It gave me absolute clarity on my career path during a major transition phase.",
    therapy: "Vedic Astrology",
  },
  {
    name: "Sharath",
    role: "Mindfulness Advocate",
    text: "The box breathing guidance and holistic health coaching completely reset my sleep cycle and energy levels. Sharath's deep understanding of wellness integrates ancient Indian traditions with a modern lifestyle.",
    therapy: "Holistic Lifestyle Coaching",
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="border-t border-stone py-24 sm:py-32 bg-aura relative overflow-hidden"
    >
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 text-stone/10 select-none pointer-events-none transform rotate-45">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path
            d="M50 0 C50 0 35 30 35 60 C35 80 50 100 50 100 C50 100 65 80 65 60 C65 30 50 0 50 0 Z"
            opacity="0.3"
          />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-light/60 border border-stone rounded-none mb-4">
            <span className="text-clay text-[10px]" aria-hidden="true">
              &#10047;
            </span>
            <span className="text-[9px] font-mono tracking-[0.25em] font-bold text-moss">
              PREMA VRIKSHA &bull; WALL OF LOVE
            </span>
          </div>

          <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Stories of{" "}
            <span className="font-serif italic font-normal text-clay">
              Healing
            </span>{" "}
            & Transformation
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-ink-soft leading-relaxed font-light">
            Honest reflections from individuals who have rediscovered balance,
            somatic release, and clarity through our customized paths of
            wellness.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`p-8 border border-stone bg-paper relative flex flex-col justify-between group shadow-sm transition-all duration-300 hover:border-clay/40 ${
                idx === 0
                  ? "md:col-span-2 lg:col-span-2"
                  : "md:col-span-1 lg:col-span-1"
              }`}
            >
              <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-stone group-hover:border-clay/30 transition-colors" />
              <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-stone group-hover:border-clay/30 transition-colors" />

              <div>
                <span className="text-clay text-lg select-none font-serif leading-none block mb-4">
                  &ldquo;
                </span>
                <p className="text-xs sm:text-[13px] leading-relaxed text-ink-soft font-serif italic">
                  {t.text}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-light/60 flex flex-col gap-1">
                <span className="text-xs uppercase font-mono tracking-widest text-clay/80">
                  {t.therapy}
                </span>
                <h4 className="text-[14px] font-semibold text-ink font-sans">
                  {t.name}
                </h4>
                <span className="text-[10px] text-ink-soft/80 font-light">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
