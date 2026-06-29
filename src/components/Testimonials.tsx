"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import HangingLotus from "@/components/ui/HangingLotus";

const testimonials = [
  {
    name: "Usha",
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
    name: "Harshith",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="border-t border-stone py-24 sm:py-32 bg-aura relative overflow-hidden"
    >
      <HangingLotus align="left" />
      <HangingLotus align="right" />
      
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-stone-light/60 border border-stone rounded-none mb-4">
            <span className="text-clay text-xs select-none" aria-hidden="true">&#10047;</span>
            <span className="text-[10px] font-mono tracking-[0.25em] font-bold text-moss uppercase">
              PREMA VRIKSHA &bull; WALL OF LOVE
            </span>
          </div>

          <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Stories of{" "}
            <span className="font-serif italic font-normal text-clay">
              Healing
            </span>{" "}
            &amp; Transformation
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink-soft leading-relaxed font-light">
            Honest reflections from individuals who have rediscovered balance,
            somatic release, and clarity through our customized paths of
            wellness.
          </p>
        </div>

        <div
          className="mt-16 max-w-4xl mx-auto relative px-4 sm:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="min-h-[320px] sm:min-h-[280px] flex items-center justify-center relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="w-full border border-stone bg-paper p-8 sm:p-12 relative shadow-md flex flex-col justify-between"
              >
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-clay/40" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-clay/40" />

                <span className="text-clay text-3xl select-none block mb-4" aria-hidden="true">
                  &#10047;
                </span>

                <p className="text-base sm:text-xl leading-relaxed text-ink font-serif italic max-w-3xl">
                  &ldquo;{activeTestimonial.text}&rdquo;
                </p>

                <div className="mt-8 pt-6 border-t border-stone/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-ink font-sans">
                      {activeTestimonial.name}
                    </h3>
                    <p className="text-xs text-ink-soft font-light">
                      {activeTestimonial.role}
                    </p>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-widest text-clay font-semibold bg-stone-light/80 px-3.5 py-1.5 border border-stone">
                    {activeTestimonial.therapy}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 transition-all duration-300 rounded-full ${
                    idx === currentIndex ? "w-8 bg-clay" : "w-2.5 bg-stone hover:bg-stone-dark"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-3 border border-stone bg-paper text-ink hover:border-clay hover:text-clay transition-all duration-200 shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 border border-stone bg-paper text-ink hover:border-clay hover:text-clay transition-all duration-200 shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
