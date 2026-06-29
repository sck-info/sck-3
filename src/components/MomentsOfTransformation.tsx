"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import HangingLotus from "@/components/ui/HangingLotus";

const moments = [
  {
    id: "cst-moment",
    title: "Nervous System Rest",
    subtitle: "CranioSacral Touch",
    description: "Releasing deep structural tension along the craniosacral system to activate somatic stillness.",
    image: "/images/profile-hero1.jpeg",
    badge: "BIODYNAMIC CST",
  },
  {
    id: "music-moment",
    title: "Harmonic Swara Awakening",
    subtitle: "Vocal & Sound Frequency",
    description: "Blending Indian classical Carnatic ragas and sound vibrations to balance emotional centers.",
    image: "/images/sck-music.jpeg",
    badge: "MUSIC THERAPY",
  },
  {
    id: "rakkenho-moment",
    title: "Sole-Pressure Alignment",
    subtitle: "Japanese Rakkenho Bodywork",
    description: "Rhythmic pressure applied through the soles of the feet to stimulate circulation and posture.",
    image: "/images/sck-yoga.jpeg",
    badge: "RAKKENHO",
  },
  {
    id: "nlp-moment",
    title: "Subconscious Recalibration",
    subtitle: "NLP Master Mentoring",
    description: "Cognitive linguistic adjustments designed for corporate professionals to dismantle limiting beliefs.",
    image: "/images/sck-tutuor.jpeg",
    badge: "NLP COACHING",
  },
  {
    id: "astrology-moment",
    title: "Cosmic Directional Clarity",
    subtitle: "Vedic Chart Guidance",
    description: "Illuminating natal horoscopes, planetary periods, and life timing to navigate personal growth.",
    image: "/images/sck-cool.jpeg",
    badge: "VEDIC ASTROLOGY",
  },
];

export default function MomentsOfTransformation() {
  const marqueeItems = [...moments, ...moments];

  return (
    <section
      id="moments"
      className="border-t border-stone py-24 sm:py-32 bg-paper relative overflow-hidden"
    >
      <HangingLotus align="left" />
      <HangingLotus align="right" />

      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-mono tracking-[0.25em] font-bold text-moss uppercase bg-stone-light/60 px-4 py-1.5 border border-stone inline-flex items-center gap-2">
            RUPANTARAM &bull; VISUAL HIGHLIGHTS
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink">
            Moments of{" "}
            <span className="font-serif italic font-normal text-clay">
              Transformation
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-ink-soft leading-relaxed font-light">
            A visual showcase across our dedicated wellness disciplines—capturing bio-dynamic touch, vocal harmonics, sole pressure, and cognitive clarity.
          </p>
        </div>
      </Container>

      <div className="relative w-full overflow-hidden py-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-r from-paper to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-l from-paper to-transparent pointer-events-none" />

        <div className="animate-marquee-scroll flex gap-6 px-6">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group border border-stone bg-stone-light/10 p-6 flex flex-col justify-between transition-all duration-300 hover:border-clay hover:shadow-lg w-[320px] sm:w-[380px] shrink-0 relative overflow-hidden"
            >
              <div>
                <div className="relative w-full aspect-[4/3] overflow-hidden border border-stone mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="380px"
                  />
                  <div className="absolute top-3 right-3 bg-ink text-paper text-[9px] font-mono tracking-widest font-bold px-3 py-1 uppercase shadow-md">
                    {item.badge}
                  </div>
                </div>

                <span className="text-xs font-mono tracking-wider uppercase font-semibold text-clay block">
                  {item.subtitle}
                </span>

                <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-ink">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
