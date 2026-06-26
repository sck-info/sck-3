import Container from "@/components/ui/Container";
import HangingLotus from "@/components/ui/HangingLotus";
import { Award } from "lucide-react";

const pathSteps = [
  {
    title: "Vocalist & Classical Musician",
    detail: "Professional singer, vocalist, and certified Music Therapist from S-VYASA. Blends Carnatic swara frequencies with healing touch.",
  },
  {
    title: "Life Skills & Breath Expert",
    detail: "Facilitator and coordinator of breathwork, meditation, and stress-reduction programs for over a decade.",
  },
  {
    title: "Advanced Biodynamic CST",
    detail: "Double Post-Graduate Diploma in CranioSacral Therapy, specializing in nervous system regulation and physical rest.",
  },
  {
    title: "Rakkenho & Sound Therapy Practitioner",
    detail: "Combining traditional Japanese sole-pressure bodywork with targeted sound frequency vibrations.",
  },
  {
    title: "NLP Master Coach & Astrologer",
    detail: "Blending subconscious Neuro-Linguistic programming with traditional Vedic charts for directional life guidance.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-stone py-24 sm:py-32 bg-paper relative overflow-hidden"
    >
      <HangingLotus align="left" />
      <HangingLotus align="right" />

      <div className="absolute left-[5%] top-0 h-full w-[1px] bg-stone/20 hidden xl:block" />
      <div className="absolute right-[5%] top-0 h-full w-[1px] bg-stone/20 hidden xl:block" />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start relative z-10">
          
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-clay" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink-soft">
                Biographical Narrative
              </span>
            </div>
            
            <h2 className="font-display text-3xl font-light tracking-tight text-ink">
              The Path of <br />
              <span className="font-serif italic font-normal text-clay">Listening.</span>
            </h2>

            <p className="text-xs leading-relaxed text-ink-soft font-light">
              Over the past decade, my work has focused on bridging traditional Eastern wellness with modern corporate lifestyles. Through direct touch, vibrational acoustics, and cognitive alignments, I aim to create spaces where deep healing happens naturally.
            </p>

            <div className="border border-stone p-5 bg-stone-light/10 text-[11px] leading-relaxed text-ink-soft italic relative">
              <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-clay" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-clay" />
              <p className="font-hindi text-ink not-italic text-sm">
                &ldquo;श्रद्धावान् लभते ज्ञानं तत्परः संयतेन्द्रियः&rdquo;
              </p>
              <p className="text-[10.5px] font-sans tracking-wide text-ink-soft/80 mt-1 not-italic uppercase font-semibold">
                The dedicated seeker acquires true wisdom.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-xs font-mono tracking-[0.2em] font-bold text-moss flex items-center gap-2 uppercase">
              <span className="text-clay text-[10px]">&#10047;</span>
              Path of Service
            </h3>

            <div className="border border-ink p-8 bg-paper relative shadow-sm">
              <div className="absolute top-0 right-0 bg-ink text-paper text-[8px] uppercase tracking-widest font-bold px-3 py-1">
                Foundations
              </div>

              <div className="mb-8">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink mb-3">
                  Our Vision
                </h3>
                <p className="text-xs leading-relaxed text-ink-soft font-light">
                  <span className="bg-gold/25 text-ink font-semibold px-1 rounded-sm">To inspire and uplift one billion lives</span> through healing,
                  wisdom, music, and conscious living—nurturing a world that
                  lives as one global family.
                </p>
              </div>

              <div className="border-t border-stone pt-8">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink mb-3">
                  Our Mission
                </h3>
                <p className="text-xs leading-relaxed text-ink-soft font-light">
                  To empower individuals with practical tools for holistic
                  well-being <span className="bg-gold/25 text-ink font-semibold px-1 rounded-sm">through meditation, yoga, breathwork, music, education, and timeless wisdom</span>, enabling them to live
                  healthier, happier, and more purposeful lives.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-xs font-mono tracking-[0.2em] font-bold text-moss flex items-center gap-2 uppercase">
              <Award className="h-3.5 w-3.5 text-clay" />
              Path of Wisdom
            </h3>

            <div className="relative border-l border-stone pl-6 ml-2 flex flex-col gap-8 py-2">
              {pathSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[30px] top-1 flex items-center justify-center w-4 h-4 bg-paper border border-clay rounded-full">
                    <span className="w-1.5 h-1.5 bg-clay rounded-full" />
                  </span>

                  <h4 className="text-xs font-bold text-ink">
                    {step.title}
                  </h4>
                  <p className="text-[11px] leading-relaxed text-ink-soft font-light mt-1.5">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-20 border-t border-stone pt-12 flex flex-col items-center">
          <div className="border border-stone/50 bg-stone-light/10 p-8 text-center max-w-2xl mx-auto rounded-none relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper px-4 text-clay">
              <span className="text-sm select-none">&#10047;</span>
            </div>

            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-ink-soft">
              Guided Legacy
            </span>
            <p className="mt-3 font-display text-lg sm:text-xl font-light text-ink leading-relaxed">
              &ldquo;My work and life find their path in the grace, guidance and blessings of{" "}
              <a
                href="https://gurudev.artofliving.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif italic font-normal text-clay hover:underline decoration-clay transition-all"
              >
                Gurudev Sri Sri Ravi Shankar
              </a>
              .&rdquo;
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
}
