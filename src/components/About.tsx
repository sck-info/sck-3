import Container from "@/components/ui/Container";
import { Sparkles, Calendar, Award } from "lucide-react";

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
      {/* Decorative Traditional Border Accent */}
      <div className="absolute top-[10%] right-[3%] w-64 h-64 text-stone/10 select-none pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <Container>
        {/* Completely Redesigned 3-Column Column Grid Template */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* COLUMN 1 (lg:col-span-4): Editorial Quote & Story */}
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
              <p className="font-serif">
                &ldquo;श्रद्धावान् लभते ज्ञानं तत्परः संयतेन्द्रियः&rdquo;
              </p>
              <p className="text-[9px] font-sans tracking-wide text-ink-soft/80 mt-1 not-italic uppercase font-semibold">
                The dedicated seeker acquires true wisdom.
              </p>
            </div>
          </div>

          {/* COLUMN 2 (lg:col-span-4): Stacked Path of Service (Vision/Mission) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <h3 className="text-xs font-mono tracking-[0.2em] font-bold text-moss flex items-center gap-2 uppercase">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Path of Service
            </h3>

            {/* Vision Panel */}
            <div className="border-culture bg-stone-light/25 p-6 flex flex-col gap-3 relative">
              <span className="absolute top-0 right-0 bg-clay text-paper text-[8px] uppercase tracking-widest font-bold px-2 py-0.5">
                Vision
              </span>
              <h4 className="text-xs uppercase tracking-wider font-bold text-ink">
                Inspire 1 Billion Seekers
              </h4>
              <p className="text-xs leading-relaxed text-ink-soft font-light">
                To uplift lives globally through meditation, acoustics, wisdom, and conscious lifestyle coaching, establishing a peaceful world that lives as one global family.
              </p>
            </div>

            {/* Mission Panel */}
            <div className="border-culture bg-stone-light/25 p-6 flex flex-col gap-3 relative">
              <span className="absolute top-0 right-0 bg-clay text-paper text-[8px] uppercase tracking-widest font-bold px-2 py-0.5">
                Mission
              </span>
              <h4 className="text-xs uppercase tracking-wider font-bold text-ink">
                Empower and Restore
              </h4>
              <p className="text-xs leading-relaxed text-ink-soft font-light">
                Provide actionable methodologies for well-being through classes, corporate modules, and hands-on biodynamic therapy sessions that release stress and restore vitality.
              </p>
            </div>
          </div>

          {/* COLUMN 3 (lg:col-span-4): Timeline "Path of Wisdom" Credentials */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-xs font-mono tracking-[0.2em] font-bold text-moss flex items-center gap-2 uppercase">
              <Award className="h-3.5 w-3.5 text-gold" />
              Path of Wisdom
            </h3>

            <div className="relative border-l border-stone pl-6 ml-2 flex flex-col gap-8 py-2">
              {pathSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline indicator node */}
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

        {/* Unified Bottom Row: Inspiration Panel */}
        <div className="mt-20 border-t border-stone pt-12 flex flex-col items-center">
          <div className="border border-stone/50 bg-stone-light/10 p-8 text-center max-w-2xl mx-auto rounded-none relative">
            {/* Top decorative mandala details */}
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
